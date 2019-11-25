const urlRooms = 'http://127.0.0.1:8080/data/rooms.json';
const urlRoomCoords = 'http://127.0.0.1:8080/data/rumskordinater.json';


var options = {
    url: urlRooms,

    placeholder: "Sök på Hus, plan eller rumsnummer",

    theme: "square",

    getValue: function(element) {
        return element.roomName;
    },

    categories: [
        {   //Category Hus 1
            listLocation: "Hus 1",
            maxNumberOfElements: 20,
            header: "-- Hus 1 --"
        },
        {   //Category Hus 2
            listLocation: "Hus 2",
            maxNumberOfElements: 20,
            header: "-- Hus 2 --"
        }
    ],

    list: {
        maxNumberOfElements: 40,
        match: {
           enabled: true
       },
        showAnimation: {
            type: "slide", //normal|slide|fade
            time: 600,
            callback: function() {}
        },

        hideAnimation: {
            type: "slide", //normal|slide|fade
                time: 400,
        callback: function() {}
        } 
   },     
    
    template: {
        type: "links",
            fields: {
            link:  "roomCoordinate"
                }
    },

    //theme: "round"
        
};

$("#autoCompRooms").easyAutocomplete(options);
