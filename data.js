'use strict'
var gImgs = [
    { id: 1, url: './img/1.jpg', keywords: ['men'] },
    { id: 2, url: 'img/2.jpg', keywords: ['cute', 'happy', 'animals'] },
    { id: 3, url: 'img/3.jpg', keywords: ['baby', 'cute', 'men', 'animals'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cute', 'animals'] },
    { id: 5, url: 'img/5.jpg', keywords: ['baby', 'cute', 'men', 'happy', 'smile'] },
    { id: 6, url: 'img/6.jpg', keywords: ['men', 'happy', 'smile'] },
    { id: 7, url: 'img/7.jpg', keywords: ['baby', 'cute', 'men'] },
    { id: 8, url: 'img/8.jpg', keywords: ['men', 'happy', 'smile'] },
    { id: 9, url: 'img/9.jpg', keywords: ['baby', 'cute', 'men', 'happy', 'smile'] },
    { id: 10, url: 'img/10.jpg', keywords: ['men', 'happy', 'smile'] },
    { id: 11, url: 'img/11.jpg', keywords: ['men'] },
    { id: 12, url: 'img/12.jpg', keywords: ['men'] },
    { id: 13, url: 'img/13.jpg', keywords: ['men', 'happy', 'animals', 'smile'] },
    { id: 14, url: 'img/14.jpg', keywords: ['men'] },
    { id: 15, url: 'img/15.jpg', keywords: ['men', 'happy', 'smile'] },
    { id: 16, url: 'img/16.jpg', keywords: ['men', 'happy', 'smile'] },
    { id: 17, url: 'img/17.jpg', keywords: ['men'] },
    { id: 18, url: 'img/18.jpg', keywords: ['cute', 'men', 'happy', 'smile'] },

];



var galleryImgs =
    `        <img data-id="1" onclick="drawImg(this)" src="./img/1.jpg" />
<img data-id="2" onclick="drawImg(this)" src="./img/2.jpg" />
<img data-id="3" onclick="drawImg(this)" src="./img/3.jpg" />
<img data-id="4" onclick="drawImg(this)" src="./img/4.jpg" />
<img data-id="5" onclick="drawImg(this)" src="./img/5.jpg" />
<img data-id="6" onclick="drawImg(this)" src="./img/6.jpg" />
<img data-id="7" onclick="drawImg(this)" src="./img/7.jpg" />
<img data-id="8" onclick="drawImg(this)" src="./img/8.jpg" />
<img data-id="9" onclick="drawImg(this)" src="./img/9.jpg" />
<img data-id="10" onclick="drawImg(this)" src="./img/10.jpg" />
<img data-id="11" onclick="drawImg(this)" src="./img/11.jpg" />
<img data-id="11" onclick="drawImg(this)" src="./img/12.jpg" />
<img data-id="11" onclick="drawImg(this)" src="./img/13.jpg" />
<img data-id="11" onclick="drawImg(this)" src="./img/14.jpg" />
<img data-id="11" onclick="drawImg(this)" src="./img/15.jpg" />
<img data-id="11" onclick="drawImg(this)" src="./img/16.jpg" />
<img data-id="11" onclick="drawImg(this)" src="./img/17.jpg" />
<img data-id="11" onclick="drawImg(this)" src="./img/18.jpg" />
<img data-id="11" onclick="drawImg(this)" src="./img/1.jpg" />
<img data-id="11" onclick="drawImg(this)" src="./img/2.jpg" />
<img data-id="11" onclick="drawImg(this)" src="./img/3.jpg" />`


var gKeywords = { 'baby': 3, 'cute': 5, 'men':10, 'happy': 5, 'animals': 8, 'smile': 6 }


// var gMeme = {
//    selectedImgId: 5,
//    selectedLineIdx: 0,
//    lines: [
//        {
//            txt: 'I never eat Falafel',
//            size: 40,
//            align: 'center',
//            color: 'white',
//            strokeColor: 'black',
//            textBaseline: 'top',
//            posX: gElCanvas.width / 2,
//            posY: 30
//        }
//    ]
//}
//function getMemefromData(){
//return gMeme
//}
function getKeywords(){
    return gKeywords
}
function getgImg() {
    return gImgs
}
function getGalleryImgs() {
    return galleryImgs
}


function filterBy(filterByKey) {
    var filterImgGallery = gImgs.filter(img => {
        return img.keywords.some(keyWord => {
            return (keyWord === filterByKey)
        })
    })
    console.log(filterImgGallery);
    getIDfromgImg(filterImgGallery)
}


function getIDfromgImg(filterImgGallery) {
    var idxs = filterImgGallery.map(img => {
        return img.id
    })
    renderGallery(idxs)
}