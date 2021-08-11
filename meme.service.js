'use strict'
var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [{ id: 1, url: 'img/popo.jpg', keywords: ['happy'] }];

var gMeme = {
    selectedImgId: 5,
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


function createMeme(imgIdx) {
    gMeme = {
        selectedImgId: imgIdx,
        selectedLineIdx: 0,
        lines: [
            {
                txt: '',
                size: 20,
                align: 'left',
                color: 'red'
            }
        ]
    }
}


function getgMeme() {
    return gMemel;
}

function AddText(text) {
    gMeme.selectedLineIdx++;
    var x
    var y
    console.log(gMeme.selectedLineIdx);
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
    drawText(text, x, y)
}


