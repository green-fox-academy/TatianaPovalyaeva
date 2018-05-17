'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function tripleLine(x: number, y: number) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(300, 200);
  ctx.strokeStyle = "turquoise";
  ctx.stroke();
}

for (let i: number = 0; i < 3; i++) {
  tripleLine(Math.random() * 601, Math.random() * 401);
}