'use strict'
var gElCanvas
var gCtx
var gCurrText


function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log(gCtx);
    gCtx.stroke()
    resizeCanvas()
    //const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
    //createShape(center)
    //renderCanvas()
}




function drawImg(elImg) {

    //remove gallery
    document.querySelector ('.main-content-gallery').classList.add('hidden-section')
    document.querySelector ('.main-content-editor').classList.remove('hidden-section')
    //create mem
    onCerteMeme(elImg);
    console.log(elImg);
    var img = new Image()
    img.src = elImg.src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function onCerteMeme(elImg) {
    createMeme(elImg.dataset.id)
}


function onAddText() {
    AddText(gCurrText)
}

function onChangeText(text) {
    gCurrText = text.value;
}


function drawText(txt, x, y) {
    gCtx.fillText(txt, x, y);
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'white'
    gCtx.font = '48px Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}
function canvasClicked(ev)
{
    console.log('ev', ev);

}


