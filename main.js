'use strict'
var gElCanvas;
var gCtx;


function onInit() {
    //RENDER GALLERY AND KEY WORDS

    renderKeywords()
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    document.querySelector('.image-gallery').innerHTML = getStrGalleryImgs()
    resizeCanvas()
    creategMeme(gElCanvas.width)
    // gCtx.stroke()
}


//RENDER FUNCTIONS
function openCanvas(elImg) {
    //remove gallery
    document.querySelector('.main-content-gallery').classList.add('hidden-section')
    document.querySelector('.main-content-editor').classList.remove('hidden-section')
    //UPDATE meme IMG ID
    setMemeImg(elImg.dataset.id)
    renderCanvas()
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
    renderCanvas()
    // renderTxt()
}


function renderCanvas() {
    var meme = getMeme()
    var renderImg = findImgById(meme.selectedImgId)
    var img = new Image()
    img.src = renderImg;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        renderTxt()
    }

}

function renderTxt() {
    var meme = getMeme()
    document.querySelector("[name='text-box']").value = meme.lines[meme.selectedLineIdx].txt
    meme.lines.forEach((line, idx) => {
        gCtx.textBaseline = 'top';
        gCtx.font = `${line.size}px ${line.font}`
        gCtx.fillStyle = line.color
        gCtx.strokeStyle = line.strokeColor
        gCtx.lineWidth = 2
        gCtx.textAlign = line.align
        var lineHeight = line.size * 1.286;
        gCtx.fillText(line.txt, line.posX, line.posY, gElCanvas.width)
        gCtx.strokeText(line.txt, line.posX, line.posY, gElCanvas.width)

        if (idx === meme.selectedLineIdx) {
            gCtx.strokeStyle = 'black'
            gCtx.strokeRect(10, line.posY, gElCanvas.width - 20, lineHeight);
        }
    });
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}


function renderGallery(imgIds) {
    let strHtml;
    if (!imgIds.length) strHtml = getStrGalleryImgs()
    else {
        strHtml = imgIds.map(img => {
            return `<a href="#"><img data-id="${img.id}" onclick="drawImg(this)" src="./img/${img.id}.jpg" /></a>`
        }).join('')
    }
    document.querySelector('.image-gallery').innerHTML = strHtml
}


function renderKeywords() {
    var keyWords = getKeywords()
    var strHtml = ''

    for (let keyword in keyWords) {
        strHtml += `<span style="font-size:${keyWords[keyword] + 5}px"> ${keyword}</span>`
    }
    document.querySelector('.key-words').innerHTML = strHtml

}


//EDIT FUNCTIONS

function onAddLine() {
    var meme = getMeme()
    if (meme.lines.length === 3) return
    // document.querySelector("[name='text-box']").value = ''
    addNewLine(gElCanvas.width, gElCanvas.height)
    renderCanvas()
    // renderTxt()
}


function onDecreaseText() {
    decreaseText()
    renderCanvas()
    // renderTxt()
}

function onIncreaseText() {
    increaseText()
    renderCanvas()
    // renderTxt()
}


function onChangeColor() {
    var newColor = document.querySelector("[name='color']").value;
    changeColor(newColor)
    renderCanvas()
    // renderTxt()
}

function onChangeStroke() {
    var newColor = document.querySelector("[name='strokeColor']").value;
    changeStroke(newColor)
    renderCanvas()
    // renderTxt()
}


function onMoveUp() {
    MoveUp()
    renderCanvas()
    // renderTxt()

}
function onMoveDown() {
    moveDown()
    renderCanvas()
    // renderTxt()
}

function onDeleteLine() {
    document.querySelector("[name='text-box']").value = ''
    deleteLine()
    renderCanvas()
    // renderTxt()
}

function onChangeAlign(alignBy) {
    changeAlign(alignBy)
    renderCanvas()
    // renderTxt()
}


function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
}

function onSwitchLines() {
    var meme = getMeme()
    if (meme.selectedLineIdx < 2 && meme.selectedLineIdx !== meme.lines.length - 1) {
        meme.selectedLineIdx++;
    }
    else meme.selectedLineIdx = 0

    renderCanvas()
    // renderTxt()
}

function onChangeFont() {
    changeFont()
    renderCanvas()
    // renderTxt()
}

//filter data


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
    var filterByWord = document.querySelector("[name='key-words']").value.toLowerCase();
    changeFontSize(filterByWord)
    const filteredImgs = filterBy(filterByWord)
    renderGallery(filteredImgs)
    renderKeywords()
}