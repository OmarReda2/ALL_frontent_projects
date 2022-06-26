/*

1-lma ados 3la el sora el div yban - lma ados 3la el close el div ytshal
2-el sora nfsaha tban
3- lma ados 3la el sahem a2lb bl trteeb
4- n2leb bel keyboard we n2fl bel keyboard

*/


var imgs = document.querySelectorAll('img');
var fixedBox = document.querySelector('#fixed-box');
var smallBox = document.getElementById('small-box');
var leftBtn = document.getElementById('left-btn');
var rightBtn = document.getElementById('right-btn');
var closeBtn = document.getElementById('close-btn');
var index = 0
var imgsArray = [];




function getNextImg() {
    index += 1;

    if (index == imgsArray.length) {
        index = 0;
    }
    var nextImgpath = imgsArray[index].getAttribute('src');
    smallBox.style.backgroundImage = `url(${nextImgpath})`;
    // console.log(nextImg)
}

function getPrevImg() {
    index -= 1;

    if (index == -1) {
        index = imgsArray.length - 1;
    }
    var nextImgpath = imgsArray[index].getAttribute('src');
    smallBox.style.backgroundImage = `url(${nextImgpath})`;
    console.log(index)
}

function closeImg() {
    fixedBox.style.display = 'none';
}





for (var i = 0; i < imgs.length; i++) {
    imgsArray.push(imgs[i])
    //    var imgsArray = Array.from(imgs);  // another option to convert imgs to array "built-in function" 

    imgs[i].addEventListener('click', function (e) {

        var clickImg = e.target;
        var imgSrc = clickImg.getAttribute('src');
        index = imgsArray.indexOf(clickImg);

        fixedBox.style.display = 'flex'
        smallBox.style.backgroundImage = `url(${imgSrc})`
        // console.log(index);


    })
}



closeBtn.addEventListener('click', function () {
    fixedBox.style.display = 'none';
})


fixedBox.addEventListener('click', closeImg)


rightBtn.addEventListener('click', function(e){
    e.stopPropagation();
    getNextImg();
})


leftBtn.addEventListener('click', function(e){
    e.stopPropagation();
    getPrevImg();
})


document.addEventListener('keyup', function (e) {
    if (e.key == 'ArrowRight') {
        getNextImg();
    }

    else if (e.key == 'ArrowLeft') {
        getPrevImg();
    }

    else if(e.key == 'Escape'){
        closeImg();
    }
})
