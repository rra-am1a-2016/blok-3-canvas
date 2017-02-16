// Maak een array van javascript objecten
var xmlHttp = new XMLHttpRequest();

var data = [];
xmlHttp.onreadystatechange = function () {

   if ( xmlHttp.readyState == 4 && xmlHttp.status == 200)
   {
      // Haal de data binnen
      data = JSON.parse(xmlHttp.responseText);
      
      // Teken de staafdiagrammen
      drawCanvas();
   }
}

// De lengte van het array is:
var arrayLength = data.length;

// Selecteer het canvas element op basis van zijn id.
var canvas = document.getElementById("myCanvas");

// We maken nu een context object met behulp van het canvas object
var context = canvas.getContext("2d");

// Maak een array gevuld met kleuren
var colorArray = ["blue", "green", "yellow", "red", "orange", "purple", "grey", "pink", "malachite"];

// Math.floor(), Math.random() *
function drawCanvas () {
   arrayLength = data.length;
   context.clearRect(0, 0, canvas.width, canvas.height);
   for ( var i = 0; i < arrayLength; i++ )
   {
      // Geef het te tekenen object een kleur
      context.fillStyle = randomColor(colorArray);
      console.debug(data);
      // Teken een rechthoek met het context-object.
      var x = 60 + i * 30;
      var y = 360;
      var dx = 12;
      var dy = -1 * data[i].numberOfContacts;

      data[i].coordinates = { "x": x,
                              "y": y,
                              "dx": dx,
                              "dy": dy};
      
      context.fillRect(x , y, dx, dy);
   }

   // Tekst op het scherm langs x-as
   // Bepaal de kleur van je Letters
   context.fillStyle = "#121212";

   // Bepaal de font
   context.font = "14px Trebuchet MS";

   // Teken het op het scherm
   context.fillText("Leerlingen --->", 460, 383);

   // De x-as
   context.beginPath();
   context.moveTo(10, 360);
   context.lineTo(580, 360);
   context.lineWidth = 1;
   context.stroke();
   context.closePath();

   // De y-as
   context.beginPath();
   context.moveTo(40, 385);
   context.lineTo(40, 10);
   context.lineWidth = 1;
   context.stroke();
   context.closePath();

   // Tekst op het scherm langs y-as.
   // Sla de huidige canvasconfiguratie op
   context.save();
   // Verschuif het canvas naar de positie van je tekst
   context.translate(20, 250);
   // Roteer het canvas tegen de klok in (min) PI/2
   context.rotate(-1 * Math.PI/2);
   // Bepaal de kleur van je Letters
   context.fillStyle = "#121212";
   // Bepaal de font
   context.font = "14px Trebuchet MS";
   // Teken het op het scherm
   context.fillText("aantal geschikte bedrijven --->", 0, 0);
   // Draai het canvas weer terug naar de oude positie
   context.restore();
   
}

// Haal de (x,y)-waarde van de muispositie op ten opzichte van het canvas
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

// Maak een mousemove-event vast aan het canvas-object. Het canvas-object en het
// en het event leveren de (x,y)-waarde van het canvas en de muis. De berekende
// (x,y)-waarde zijn relatief ten opzicht van het canvas.
canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    //console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);


    if ( mousePos.x > data[2].coordinates.x && 
         mousePos.x < data[2].coordinates.x + data[2].coordinates.dx &&
         mousePos.y < data[2].coordinates.y && 
         mousePos.y > data[2].coordinates.y + data[2].coordinates.dy)
    {
         alert("De naam is: " + data[2].firstName);
    }

}, false);

function randomColor (colorArray) {
   var index = Math.floor(Math.random() * colorArray.length);
   return colorArray[index];
}

getData();

setInterval(getData, 100000);

function getData () {
   xmlHttp.open("GET", "http://localhost/2016-2017/am1a/Blok%203/Web/canvas/staafdiagramAjax/data.php", true);
   xmlHttp.send();
}

