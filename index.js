const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

const squareSize = 10

const cols = Math.floor(vw/squareSize)
const rows = Math.floor(vh/squareSize)


const squares = document.getElementById("squares")
const mouseDetect = document.getElementsByClassName("mouseDetect")[0]

let eachSquare

let selectedColor = 'white'

for (let r = 0; r < rows; r++){
    for (let c = 0; c < cols; c++){
        eachSquare = document.createElement('div')
        eachSquare.setAttribute('id', 'eachSquare')
        eachSquare.style.width = `${squareSize}px`
        eachSquare.style.height = `${squareSize}px`
        eachSquare.style.position = 'absolute'
        eachSquare.style.left = `${c*squareSize}px`
        eachSquare.style.top = `${r*squareSize}px`
        eachSquare.style.border = '1px solid grey'
        squares.appendChild(eachSquare)
    }
}

function updateColor(color){
    selectedColor = color
    // mouseDetect.style.backgroundColor = color
}

let isDown = false

function handleMouseDown(e){
    isDown = true
}

function handleMouseUp(e){
    isDown = false
}

function handleMouseOver(e){
    if (isDown){
        let x =  e.clientX
        let y =  e.clientY
        let elementMouseIsOver = document.elementFromPoint(x, y);
        elementMouseIsOver.style.backgroundColor = selectedColor
    }
}

function handleMouseMove(e){
    mouseDetect.style.position = 'absolute'
    mouseDetect.style.top = `${e.clientY}px`
    mouseDetect.style.left = `${e.clientX}px`
    mouseDetect.style.backgroundColor = selectedColor
}

document.addEventListener("mousedown", handleMouseDown)
document.addEventListener("mouseup", handleMouseUp)
document.addEventListener("mouseover", handleMouseOver)
document.addEventListener("mousemove", handleMouseMove)