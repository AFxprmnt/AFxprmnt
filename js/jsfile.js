var baseUrl = window.location.href;
var newUrl = "";

//Kollar om url:en innehåller x=
var regxPatt = new RegExp("x=");
var regxRes = regxPatt.test(baseUrl);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//Skapar variabler för canvas-storleken att användas i scriptet.
var canvasWidth = 1100;
var canvasHeight = 640;

//Sätter variabler för respektive bakgrundsbild, men ritar ingen bakgrund i detta stadie (viktigt)
var background2 = new Image();
background2.src = "images/plan2.jpg";

var background3 = new Image();
background3.src = "images/plan3.jpg";

var background4 = new Image();
background4.src = "images/plan4.jpg";

var background5 = new Image();
background5.src = "images/plan5.jpg";

var background6 = new Image();
background6.src = "images/plan6.jpg";

var background7 = new Image();
background7.src = "images/plan7.jpg";

var background8 = new Image();
background8.src = "images/plan8.jpg";

var background9 = new Image();
background9.src = "images/plan9.jpg";

//Sätter variabler för map marker
var mapmarker = new Image();
mapmarker.src = "images/map_marker_green.png";

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

        // Gömmer dropdown-menyn om url innehåller parametrar (blivit länkad)
        document.getElementById("vselectDiv").style.visibility = "hidden";
        document.getElementById("instruktionerDiv").style.display = "none";

        if(vFromSlice == 2) {  
            ctx.drawImage(background2,0,0);  
            
        } 
        else if(vFromSlice == 3) {
            ctx.drawImage(background3,0,0);
        }
        else if(vFromSlice == 4) {
            ctx.drawImage(background4,0,0);
        }
        else if(vFromSlice == 5) {
            ctx.drawImage(background5,0,0);
        }
        else if(vFromSlice == 6) {
            ctx.drawImage(background6,0,0);
        }
        else if(vFromSlice == 7) {
            ctx.drawImage(background7,0,0);
        }
        else if(vFromSlice == 8) {
            ctx.drawImage(background8,0,0);
        }
        else if(vFromSlice == 9) {
            ctx.drawImage(background9,0,0);
        }

        //Ritar map_marker och centrerar den på musklicket.
        ctx.drawImage(mapmarker,xFromSlice - 21,yFromSlice - 61);

    }

    //Om url INTE innehåller parametrar, alltså startläge
    else if(regxRes == false) {

        //Ritar start-bakgrund (just nu våning 2)
        ctx.drawImage(background2,0,0);
    }

}


//Dropdown-script, aktiveras vid byte av dropdown-option, som byter bild på canvas mellan v4 & v5
function bytVaning() {

    //Beroende på vilken våning som valts: byts våningstext, rensar input-fält och ritar respektive bakgrund
    if(document.getElementById('vSelect').value == "2") {
        //Rensar input-fältet
        document.getElementById("urlInput").value = "";
        //Ritar rätt bakgrund
        ctx.drawImage(background2,0,0); 
    } 
    else if(document.getElementById('vSelect').value == "3") {
        //Rensar input-fältet
        document.getElementById("urlInput").value = "";    
        //Ritar rätt bakgrund
        ctx.drawImage(background3,0,0);      
    }
    else if(document.getElementById('vSelect').value == "4") {
        //Rensar input-fältet
        document.getElementById("urlInput").value = "";    
        //Ritar rätt bakgrund
        ctx.drawImage(background4,0,0);      
    }
    else if(document.getElementById('vSelect').value == "5") {
        //Rensar input-fältet
        document.getElementById("urlInput").value = "";    
        //Ritar rätt bakgrund
        ctx.drawImage(background5,0,0);      
    }
    else if(document.getElementById('vSelect').value == "6") {
        //Rensar input-fältet
        document.getElementById("urlInput").value = "";    
        //Ritar rätt bakgrund
        ctx.drawImage(background6,0,0);      
    }
    else if(document.getElementById('vSelect').value == "7") {
        //Rensar input-fältet
        document.getElementById("urlInput").value = "";    
        //Ritar rätt bakgrund
        ctx.drawImage(background7,0,0);      
    }
    else if(document.getElementById('vSelect').value == "8") {
        //Rensar input-fältet
        document.getElementById("urlInput").value = "";    
        //Ritar rätt bakgrund
        ctx.drawImage(background8,0,0);      
    }
    else if(document.getElementById('vSelect').value == "9") {
        //Rensar input-fältet
        document.getElementById("urlInput").value = "";    
        //Ritar rätt bakgrund
        ctx.drawImage(background9,0,0);      
    }
}

//Aktiveras vid klick på canvas
function clickCanvas() {
    
    //Hämtar koordinater för klicket
    function getRelativeCoords(event) {
        return { x: event.offsetX, y: event.offsetY };
    }
    
    //Rensar föregående cirkel samt bakgrund
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    //Beroende på vilken våning det är så ritar den bakgrunden igen
    if(document.getElementById('vSelect').value == "2") {
        ctx.drawImage(background2,0,0); 
    } 
    else if(document.getElementById('vSelect').value == "3") {
        ctx.drawImage(background3,0,0);      
    }
    else if(document.getElementById('vSelect').value == "4") {
        ctx.drawImage(background4,0,0);      
    }
    else if(document.getElementById('vSelect').value == "5") {
        ctx.drawImage(background5,0,0);      
    }
    else if(document.getElementById('vSelect').value == "6") {
        ctx.drawImage(background6,0,0);      
    }
    else if(document.getElementById('vSelect').value == "7") {
        ctx.drawImage(background7,0,0);      
    }
    else if(document.getElementById('vSelect').value == "8") {
        ctx.drawImage(background8,0,0);      
    }
    else if(document.getElementById('vSelect').value == "9") {
        ctx.drawImage(background9,0,0);      
    }

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
    
    // Visar dropdown-meny och inputfält när man klickat på canvas
    document.getElementById("vselectDiv").style.visibility = "visible";
    document.getElementById("instruktionerDiv").style.display = "none";
    document.getElementById("copyDiv").style.visibility = "visible";

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
