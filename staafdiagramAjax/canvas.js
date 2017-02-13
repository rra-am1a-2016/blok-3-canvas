// Maak een canvas element met 25 staafjes erop 
// Ze moeten verschillen in lengte.
// Ze moeten verschillen in kleur.

// Selecteer het canvas element op basis van zijn id.
var canvas = document.getElementById("myCanvas");

// We maken nu een context object met behulp van het canvas object
var context = canvas.getContext("2d");





var colorArray = ["blue", "green", "yellow", "red", "orange", "purple", "grey", "pink", "malachite"];

// Math.floor(), Math.random() *
function drawCanvas () {
   for ( var i = 0; i < 14; i++ )
   {
      // Geef het te tekenen object een kleur
      context.fillStyle = randomColor(colorArray);

      // Teken een rechthoek met het context-object.
      context.fillRect(10 + i * 20, 145, 6, -140 + i * 10);
   }
   
}

// clearInterval()   

var interval = window.setInterval(drawCanvas, 500);

document.getElementById("btn").onclick = function () {
   window.clearInterval(interval);
}

function randomColor (colorArray) {
   var index = Math.floor(Math.random() * colorArray.length);
   return colorArray[index];
}