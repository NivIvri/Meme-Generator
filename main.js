'use strict'
var gElCanvas
var gCtx


function onInit() {
    creategMeme()
    //RENDER GALLERY AND KEY WORDS
    renderKeywords()
    document.querySelector('.image-gallery').innerHTML = getGalleryImgs()

    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    gCtx.stroke()
    resizeCanvas()
}


//RENDER FUNCTIONS
function drawImg(elImg) {
    //remove gallery
    document.querySelector('.main-content-gallery').classList.add('hidden-section')
    document.querySelector('.main-content-editor').classList.remove('hidden-section')
    //UPDATE meme IMG ID
    var meme = getMeme()
    meme.selectedImgId = elImg.dataset.id
    var img = new Image()
    img.src = elImg.src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function onChangeText() {
    var meme = getMeme()
    var txt = document.querySelector("[name='text-box']").value;
    if (meme.lines.length - 1 <= meme.selectedLineIdx) {
        meme.selectedLineIdx = meme.lines.length - 1
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
        meme.lines[meme.selectedLineIdx].posY = posY;

    }

    meme.lines[meme.selectedLineIdx].txt = txt;
    renderImg()
    renderTxt()
}


function renderImg() {
    var meme = getMeme()
    var currImgIdx = meme.selectedImgId
    var renderImg = findImgById(currImgIdx)
    var img = new Image()
    img.src = renderImg;
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

}

function renderTxt() {
    var meme = getMeme()
    meme.lines.forEach((line, index) => {
        gCtx.textBaseline = 'top';
        gCtx.font = `${line.size}px Impact`
        gCtx.fillStyle = line.color
        gCtx.strokeStyle = line.strokeColor
        gCtx.lineWidth = 2
        gCtx.textAlign = line.align
        var lineHeight = line.size * 1.286;


        gCtx.fillText(line.txt, line.posX, line.posY, gElCanvas.width)
        gCtx.strokeText(line.txt, line.posX, line.posY, gElCanvas.width)

        if (index === meme.selectedLineIdx) {
            gCtx.strokeRect(10, line.posY, gElCanvas.width - 20, lineHeight);
        }

    });
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}


function renderGallery(idxs) {
    var strHtml = ''
    if (idxs.length === 0) {
        strHtml = getGalleryImgs()
    }

    else {
        strHtml += idxs.map(id => {
            return `<img data-id="${id}" onclick="drawImg(this)" src="./img/${id}.jpg" />`
        }).join('')

    }
    document.querySelector('.image-gallery').innerHTML = strHtml
}


function renderKeywords() {
    var keyWords = getKeywords()
    var strHtml = ''

    for (var i in keyWords) {
        strHtml += `<span style="font-size:${keyWords[i] * 5}px"> ${i}</span>`
    }
    document.querySelector('.key-words').innerHTML = strHtml
}


//EDIT FUNCTIONS

function onAddText() {
    var meme = getMeme()
    if (meme.lines[0].txt === '') return
    document.querySelector("[name='text-box']").value = ''
    addNewLine()
    renderImg()
    renderTxt()
}


function onDecreaseText() {
    decreaseText()
    renderImg()
    renderTxt()
}

function onIncreaseText() {
    increaseText()
    renderImg()
    renderTxt()
}


function onChangeColor() {
    var newColor = document.querySelector("[name='color']").value;
    changeColor(newColor)
    renderImg()
    renderTxt()
}

function onChangeStroke() {
    var newColor = document.querySelector("[name='strokeColor']").value;
    changeStroke(newColor)
    renderImg()
    renderTxt()
}


function onMoveUp() {
    MoveUp()
    renderImg()
    renderTxt()

}
function onMoveDown() {
    moveDown()
    renderImg()
    renderTxt()
}

function onDeleteLine() {
    deleteLine()
    renderImg()
    renderTxt()
}

function onChangeAlign(alignBy) {
    changeAlign(alignBy)
    renderImg()
    renderTxt()
}


function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
}

function onSwitchLines() {
    var meme = getMeme()
    if (meme.selectedLineIdx < 2) {
        meme.selectedLineIdx++;
    }
    else {
        meme.selectedLineIdx = 0

    }
    renderImg()
    renderTxt()
}


//filter data

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function openGallery() {
    onInit()
    document.querySelector("[name='text-box']").value = ""
    document.querySelector('.main-content-gallery').classList.remove('hidden-section')
    document.querySelector('.main-content-editor').classList.add('hidden-section')
    //render all images gallery
    document.querySelector("[name='key-words']").value = ''
    renderGallery([])

}

function onFilterBy() {
    var filterByKey = document.querySelector("[name='key-words']").value.toLowerCase();
    filterBy(filterByKey)
}