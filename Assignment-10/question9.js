const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("color");
const brushSizeSlider = document.getElementById("brush-size");
const clearBtn = document.getElementById("clearBtn");

let drawing = false;
let brushColor = colorPicker.value;
let brushSize = brushSizeSlider.value;

ctx.strokeStyle = brushColor;
ctx.lineWidth = brushSize;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});
canvas.addEventListener("mousemove", (e) => {
    if (drawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});
canvas.addEventListener("mouseup", () => {
    drawing = false;
});
colorPicker.addEventListener
