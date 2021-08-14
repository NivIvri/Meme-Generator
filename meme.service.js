'use strict'
var gElCanvas
const KEY = 'KEY_WORDS_DB'
var gKeywords
getCanvasWidthAndHeight()
_createKeyWords()


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
                font: 'Impact',
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
            font: 'Impact',
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


function ChangeFont() {
    var currFont = gMeme.lines[gMeme.selectedLineIdx].font
    if (currFont === "Impact") {
        gMeme.lines[gMeme.selectedLineIdx].font = 'Tahoma'
    }
    else {
        gMeme.lines[gMeme.selectedLineIdx].font = 'Impact'

    }
}


//filter images

function filterBy(filterByWord) {
    var filterImgGallery = gImgs.filter(img => {
        return img.keywords.some(keyWord => {
            return (keyWord === filterByWord)
        })
    })
    getIdfromgImg(filterImgGallery)
}


function getIdfromgImg(filterImgGallery) {
    var idxs = filterImgGallery.map(img => {
        return img.id
    })
    renderGallery(idxs)
}

function _createKeyWords() {
    debugger
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
    debugger
    gKeywords = loadFromStorage(KEY)
    for (var i in gKeywords) {
        if (filterByWord === i) {
            gKeywords[i] += 5;
        }
    }
    _saveKeyWordsToStorage()
}


