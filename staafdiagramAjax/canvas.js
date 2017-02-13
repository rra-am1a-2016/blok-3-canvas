// Maak een array van javascript objecten

var data = [{ "id": 1,
              "name": "Arjan",
              "numberOfContacts": 200 },
            { "id": 2,
              "name": "Bert",
              "numberOfContacts": 10 },
            { "id": 3,
              "name": "Hans",
              "numberOfContacts": 168 },
            { "id": 4,
              "name": "Dewi",
              "numberOfContacts": 230 },
            { "id": 5,
              "name": "Gert",
              "numberOfContacts": 78 },
            { "id": 6,
              "name": "Stoffel",
              "numberOfContacts": 123 },
            { "id": 7,
              "name": "Harry",
              "numberOfContacts": 346 },
            { "id": 8,
              "name": "Jan",
              "numberOfContacts": 189 },
            { "id": 9,
              "name": "Bob",
              "numberOfContacts": 277 },
            { "id": 10,
              "name": "James",
              "numberOfContacts": 300 }];

// De lengte van het array is:
var arrayLength = data.length;

// Selecteer het canvas element op basis van zijn id.
var canvas = document.getElementById("myCanvas");

// We maken nu een context object met behulp van het canvas object
var context = canvas.getContext("2d");





var colorArray = ["blue", "green", "yellow", "red", "orange", "purple", "grey", "pink", "malachite"];

// Math.floor(), Math.random() *
function drawCanvas () {
   for ( var i = 0; i < arrayLength; i++ )
   {
      // Geef het te tekenen object een kleur
      context.fillStyle = randomColor(colorArray);

      // Teken een rechthoek met het context-object.
      context.fillRect(40 + i * 30, 360, 12, -1 * data[i].numberOfContacts);
   }   
}

drawCanvas();

function randomColor (colorArray) {
   var index = Math.floor(Math.random() * colorArray.length);
   return colorArray[index];
}