'use strict'
const KEY = 'KEY_WORDS_DB'
var gKeywords
_createKeyWords()


var gImgs = getgImg()
var gMeme

function creategMeme(width) {
    gMeme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Your text',
                size: 40,
                align: 'center',
                color: 'white',
                strokeColor: 'black',
                textBaseline: 'top',
                font: 'Impact ,sans serif',
                posX: width / 2,
                posY: 10
            }
        ]
    }
}

function getMeme() {
    return gMeme;
}

function setMemeImg(imgId) {
    gMeme.selectedImgId = imgId
}


function findImgById(id) {
    var imgURL = gImgs.find(img => {
        if (+img.id === +id)
            return img
    })
    return imgURL.url
}


//EDIT FUNCTIONS

function addNewLine(width, height) {
    gMeme.selectedLineIdx++;
    if (gMeme.selectedLineIdx === 3) return
    switch (gMeme.selectedLineIdx) {
        case 0:
            var posY = 10
            break;
        case 1:
            var posY = height - 60
            break;

        default:
            var posY = height / 2;
            break;
    }
    gMeme.lines.push(
        {
            txt: 'Your text',
            size: 40,
            align: 'center',
            color: 'white',
            strokeColor: 'black',
            font: 'Impact, sans serif',
            posX: width / 2,
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


function changeFont() {
    var currFont = gMeme.lines[gMeme.selectedLineIdx].font
    if (currFont === "Impact ,sans serif") {
        gMeme.lines[gMeme.selectedLineIdx].font = 'Tahoma, sans serif'
    }
    else {
        gMeme.lines[gMeme.selectedLineIdx].font = 'Impact ,sans serif'

    }
}


//filter images

function filterBy(filterByWord) {
    return gImgs.filter(img => {
        return img.keywords.some(keyWord => {
            return (keyWord === filterByWord)
        })
    })
}


// function getIdfromgImg(filterImgGallery) {
//     var imgIds = filterImgGallery.map(img => img.id)
//    return imgIds
// }

function _createKeyWords() {
    var loadedKeyWOrds = loadFromStorage(KEY)

    if (!loadedKeyWOrds) {
        loadedKeyWOrds = getgKeywords()
    }
    gKeywords = loadedKeyWOrds
    _saveKeyWordsToStorage()
}

function _saveKeyWordsToStorage() {
    saveToStorage(KEY, gKeywords)
}

function getKeywords() {
    return gKeywords
}

function changeFontSize(filterByWord) {
    gKeywords = loadFromStorage(KEY)
    for (var i in gKeywords) {
        if (filterByWord === i) {
            gKeywords[i] += 5;
        }
    }
    _saveKeyWordsToStorage()
}


