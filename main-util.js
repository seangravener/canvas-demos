const canvas = document.getElementById("app-canvas");
const ctx = canvas.getContext("2d");

export function drawLine(radius = 100) {
  const { x, y } = getCenter();

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - radius);
  ctx.closePath();
  ctx.stroke();
}

export function drawShape(radius = 100, inset) {
  const { x, y } = getCenter();

  ctx.beginPath();
  ctx.save();

  ctx.translate(x, y); // set new (0,0) origin to x, y
  ctx.moveTo(0, 0); // move cursor
  ctx.lineTo(0, 0 - radius); // draw line to (x,y)
  ctx.rotate(Math.PI / 3); // rotate canvas

  ctx.lineTo(0, 0 - radius); // new line
  ctx.rotate(Math.PI / 3); // rotate again ...

  ctx.lineTo(0, 0 - radius);
  ctx.rotate(Math.PI / 3);

  ctx.lineTo(0, 0 - radius);
  ctx.rotate(Math.PI / 3);

  ctx.lineTo(0, 0 - radius);
  ctx.rotate(Math.PI / 3);

  ctx.lineTo(0, 0 - radius);
  ctx.rotate(Math.PI / 3);

  ctx.lineTo(0, 0 - radius);
  ctx.rotate(Math.PI / 3);

  ctx.restore();
  ctx.closePath();
  ctx.stroke();
}

export function getCenter() {
  return { x: canvas.width / 2, y: canvas.height / 2 };
}

export function adjustCanvasSize(
  w = window.innerWidth,
  h = window.innerHeight
) {
  canvas.width = w;
  canvas.height = h;
}
