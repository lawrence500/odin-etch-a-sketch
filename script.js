const settingsBtn = document.getElementById("settings-btn");
const settings = document.querySelector(".settings-box");

settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("open");
});

let sketchAreaSize = 850;
let sketchAreaRows = 100;
let sketchAreaCols = 100;

let brushActive = false;

const sketchArea = document.querySelector(".sketch-area");
sketchArea.style.width = `${sketchAreaSize}px`;
sketchArea.style.height = `${sketchAreaSize}px`;



document.body.addEventListener("keydown", (e) => {
  console.log(e.code);
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

    sketchGridBox.addEventListener("mouseover", () =>
      handleBoxChange(sketchGridBox)
    );
  }
}

createSketchArea();
