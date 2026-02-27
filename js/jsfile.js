var baseUrl = window.location.href;
var newUrl = "";

//Kollar om url:en innehåller x=
var regxPatt = new RegExp("x=");
var regxRes = regxPatt.test(baseUrl);

//Skapar variabler för canvas-storleken att användas i scriptet.
var canvasWidth = 1200;
var canvasHeight = 660;
var skala = 1;

var c = document.getElementById("myCanvas");

c.width = canvasWidth * skala;
c.height = canvasHeight * skala;
c.style.width = canvasWidth+"px";
c.style.height = canvasHeight+"px";

var ctx = c.getContext("2d");
ctx.scale(skala,skala);

//Sätter variabler för map marker
var mapmarker = new Image();
mapmarker.src = "images/map_marker_green.png";

function skapaImgElement(){
    // create a new img element
    const newImg = document.createElement("img");
    newImg.setAttribute("id", "mapImg");
    newImg.setAttribute("width", "1200");
    newImg.setAttribute("height", "660");

    // add the newly created element into the DOM
    const currentDiv = document.getElementById("myCanvas");
    document.body.insertBefore(newImg, currentDiv);
}

//Aktiveras vid body-onload 
function urlDrawOnload() {

    //Beroende på om url innehåller x= (parametrar) eller inte, ritas cirkel eller inte
    if(regxRes == true) {

        //Tar bort allt förutom de 13 sista tecken i url-string
        var sliceUrlParams = baseUrl.slice(-15);
        //Plockar ut värdena baserat på deras position i ordningen - hårdkodat
        var vFromSlice = sliceUrlParams.slice(2, 3);
        var xFromSlice = sliceUrlParams.slice(5, 9);
        var yFromSlice = sliceUrlParams.slice(11, 15);

        //Byter våning i select till våning från url-params. -4 då det bara finns två options hittills.
        document.getElementById('vSelect').selectedIndex = vFromSlice - 2;

        //Ändrar karta till den våning som indikeras i url:en
        document.getElementById("mapImg").src="images/plan" + vFromSlice + ".svg";

        //Ritar map_marker och centrerar den på musklicket.
        ctx.drawImage(mapmarker,xFromSlice - 21,yFromSlice - 61);

    }
    /*else {
        skapaImgElement();
        document.getElementById("mapImg").src="images/plan4.svg";
    }*/
}

//Dropdown-script, aktiveras vid byte av dropdown-option, som byter kartans bild
function bytVaning(){
    //hämtar värdet av vilken våning som är vald (2-9)
    var aktivVaning = document.getElementById('vSelect').value;
    //Rensar input-fältet
    document.getElementById("urlInput").value = "";
    //Ändrar kartbild (img-elementets källa)
    document.getElementById("mapImg").src="images/plan" + aktivVaning + ".svg";
    //Tar bort eventuell markör som blivit kvar efter att man klickat på bilden
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    // Döljer inputfält och visar instruktioner
    document.getElementById("instruktionerDiv").style.display = "inline-block";
    document.getElementById("copyDiv").style.display = "none";
}

//Aktiveras vid klick på canvas
function clickCanvas() {
    
    //Hämtar koordinater för klicket
    function getRelativeCoords(event) {
        return { x: event.offsetX, y: event.offsetY };
    }
    
    //Rensar föregående markör
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    //Ritar map_marker och centrerar den på musklicket.
    ctx.drawImage(mapmarker,event.offsetX - 21,event.offsetY - 61);
    
    //Skapar url med koordinater i parametrar
    var vaningAktiv = document.getElementById('vSelect').value;

    //Skapar x och y variabler som alltid har 3 siffror med hjälp av nollor
    var pad = "0000";
    var xZerofilled = (pad+event.offsetX).slice(-pad.length);
    var yZerofilled = (pad+event.offsetY).slice(-pad.length);

    //Om url innehåller x=: Skapar en ny url med de valda koordinaterna som parametrar
    if(regxRes == true) {
        var clearedUrl = baseUrl.slice(0, -16);
        var newUrl = clearedUrl + "?v=" + vaningAktiv + "x=" + xZerofilled + "y=" + yZerofilled;
    } 
    else if(regxRes == false) {
        var newUrl = baseUrl + "?v=" + vaningAktiv + "x=" + xZerofilled + "y=" + yZerofilled;
    }
    
    // Visar inputfält och döljer instruktioner när man klickat på canvas
    document.getElementById("instruktionerDiv").style.display = "none";
    document.getElementById("copyDiv").style.display = "inline-block";


    //Fyller input-fält med genererad url
    document.getElementById("urlInput").value = newUrl;

    //TILLFÄLLIGA KOORDINATER FÖR ATT MAPPA UPP RUM FÖR KOMMANDE FUNKTION
    document.getElementById("koordinaterText").innerHTML = "X: " + event.offsetX + " Y: " + event.offsetY;

}

//Aktiveras vid klick på "kopiera"-knapp. Kopierar innehåll av input-fältet (måste vara input-fält)
function kopieraUrl() {
    var copyText = document.getElementById("urlInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
