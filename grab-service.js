'use stricte'
var gCurrMem


//gMeme = {
//    selectedImgId: imgIdx,
//    selectedLineIdx: 0,
//    lines: [
//        text: text,
//        size: 40,
//        align: 'center',
//        color: 'red',
//        strokeColor: 'black',
//        x,
//        y,
//        isDrag: false
//    ]
//}
//var gCurrMem = getgMeme()
//function getMem() {
//    return gCurrMem
//}

function isTextClicked(clickedPos) {
    const  pos  = {x:gCurrMem.lines.x , y: gCurrMem.lines.y}
    const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
    return distance <= gCurrMem.size
}


function setMemDrag(isDrag) {
    gCurrMem.isDrag = isDrag
}


function moveMem(dx, dy) {
    gCurrMem.pos.x += dx
    gCurrMem.pos.y += dy

}
