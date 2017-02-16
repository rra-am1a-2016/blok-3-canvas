// Maak een array van javascript objecten
var xmlHttp = new XMLHttpRequest();

var data = [];
xmlHttp.onreadystatechange = function () {

   if ( xmlHttp.readyState == 4 && xmlHttp.status == 200)
   {
      data = JSON.parse(xmlHttp.responseText);
      drawCanvas();
   }
}





// De lengte van het array is:
var arrayLength = data.length;
//alert(arrayLength);

// Selecteer het canvas element op basis van zijn id.
var canvas = document.getElementById("myCanvas");

// We maken nu een context object met behulp van het canvas object
var context = canvas.getContext("2d");





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
      context.fillRect(60 + i * 30, 360, 12, -1 * data[i].numberOfContacts);
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

function randomColor (colorArray) {
   var index = Math.floor(Math.random() * colorArray.length);
   return colorArray[index];
}


setInterval(function () {
   xmlHttp.open("GET", "http://localhost/2016-2017/am1a/Blok%203/Web/canvas/staafdiagramAjax/data.php", true);
   xmlHttp.send();

}, 1000);

