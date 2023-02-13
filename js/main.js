var navBtn = document.querySelector('#nav-btn');
var header = document.querySelector('header');
var headerContent1 = document.querySelector('#header-content-1');
var headerContent2 = document.querySelector('#header-content-2');
var main = document.querySelector('main');
var footer = document.querySelector('footer');
// var bannerImg = document.querySelector('#banner-img');

navBtn.onclick = function() {
    if(!navBtn.classList.contains('active')){
        navBtn.classList.add('active');
        header.classList.add('menu-open');
        headerContent1.classList.add('menu-open');
        headerContent2.classList.add('menu-open');
        main.style = "display: none";
        footer.style = "display: none";
    }
    else{
        navBtn.classList.remove('active');
        header.classList.remove('menu-open');
        headerContent1.classList.remove('menu-open');
        main.removeAttribute('style');
        footer.removeAttribute('style');
        headerContent2.classList.add('close');
        setTimeout(() => {
            headerContent2.classList.remove('close');
            headerContent2.classList.remove('menu-open');
        }, 700)
    }
}

var rBtn1 = document.querySelector('#rBtn-1');
var rBtn2 = document.querySelector('#rBtn-2');
var rBtn3 = document.querySelector('#rBtn-3');

rBtn1.onclick = function () {
    if(!rBtn1.classList.contains('active')){
        if(rBtn2.classList.contains('active'))
            rBtn2.classList.remove('active');
        else if (rBtn3.classList.contains('active'))
            rBtn3.classList.remove('active');

        rBtn1.classList.add('active');
    }
}

rBtn2.onclick = function() {
    if(!rBtn2.classList.contains('active')){
        if(rBtn1.classList.contains('active'))
            rBtn1.classList.remove('active');
        else if (rBtn3.classList.contains('active'))
            rBtn3.classList.remove('active');

        rBtn2.classList.add('active');
    }
}

rBtn3.onclick = function () {
    if(!rBtn3.classList.contains('active')){
        if(rBtn1.classList.contains('active'))
            rBtn1.classList.remove('active');
        else if (rBtn2.classList.contains('active'))
            rBtn2.classList.remove('active');

        rBtn3.classList.add('active');
    }
}

// var mediaQuery500px = window.matchMedia('(max-width: 500px)');

// function changes(mediaQuery500px) {
//     // if (mediaQuery500px.matches)   // less than 500 px
//     // {
//     //     bannerImg.src = './img/Banner/Banner-car-mobile.webp';
//     // }
//     // else    // more than 500
//     // {
//     //     bannerImg.src = './img/Banner/Banner-car.webp';
//     // }
// }

// if (matchMedia){
//     mediaQuery500px.addListener(changes);
//     changes(mediaQuery500px);
// }