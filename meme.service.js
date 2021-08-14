'use strict'
var gElCanvas

getCanvasWidthAndHeight()

var gImgs = getgImg()
var gMeme

function creategMeme() {
    gMeme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'I never eat Falafel',
                size: 40,
                align: 'center',
                color: 'white',
                strokeColor: 'black',
                textBaseline: 'top',
                posX: gElCanvas.width / 2,
                posY: 30
            }
        ]
    }
}

function getCanvasWidthAndHeight() {
    gElCanvas = document.querySelector('canvas')
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function getMeme() {
    return gMeme;
}


function findImgById(id) {
    var imgURL = gImgs.find(img => {
        if (+img.id === +id)
            return img
    })
    return imgURL.url
}


//EDIT FUNCTIONS

function addNewLine() {

    gMeme.selectedLineIdx++;
    if (gMeme.selectedLineIdx === 3) return
    switch (gMeme.selectedLineIdx) {
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
    gMeme.lines.push(
        {
            txt: '',
            size: 40,
            align: 'center',
            color: 'white',
            strokeColor: 'black',
            posX: gElCanvas.width / 2,
            posY
        }
    )
}

function decreaseText() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 5;
}

function increaseText() {

    gMeme.lines[gMeme.selectedLineIdx].size += 5;
}


function changeColor(newColor) {
    gMeme.lines[gMeme.selectedLineIdx].color = newColor
}

function changeStroke(newColor) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = newColor;
}

function moveDown() {
    gMeme.lines[gMeme.selectedLineIdx].posY += 5
}
function MoveUp() {
    gMeme.lines[gMeme.selectedLineIdx].posY -= 5
}

function deleteLine() {
    var lastLine = gMeme.selectedLineIdx

    if (lastLine === 0) {
        gMeme.lines[0].txt = ''
    }
    else {
        gMeme.selectedLineIdx -= 1;
        gMeme.lines.splice(lastLine, 1)
    }

}

function changeAlign(alignBy) {
    gMeme.lines[gMeme.selectedLineIdx].align = alignBy
}


