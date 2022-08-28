canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(355, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(300, 245, 40, 0, 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(460, 210, 40, 0, 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(410, 245, 40, 0, 2*Math.PI);
ctx.stroke();


