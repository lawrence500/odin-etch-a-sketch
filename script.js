const settingsBtn = document.getElementById("settings-btn");
const settings = document.querySelector(".settings-box");

const colorsBtn = document.getElementById('colors-btn')
const colorBox = document.querySelector('.colors-box')


settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("open");
});

colorsBtn.addEventListener('click', () => {
  colorBox.classList.toggle('open')
})


let sketchAreaSize = 700;
let sketchAreaRows = 70;
let sketchAreaCols = 70;

let brushActive = false;
let selectedColor = 'white'

const colorOptions = [
  'black',
  'orange',
  'red',
  'yellow',
  'green',
  'pink',
  'white',
  'blue',
]


createColorOptions()
function createColorOptions(){
  colorOptions.forEach(color => {
    const colorOption = document.createElement('div')
    colorOption.style.backgroundColor = color
    colorOption.value = color

    colorOption.addEventListener('click', (e) => {
      selectedColor = e.target.value
      console.log(selectedColor)
    })

    colorBox.append(colorOption)
  });
}

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

/*
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

  gridSizeInput.value = ''
}

adjustGridBtn.addEventListener("click", () => {
  handleGridSize();
});
*/