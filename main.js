'use strict'
var gElCanvas
var gCtx
var gOldTxt = ''
var gSwitchLine = -1
var isSwitch


function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    gCtx.stroke()
    resizeCanvas()
}


//RENDER IMAGE AND CANVAS
function drawImg(elImg) {
    //remove gallery
    document.querySelector('.main-content-gallery').classList.add('hidden-section')
    document.querySelector('.main-content-editor').classList.remove('hidden-section')
    //UPDATE meme IMG ID
    var meme = getMeme()
    meme.selectedImgId = elImg.dataset.id
    console.log(elImg.dataset.id);
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


function onChangeText() {
    var meme = getMeme()
    var txt = document.querySelector("[name='text-box']").value;
    if (meme.lines.length - 1 <= meme.selectedLineIdx) {
        meme.selectedLineIdx = meme.lines.length - 1
        switch (+gMeme.selectedLineIdx) {
            case 0:
                var posY = 10
                break;
            case 1:
                var posY = gElCanvas.height - 60
                break;

            default:
                var posY = gElCanvas.height / 2;
                break;
        }
        meme.lines[meme.selectedLineIdx].posY = posY;

    }

    meme.lines[meme.selectedLineIdx].txt = txt;
    renderImg()
    renderTxt()
}


function renderImg() {
    var currImgIdx = getMeme().selectedImgId
    var renderImg = findImgById(currImgIdx)
    var img = new Image()
    img.src = renderImg;
    {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }

}

function renderTxt() {
    debugger
    var meme = getMeme()
    meme.lines.forEach((line, index) => {
        console.log(index + 'idx');
        gCtx.textBaseline = 'top';
        gCtx.font = `${line.size}px Impact`
        gCtx.fillStyle = line.color
        gCtx.strokeStyle = line.strokeColor
        gCtx.lineWidth = 1
        gCtx.textAlign = line.align

        var lineHeight = line.size * 1.286;
        gCtx.fillText(line.txt, line.posX, line.posY, gElCanvas.width)
        gCtx.strokeText(line.txt, line.posX, line.posY, gElCanvas.width)
        debugger
        if (index === meme.selectedLineIdx) {
            gCtx.strokeRect(10, line.posY, gElCanvas.width - 20, lineHeight);
        }

    });
}

function onSwitchLines() {
    debugger
    var meme = getMeme()
    isSwitch = true;
    switch (meme.selectedLineIdx) {
        case 3:
            meme.selectedLineIdx = 0
            break;
        case 1:
            meme.selectedLineIdx = 2
            break;
        case 2:
            meme.selectedLineIdx = 0
            break;
        case 0:
            meme.selectedLineIdx = 1
            break;

        default:
            break;
    }
    renderImg()
    renderTxt()
}


//edit functions

function onAddText() {
    debugger
    var meme = getMeme()
    if (meme.lines[0].txt === '') return
    document.querySelector("[name='text-box']").value = ''
    addNewLine()
    renderImg()
    renderTxt()
}


function onDecreaseText() {
    decreaseText()
    renderImg()
    renderTxt()
}

function onIncreaseText() {
    increaseText()
    renderImg()
    renderTxt()
}


function onChangeColor() {
    var newColor = document.querySelector("[name='color']").value;
    changeColor(newColor)
    renderImg()
    renderTxt()
}

function onChangeStroke() {
    var newColor = document.querySelector("[name='strokeColor']").value;
    changeStroke(newColor)
    renderImg()
    renderTxt()
}


function onMoveUp() {
    MoveUp()
    renderImg()
    renderTxt()

}
function onMoveDown() {
    moveDown()
    renderImg()
    renderTxt()
}



function onDeleteLine() {
    deleteLine()
    renderImg()
    renderTxt()
}

function onChangeAlign(alignBy) {
    changeAlign(alignBy)
    renderImg()
    renderTxt()
}


function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    // console.log('IMG:', data);
    elLink.href = data
    // elLink.download = 'puki'
}

