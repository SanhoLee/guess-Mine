const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const refreshBtn = document.getElementById("jsRefresh");

const CANVAS_SIZE = 500;
const INITIAL_COLOR = "#2c2c2c"; // 검정색

canvas.width = 500;
canvas.height = 500;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  const Color = event.target.style.backgroundColor;
  ctx.strokeStyle = Color;
  ctx.fillStyle = Color;
}

function onMouseDown(event) {
  painting = true;
}

function startPainting() {
  painting = true;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    mode.innerText = "Fill";
    filling = false;
  } else {
    mode.innerText = "Paint";
    filling = true;
  }
}

function handleCanvasClick() {
  if (filling === true) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleCM(event) {
  event.preventDefault();
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS_fwanggus";
  link.click();
}

function handleRefresh() {
  const result = window.confirm("ARE YOU SURE REFRESHING ALL STUFF? ");

  if (result) {
    filling = true;
    ctx.fillStyle = "white";
    handleCanvasClick();

    // initializing all set!
    filling = false;
    ctx.fillStyle = INITIAL_COLOR;
    ctx.strokeStyle = INITIAL_COLOR;
    ctx.lineWidth = 2.5;
    range.value = 2.5;
  } else {
    console.log("you clicked 'cancel' !");
  }
}

function confirmSaveFile() {
  const confirmSave = window.confirm("ARE YOU SURE SAVING THIS PAINTING ? ");
  if (confirmSave) {
    handleSaveClick();
  } else {
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((potato) => {
  potato.addEventListener("click", handleColorClick);
});

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", confirmSaveFile);
}

if (refreshBtn) {
  refreshBtn.addEventListener("click", handleRefresh);
}
