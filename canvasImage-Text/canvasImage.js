// Maak een canvas object
var canvas = document.getElementById("myCanvas");

// Maake een context object
var context = canvas.getContext("2d");

// Bepaal de kleur van je Letters
context.fillStyle = "#121212";

// Bepaal de font
context.font = "40px Trebuchet MS";

// Teken het op het scherm
context.fillText("Van bewegen wordt ik blij!", 60, 70);

var image = new Image();

image.src = "sad.png";

var x = 250;
var y = 150;
var speedX = 0;
var speedY = 0;

context.drawImage(image, x, y, image.width/3, image.height/3);


setInterval(updateGame, 20);

function updateGame () {
   context.clearRect(0, 0, canvas.width, canvas.height);
   newPos();
   context.fillText("Van bewegen wordt ik blij!", 60, 70);
   context.drawImage(image, x, y, image.width/3, image.height/3);
}

function newPos () {
   x += speedX;
   y += speedY;
}

var speed = 2
function move (direction) {
   image.src = "./happy.png";
   if ( direction == 'right') {
      speedX = speed;
   }
   if (direction == 'down') {
      speedY = speed;
   }
}

function stop () {
   speedX = 0;
   speedY = 0;
   image.src = "./sad.png";   
}




