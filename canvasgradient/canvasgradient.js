// Maak een handvat (object) op het canvas element
var canvas = document.getElementById("myCanvas");

// Maak een context object
var ctx = canvas.getContext("2d");

document.getElementsByTagName("button")[0].onclick = function () {
   var gradient = ctx.createLinearGradient(0, 200, 600, 200);
   gradient.addColorStop(0, "red");
   gradient.addColorStop(0.2, "white");
   gradient.addColorStop(1.0, "blue");
   ctx.fillStyle = gradient;
   ctx.fillRect(10, 10, 580, 380);
}

var counter = 1;

document.getElementsByTagName("button")[1].onclick = function () {
   var gradientRadial =  ctx.createRadialGradient(300, 200, 0, 300, 200, counter * 10);

   gradientRadial.addColorStop(0, "purple");
   gradientRadial.addColorStop(0.2, "yellow");
   gradientRadial.addColorStop(0.4, "green");
   gradientRadial.addColorStop(0.6, "orange");
   gradientRadial.addColorStop(0.8, "pink");
   gradientRadial.addColorStop(1.0, "black");

   ctx.fillStyle = gradientRadial;
   ctx.fillRect(10,10,580, 380);
   counter += 1
}

setInterval(test, 50);

function test () {
   document.getElementsByTagName("button")[1].click();  
}


