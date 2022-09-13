import { drawLine, drawShape, adjustCanvasSize } from "./main-util";

// const canvas = document.getElementById("app-canvas");
// const ctx = canvas.getContext("2d");

window.addEventListener("resize", () => {
  adjustCanvasSize();
});

const mouse = {
  x: null,
  y: null,
};

adjustCanvasSize();
drawLine(0);
drawShape(100);

function getCenter() {
  return { x: canvas.width / 2, y: canvas.height / 2 };
}

console.log("script end");
