'use strict'
var gElCanvas

getCanvasWidth()


function getCanvasWidth() {
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
            align: 'left',
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
