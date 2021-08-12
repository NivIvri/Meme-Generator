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
var gMemes = []

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
    gMeme.selectedLineIdx++;
    var x
    var y

    gMeme.lines.push({
        text: text,
        size: 40,
        align: 'center',
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
    drawText(text, size, align, color, strokeColor)
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
    gMemes.unshift(gMeme)
}
function getgMemes() {
    return gMemes;
}

function deleteLine() {
    gMeme.selectedLineIdx--;
    console.log(gMemes);
    gMemes[0].lines.pop()
}

function switchLines() {

    var lines = gMemes[0].lines
    console.log('befor');
    console.log(lines[1].text);
    console.log(lines[0].text);

    var temp = lines[0].text
    lines[0].text = lines[1].text
    lines[1].text = temp
    console.log('after');

    console.log(lines[1].text);
    console.log(lines[0].text);
}

function changeAlign(alignBy) {
    gMeme.lines[gMeme.selectedLineIdx - 1].align = alignBy;
    gMemes[0].lines[gMeme.selectedLineIdx - 1].align = alignBy;

}

function MoveUp() {
    gMemes[0].lines[gMeme.selectedLineIdx - 1].y -= 12
    gMeme.lines[gMeme.selectedLineIdx - 1].y -= 12;
}

function moveDown() {
    debugger

    gMemes[0].lines[gMeme.selectedLineIdx - 1].y += 10
    gMeme.lines[gMeme.selectedLineIdx - 1].y += 10;
}
function changeColor(newColor) {
    gMemes[0].lines[gMeme.selectedLineIdx - 1].color = newColor;
    gMeme.lines[gMeme.selectedLineIdx - 1].color = newColor;
}

function changeStroke(newColor) {
    debugger
    gMemes[0].lines[gMeme.selectedLineIdx - 1].strokeColor = newColor;
    gMeme.lines[gMeme.selectedLineIdx - 1].strokeColor = newColor;
}