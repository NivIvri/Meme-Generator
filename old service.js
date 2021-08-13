'use strict'
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

var gMeme;

function createMeme(imgIdx) {
    gMeme = {
        selectedImgId: imgIdx,
        selectedLineIdx: 0,
        lines: [

        ]
    }
}


function getgMeme() {
    return gMeme;
}

function AddText(text) {
    debugger
    gMeme.selectedLineIdx++;

    gMeme.lines.push({
        text: text,
        size: 40,
        align: 'left',
        color: 'red',
        strokeColor: 'black',
        x,
        y,
    })
    var size = gMeme.lines[gMeme.selectedLineIdx - 1].size
    var text = gMeme.lines[gMeme.selectedLineIdx - 1].text
    var align = gMeme.lines[gMeme.selectedLineIdx - 1].align
    var color = gMeme.lines[gMeme.selectedLineIdx - 1].color
    var strokeColor = gMeme.lines[gMeme.selectedLineIdx - 1].strokeColor
    renderLine(text, color, align, size, x, y, strokeColor)
}


function increaseText() {
    gMeme.lines[gMeme.selectedLineIdx - 1].size += 4;
}
function decreaseText() {
    gMeme.lines[gMeme.selectedLineIdx - 1].size -= 4;
}



function getgImgs() {
    return gImgs;
}

function findImgById(id) {
    var imgURL = gImgs.find(img => {
        if (+img.id === +id)
            return img
    })
    console.log(imgURL);
    return imgURL.url
}


function setline(x, y) {
    gMeme.lines[gMeme.selectedLineIdx - 1].x = x
    gMeme.lines[gMeme.selectedLineIdx - 1].y = y
}

function deleteLine() {
    gMeme.selectedLineIdx--;
    gMeme.lines.pop()
}

function switchLines() {
    gMeme.selectedLineIdx = 1;
}

function changeAlign(alignBy) {
    gMeme.lines[gMeme.selectedLineIdx - 1].align = alignBy;

}

function MoveUp() {
    gMeme.lines[gMeme.selectedLineIdx - 1].y -= 12;
}

function moveDown() {
    gMeme.lines[gMeme.selectedLineIdx - 1].y += 10;
}
function changeColor(newColor) {
    gMeme.lines[gMeme.selectedLineIdx - 1].color = newColor;
}

function changeStroke(newColor) {
    gMeme.lines[gMeme.selectedLineIdx - 1].strokeColor = newColor;
}