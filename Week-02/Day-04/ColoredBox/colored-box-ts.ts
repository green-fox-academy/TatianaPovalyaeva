'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 350);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(550, 50);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(550, 50);
ctx.lineTo(550, 350);
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 350);
ctx.lineTo(550, 350);
ctx.strokeStyle = "yellow";
ctx.stroke();