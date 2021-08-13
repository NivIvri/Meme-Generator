'use strict'
var gElCanvas

getCanvasWidthAndHeight()


function getCanvasWidthAndHeight() {
    gElCanvas = document.querySelector('canvas')
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    console.log(gElCanvas.width + 'gElCanvas.width');
    gElCanvas.height = elContainer.offsetHeight
    console.log(gElCanvas.height + 'gElCanvas.height');
}

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: './img/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'img/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'img/4.jpg', keywords: ['happy'] },
    { id: 5, url: 'img/5.jpg', keywords: ['happy'] },
    { id: 6, url: 'img/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'img/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'img/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'img/9.jpg', keywords: ['happy'] },
    { id: 10, url: 'img/10.jpg', keywords: ['happy'] },
    { id: 11, url: 'img/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'img/12.jpg', keywords: ['happy'] },

];
var gMeme = {
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


function createMeme() {
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
                posY: 10
            }
        ]
    }
}

function getMeme() {
    return gMeme;
}


function findImgById(id) {
    var imgURL = gImgs.find(img => {
        if (+img.id === +id)
            return img
    })
    console.log(imgURL);
    return imgURL.url
}


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
        //gMeme.selectedLineIdx++;
    }
    //if (lastLine !== 1) {
    //    gMeme.selectedLineIdx -= 1;
    //}
    else {
        gMeme.selectedLineIdx -= 1;
        gMeme.lines.splice(lastLine, 1)
    }

}

function changeAlign(alignBy) {
    gMeme.lines[gMeme.selectedLineIdx].align = alignBy
}
