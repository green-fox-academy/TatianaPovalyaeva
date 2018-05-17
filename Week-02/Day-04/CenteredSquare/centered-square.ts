'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

function drawRect() {
  let centerX = canvas.width/2; 
  let centerY = canvas.height/2;
  ctx.strokeStyle = "green";
  ctx.strokeRect(centerX - 5, centerY - 5, 10, 10);
}

drawRect();

