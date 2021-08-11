'use strict'
var gElCanvas
var gCtx
var gCurrText
var x
var y



function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log(gCtx);
    gCtx.stroke()
    resizeCanvas()
}


function drawImg(elImg) {
    //remove gallery
    document.querySelector('.main-content-gallery').classList.add('hidden-section')
    document.querySelector('.main-content-editor').classList.remove('hidden-section')
    //create meme
    onCerteMeme(elImg);
    var img = new Image()
    img.src = elImg.src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function onCerteMeme(elImg) {
    createMeme(elImg.dataset.id)
}


function onAddText() {
    AddText(gCurrText)
}

function onChangeText(text) {
    gCurrText = text.value;
}



function drawText(text, size, align, color) {
    var currMeme = getgMeme()

    console.log(size);
    gCtx.font = `${size}px Impact`
    //gCtx.font = `60px Impact`
    gCtx.fillStyle = color
    gCtx.strokeStyle = 'balck'
    gCtx.lineWidth = 1
    gCtx.align = align
    if (currMeme.selectedLineIdx === 1) {
        gCtx.textBaseline = 'top'
        x = gElCanvas.width / 2
        y = 0
        gCtx.fillText(text, gElCanvas.width / 2, 0, gElCanvas.width)
        gCtx.strokeText(text, gElCanvas.width / 2, 0, gElCanvas.width)
    }
    else if (currMeme.selectedLineIdx === 2) {
        x = gElCanvas.width / 2
        y = gElCanvas.height
        gCtx.textBaseline = 'bottom'
        gCtx.fillText(text, gElCanvas.width / 2, gElCanvas.height, gElCanvas.width)
        gCtx.strokeText(text, gElCanvas.width / 2, gElCanvas.height, gElCanvas.width)
    }
    else {
        x = gElCanvas.width / 2
        y = gElCanvas.height / 2
        gCtx.textBaseline = 'top'
        gCtx.fillText(text, gElCanvas.width / 2, gElCanvas.height / 2, gElCanvas.width)
        gCtx.strokeText(text, gElCanvas.width / 2, gElCanvas.height / 2, gElCanvas.width)
    }
    console.log(
    );
    setline(x, y)
}

function onIncreaseText() {
    increaseText()
    renderCanvas()
}

function onDecreaseText() {
    decreaseText()
    renderCanvas()
}


function canvasClicked(ev) {
    //var meme = getgMeme().lines
    //meme.forEach(text => {
    //    var rect =text.rect
    //    gCtx.rect(...rect)
    //    gCtx.stroke()

    //});
    //var rect = meme.lines[0].rect
    //console.log(rect);




    ////const clickedStar = meme.lines.find(line => {
    ////    console.log( line.x + 'line.x');
    ////    console.log( line.y + 'line.y');
    ////    debugger
    ////    return ev.offsetX+10 >= line.x && ev.offsetX <= line.x + 100 &&
    ////    ev.offsetY+10 >= line.y && ev.offsetY <= line.y+100
    ////})

    ////if (clickedStar) openModal(console.log('inside'))

}



//function wrapText(context, text, x, y, maxWidth, lineHeight) {
//    var words = text.split(' ');
//    var line = '';

//    for(var n = 0; n < words.length; n++) {
//      var testLine = line + words[n] + ' ';
//      var metrics = context.measureText(testLine);
//      var testWidth = metrics.width;
//      if (testWidth > maxWidth && n > 0) {
//        context.fillText(line, x, y);
//        line = words[n] + ' ';
//        y += lineHeight;
//      }
//      else {
//        line = testLine;
//      }
//    }
//    context.fillText(line, x, y);
//  }

//  var canvas = document.getElementById('myCanvas');
//  var context = canvas.getContext('2d');
//  var maxWidth = 400;
//  var lineHeight = 25;
//  var x = (canvas.width - maxWidth) / 2;
//  var y = 60;
//  var text = 'All the world \'s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.';

//  context.font = '16pt Calibri';
//  context.fillStyle = '#333';

//  wrapText(context, text, x, y, maxWidth, lineHeight);


function renderCanvas() {

    var currImgIdx = getgMeme().selectedImgId
    var renderImg = findImgById(currImgIdx)

    var img = new Image()
    img.src = renderImg;
    {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
    gMemes[0].lines.forEach(line => {
        renderLine(line.text, line.color, line.align, line.size, line.x, line.y)
    });
}

function renderLine(text, color, align, size, x, y) {
    gCtx.font = `${size}px Impact`
    gCtx.fillStyle = color
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 1
    console.log(align + 'cur align');
    gCtx.align = align
    if (y === 0) {
        gCtx.textBaseline = 'top'
    }
    else {
        if (y > gElCanvas.height / 2) {
            gCtx.textBaseline = "bottom";

        }
        else {
            gCtx.textBaseline = "middle";
        }
    }

    gCtx.fillText(text, x, y, gElCanvas.width)
    gCtx.strokeText(text, x, y, gElCanvas.width)
}

function onDeleteLine() {
    deleteLine()
    renderCanvas()

}


function onSwitchLines() {
    switchLines()
    renderCanvas()

}

function onChangeAlign(alignBy) {
    changeAlign(alignBy)
    renderCanvas()

}

function onMoveUp() {
    MoveUp()
    renderCanvas()

}
function onMoveDown() {
    moveDown()
    renderCanvas()

}