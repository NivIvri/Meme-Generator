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
            size: 20,
            align: 'center',
            color: 'red',
            strokeColor: 'black',
            posX: gElCanvas.width / 2,
            posY: 30
        }
    ]
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


//function changeSelectedLine() {
//    gMeme.selectedLineIdx++;
//}

function addNewLine() {
    gMeme.selectedLineIdx++;

    switch (gMeme.selectedLineIdx) {
        case 0:
            var posY = 30
            break;
        case 1:
            var posY = gElCanvas.height
            break;

        default:
            var posY = gElCanvas.height / 2;
            break;
    }
    gMeme.lines.push(
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red',
            strokeColor: 'black',
            posX: gElCanvas.width / 2,
            posY
        }
    )
}

function decreaseText() {
    gMeme.lines[gMeme.selectedLineIdx - 1].size -= 5;
}

function increaseText() {
    gMeme.lines[gMeme.selectedLineIdx - 1].size += 5;
}


function changeColor(newColor) {
    gMeme.lines[gMeme.selectedLineIdx - 1].color = newColor
}

function changeStroke(newColor) {
    gMeme.lines[gMeme.selectedLineIdx - 1].strokeColor = newColor;
}

function moveDown() {
    gMeme.lines[gMeme.selectedLineIdx - 1].posY += 5
}
function MoveUp() {
    gMeme.lines[gMeme.selectedLineIdx - 1].posY -= 5
}

function deleteLine() {
    var lastLine = gMeme.selectedLineIdx - 1
    //if (lastLine !== 0) {
    //    gMeme.selectedLineIdx -= 1;
    //}
    gMeme.selectedLineIdx -= 1;
    gMeme.lines.splice(lastLine, 1)

}

function changeAlign(alignBy) {
    gMeme.lines[gMeme.selectedLineIdx - 1].align = alignBy
}
