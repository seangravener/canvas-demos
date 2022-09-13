const canvas = document.getElementById("app-canvas");
const ctx = canvas.getContext("2d");

adjustCanvasSite();
window.addEventListener("resize", () => {
  adjustCanvasSite();
});

const mouse = {
  x: null,
  y: null,
};

function drawShape(radius = 0) {
  const { w, h } = getCenter();

  ctx.beginPath();
  ctx.moveTo(w, h);
  ctx.lineTo(w, h - radius);
  ctx.closePath();
  ctx.stroke();
}
drawShape(100);

function getCenter() {
  return { w: canvas.width / 2, h: canvas.height / 2 };
}

function adjustCanvasSite() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

console.log("script end");
