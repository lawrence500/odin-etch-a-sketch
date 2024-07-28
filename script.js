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
let sketchAreaRows = 80;
let sketchAreaCols = 80;

let brushActive = false;
let selectedColor = 'black'

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

const gridSizes = [
  {
    gridSize : '32 X 32',
    gridSizeValueRows : 32,
    gridSizeValueCols : 16
  },
  {
    gridSize : '16 X 16',
    gridSizeValueRows : 16,
    gridSizeValueCols : 16,
  }
]

gridSizes.forEach((grid) => {
  createGridOption(grid)
})

function createGridOption({gridSize, gridSizeValueRows, gridSizeValueCols}){
  const gridSizeOptions = document.querySelector('.grid-size-options')
  const button = document.createElement('button')
  button.textContent = gridSize

  button.addEventListener('click', () => {
    createSketchArea(gridSizeValueRows, gridSizeValueCols)
  })
  gridSizeOptions.appendChild(button)
}

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
  if (brushActive) element.style.backgroundColor = selectedColor;
}


createSketchArea(sketchAreaRows, sketchAreaCols);
function createSketchArea(rows, cols) {
  const sketchGridBox = Array.from(sketchArea.children);

  console.log(sketchGridBox)
  for(let x of sketchGridBox){
    sketchArea.removeChild(x)
  }


  for (let i = 0; i < rows * cols; i++) {
    const sketchGridBox = document.createElement("div");
    sketchGridBox.style.width = `${sketchAreaSize / rows}px`;
    sketchGridBox.style.height = `${sketchAreaSize / cols}px`;
    document.querySelector(".sketch-area").append(sketchGridBox);
    document.getElementById('grid-size-text').textContent = `${rows} X ${cols}`
    sketchGridBox.style.border = "1px solid black";
    sketchGridBox.addEventListener("mouseover", () =>
      handleBoxChange(sketchGridBox)
    );
  }
}
const gridSizeInput = document.getElementById('grid-size-input')
const newGridBtn = document.getElementById('new-grid-input-btn')
function handleNewGrid(){
  if(gridSizeInput.value > 100) 
  return prompt('grid size must be less than 100')

  createSketchArea(gridSizeInput.value, gridSizeInput.value)
}

gridSizeInput.addEventListener('change', handleNewGrid)
newGridBtn.addEventListener('click', handleNewGrid)