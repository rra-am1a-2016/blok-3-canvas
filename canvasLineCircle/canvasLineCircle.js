// Pak het canvaselement bij zijn lurfen.
var canvas = document.getElementsByTagName("canvas")[0];
canvas.setAttribute("height", "400px");
canvas.setAttribute("width", "600px");


// Maak een context object
var ctx = canvas.getContext("2d");
console.debug(ctx);


ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(300, 200, 150, 0 + 0.5, Math.PI - 0.5);
ctx.fill();
ctx.lineWidth = 10;
ctx.closePath();
ctx.stroke();


 



ctx.fillStyle = "pink";
ctx.beginPath();
ctx.arc(150, 150, 100, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

//ctx.fillStyle = "pink";
ctx.beginPath();
ctx.arc(450, 150, 100, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();









