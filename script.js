const settingsBtn = document.getElementById("settings-btn");
const settings = document.querySelector(".settings-box");

settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("open");
});

let sketchAreaSize = 700;
let sketchAreaRows = 70;
let sketchAreaCols = 70;

let brushActive = false;

const sketchArea = document.querySelector(".sketch-area");
sketchArea.style.width = `${sketchAreaSize}px`;
sketchArea.style.height = `${sketchAreaSize}px`;

createSketchArea();

document.body.addEventListener("keydown", (e) => {
  if (e.code === "ShiftLeft") {
    brushActive = true;
  }
});

document.body.addEventListener("keyup", (e) => {
  if (e.code === "ShiftLeft") {
    brushActive = false;
  }
});

function handleBoxChange(element) {
  if (brushActive) element.style.backgroundColor = "yellow";
}

function createSketchArea() {
  const rows = sketchAreaRows;
  const cols = sketchAreaCols;
  for (let i = 0; i < rows * cols; i++) {
    const sketchGridBox = document.createElement("div");
    sketchGridBox.style.width = `${sketchAreaSize / rows}px`;
    sketchGridBox.style.height = `${sketchAreaSize / cols}px`;
    document.querySelector(".sketch-area").append(sketchGridBox);
    sketchGridBox.style.border = "1px solid black";
    sketchGridBox.addEventListener("mouseover", () =>
      handleBoxChange(sketchGridBox)
    );
  }
}

const adjustGridBtn = document.getElementById("adjust-grid-btn");

function handleGridSize() {
  const gridSizeInput = document.getElementById("grid-size-input");
  const gridSizeValue = gridSizeInput.value;

  if (gridSizeValue > 100) {
    return console.log("grid size must be less than a 100");
  }

  sketchAreaCols = gridSizeValue;
  sketchAreaRows = gridSizeValue;

  const sketchGridBox = Array.from(sketchArea.children);

  const rows = sketchAreaRows;
  const cols = sketchAreaCols;

  for(let i = 0; i < rows * cols; i++){
    sketchGridBox.forEach(element => {
        element.style.width = `${sketchAreaSize / rows}px`
        element.style.height = `${sketchAreaSize / cols}px`
      });
  }
}

adjustGridBtn.addEventListener("click", () => {
  handleGridSize();
});
