'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function getRandomColor(): string {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function tripleRect(squareSize: number) {
    ctx.beginPath();
    ctx.strokeStyle = getRandomColor();
    ctx.strokeRect(canvas.width/2-(squareSize/2), canvas.height/2-(squareSize/2), squareSize, squareSize);
}

for (let i: number = 0; i < 3; i++) {
  tripleRect(Math.random()*100+10);
}


