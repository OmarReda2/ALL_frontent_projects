/**
 * 
 * 1- change nav
 * 
 * 2- btn up
 * 
 * 3-smooth scroll
 * 
 * 4-options color
 * 
 * 5-loading screen
 * 
 * 6-jquery plugins
 * 
 * 
 */



$(window).scroll(function () {
    let windowScroll = $(window).scrollTop()

    // if(windowScroll >= 300){
    //     $('.navbar').addClass('bg-black')
    // }
    // else{
    //     $('.navbar').removeClass('bg-black')
    // }

    // if(windowScroll >= 300){
    //     $('.navbar').css({
    //         transition: 'all 1s',
    //         backgroundColor: 'black'
    //     })
    // }
    // else{
    //     $('.navbar').css({
    //         transition: 'all 1s',
    //         backgroundColor: 'transparent'
    //     })
    // }





    // let homeHeight = $('#home').outerHeight();

    // if(windowScroll >= homeHeight){
    //     $('.navbar').css({
    //         transition: 'all 1s',
    //         backgroundColor: 'black'
    //     })
    // }

    // else{
    //     $('.navbar').css({
    //         transition: 'all 1s',
    //         backgroundColor: 'transparent'
    //     })
    // }




    let aboutTopHeight = $('#about').offset().top;

    if (windowScroll >= aboutTopHeight) {
        $('.navbar').css({
            transition: 'all .5s',
            backgroundColor: 'black'
        })

        $('.btn-up').fadeIn(500)
    }

    else {
        $('.navbar').css({
            transition: 'all .5s',
            backgroundColor: 'transparent'
        })

        $('.btn-up').fadeOut(500)
    }


})











$('.btn-up').click(function () {

    $('body, html').animate({
        scrollTop: 0
    }, 1)
})


$('.navbar .nav-link').click(function () {

    let hrefValue = $(this).attr('href');


    let offs = $(hrefValue).offset().top

    $('body, html').animate({
        scrollTop: offs
    }, 1)

})














for (let i = 0; i < 6; i++) {
    let colors = ['tomato', 'teal', 'gray', 'black', '#0dcaf0', 'indigo']
    $('.option li').eq(i).css('backgroundColor', colors[i])
}

// $('.option li').eq(0).css('backgroundColor', 'tomato')
// $('.option li').eq(1).css('backgroundColor', 'teal')
// $('.option li').eq(2).css('backgroundColor', 'gray')
// $('.option li').eq(3).css('backgroundColor', 'black')
// $('.option li').eq(4).css('backgroundColor', '#0dcaf0')
// $('.option li').eq(5).css('backgroundColor', 'indigo')



$('.option i').click(function () {
    let infoWidth = $('.optionSide').outerWidth();
    // console.log(infoWidth)
    

    

    let x = $('.option').offset().left
    // console.log(x)

    let y = $('.option').css('left')
    // console.log(y)

    if(x > -1){
        $('.option').animate({ left: -infoWidth }, 1000);
    }
    else{
        $('.option').animate({ left: 0 }, 1000);
    }

})


















$('.option li').click(function(){
    let bg = $(this).css('backgroundColor');
    // console.log(bg)

    $('p, h1, h2, i, h3, span, div, button, a, ul').css('color', bg)
})

$('.option img').click(function(){
    let imgSrc = $(this).attr('src');
    // console.log(imgSrc)

    $(this).css('border', 'solid red 2px')
    $(this).siblings().css('border', 'none')

    $('#home').css('backgroundImage', `url(${imgSrc})`)
    // $('#home').css('transition', `all 1s`)
    
})






// window.addEventListener('load', function(){
//     console.log('load')
// })

// $(window).ready(function(){
//     console.log('ready')
// })

$(window).ready(function(){
    $('#loading').fadeOut(1000, function(){
        $('body').css('overflow', 'auto')
    })
    
    
})



// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });


