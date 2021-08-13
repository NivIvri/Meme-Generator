'use strict'
var gElCanvas
var gCtx
var gCurrText
var x
var y
var isSwitch = false
var gCurrLine = 0
var gSwitchLine = 1


function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log(gCtx);
    gCtx.stroke()
    resizeCanvas()
}


function drawImg(elImg) {
    //remove gallery
    document.querySelector('.main-content-gallery').classList.add('hidden-section')
    document.querySelector('.main-content-editor').classList.remove('hidden-section')
    //create meme
    onCreateMeme(elImg);
    var img = new Image()
    img.src = elImg.src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}



function openGallery() {
    document.querySelector('.main-content-gallery').classList.remove('hidden-section')
    document.querySelector('.main-content-editor').classList.add('hidden-section')
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function onCreateMeme(elImg) {
    createMeme(elImg.dataset.id)
}


function onAddText() {
    if (gCurrText === '') return
    document.querySelector("[name='text-box']").value = ''
    AddText(gCurrText)
    gCurrText = ''
}

function onChangeText(text) {
    gCurrText = text.value;

}


function onIncreaseText() {
    increaseText()
    renderCanvas()
}

function onDecreaseText() {
    decreaseText()
    renderCanvas()
}


function renderCanvas() {
    gCurrLine = 0
    var currImgIdx = getgMeme().selectedImgId
    var renderImg = findImgById(currImgIdx)

    var img = new Image()
    img.src = renderImg;
    {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
    var gMeme = getgMeme()
    gMeme.lines.forEach(line => {
        renderLine(line.text, line.color, line.align, line.size, line.x, line.y, line.strokeColor)
    });
}

function renderLine(text, color, align, size, x, y, strokeColor) {
    gCurrLine++;
    var heightY = 0
    var currMeme = getgMeme()
    switch (gCurrLine) {
        case 1:
            heightY = 5
            gCtx.textBaseline = 'top';

            break;
        case 2:
            gCtx.textBaseline = 'botton';
            heightY = gElCanvas.height - 60
            break;

        default:
            heightY = gElCanvas.height / 2

            break;
    }

    var fontsize = size;
    var fontface = 'Impact';
    var lineHeight = fontsize * 1.286;
    console.log(strokeColor, '');
    gCtx.strokeText = strokeColor
    gCtx.fillStyle = color
    gCtx.font = fontsize + 'px ' + fontface;
    var textWidth = gCtx.measureText(text).width + 120;

    gCtx.textAlign = align;

    gCtx.fillText(text, gElCanvas.width / 4, heightY);


    if (isSwitch) {
        var switchline = gSwitchLine > 0 ? 1 : 2
        if (gCurrLine === switchline) {
            console.log(currMeme);
            currMeme.selectedLineIdx = switchline;
            gCtx.strokeRect(gElCanvas.width / 4, heightY, textWidth, lineHeight);
        }
        
    }

    else {
        if (currMeme.selectedLineIdx === 1) {
            gCtx.strokeRect(gElCanvas.width / 4, heightY, textWidth, lineHeight);
        }
    }

}

function onDeleteLine() {
    deleteLine()
    renderCanvas()

}


function onSwitchLines() {
    isSwitch = true;
    gSwitchLine = gSwitchLine * -1
    //switchLines()
    renderCanvas()

}

function onChangeAlign(alignBy) {
    changeAlign(alignBy)
    renderCanvas()

}

function onMoveUp() {
    MoveUp()
    renderCanvas()

}
function onMoveDown() {
    moveDown()
    renderCanvas()

}


function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    // console.log('IMG:', data);
    elLink.href = data
    // elLink.download = 'puki'
}

function downloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onChangeColor() {
    var newColor = document.querySelector("[name='color']").value;
    changeColor(newColor)
    renderCanvas()
}

function onChangeStroke() {
    var newColor = document.querySelector("[name='strokeColor']").value;
    changeStroke(newColor)
    renderCanvas()
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}