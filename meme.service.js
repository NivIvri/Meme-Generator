'use strict'
var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [{ id: 1, url: 'img/popo.jpg', keywords: ['happy'] }];

var gMeme;

function createMeme(imgIdx) {
    gMeme = {
        selectedImgId: imgIdx,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'I never eat Falafel',
                size: 20,
                align: 'left',
                color: 'red'
            }

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
    switch (gMeme.selectedLineIdx) {
        case 1:
            x = 10
            y = 40
            break;
        case 2:
            x = 10
            y = 480
            break;
        default:
            x = 5
            y = 245
            break;
    }
    gMeme.lines.push({
        txt: text,
        size: 20,
        align: 'left',
        color: 'red',
        x,
        y
    })
    var size = gMeme.lines[gMeme.selectedLineIdx - 1].size
    var align = gMeme.lines[gMeme.selectedLineIdx - 1].align
    var color = gMeme.lines[gMeme.selectedLineIdx - 1].color
    drawText(text, x, y, size, align, color)
}


function increaseText() {
    var size = gMeme.lines[gMeme.selectedLineIdx - 1].size + 3;
    var text = gMeme.lines[gMeme.selectedLineIdx - 1].text
    var align = gMeme.lines[gMeme.selectedLineIdx - 1].align
    var color = gMeme.lines[gMeme.selectedLineIdx - 1].color
    var x = gMeme.lines[gMeme.selectedLineIdx - 1].x
    var y = gMeme.lines[gMeme.selectedLineIdx - 1].y
    drawText(text, x, y, size, align, color)
}