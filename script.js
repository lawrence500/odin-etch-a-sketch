const settingsBtn = document.getElementById('settings-btn')
const settings = document.querySelector('.settings-box')

settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('open')
})


let sketchAreaSize = 700
let sketchAreaRows = 100
let sketchAreaCols = 100

const sketchArea = document.querySelector('.sketch-area')
sketchArea.style.width = `${sketchAreaSize}px`
sketchArea.style.height = `${(sketchAreaSize)}px`


function createSketchArea(){
    const rows = sketchAreaRows
    const cols  = sketchAreaCols
    for(let  i = 0; i < (rows * cols); i++){
        const sketchGridBox = document.createElement('div')
        sketchGridBox.style.width = `${(sketchAreaSize / rows)}px`
        sketchGridBox.style.height = `${(sketchAreaSize / cols)}px`
        document.querySelector('.sketch-area').append(sketchGridBox)
    }
}

createSketchArea()