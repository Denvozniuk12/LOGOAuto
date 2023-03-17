const navBtn = document.getElementById('nav-btn');
const header = document.getElementsByTagName('header');
const headerContent1 = document.getElementById('header-content-1');
const headerContent2 = document.getElementById('header-content-2');
const main = document.getElementsByTagName('main');
const footer = document.getElementsByTagName('footer');
const cards = document.querySelectorAll('.card');
const competitionsCards = document.getElementById('competitions-cards');
const swiperWrapper = document.getElementById('competitions-wrapper');
let swiper = null;

function removeSwiperCards() {
    if (swiper !== null) {
        swiper = null;
    }
    while(competitionsCards.hasAttributes()){
        competitionsCards.removeAttribute(competitionsCards.attributes[0].name);
    }
    competitionsCards.setAttribute('id', 'competitions-cards');

    while (swiperWrapper.hasAttributes()) {
        swiperWrapper.removeAttribute(swiperWrapper.attributes[0].name);
    }
    swiperWrapper.setAttribute('id', 'competitions-wrapper');
    cards.forEach((card) => {
        while (card.hasAttributes()) {
            card.removeAttribute(card.attributes[0].name);
        }
        card.setAttribute('class', 'card');
    });
}

function addSwiperCards(slidesPerViewNumber) {
    if (!competitionsCards.classList.contains('swiper-container'))
        competitionsCards.classList.add('swiper-container');

    if (!swiperWrapper.classList.contains('swiper-wrapper'))
        swiperWrapper.classList.add('swiper-wrapper');

    cards.forEach((card) => {
        if (!card.classList.contains('swiper-slide'))
            card.classList.add('swiper-slide');
    })

    if (swiper === null) {
        swiper = new Swiper('.swiper-container', {
            slidesPerView: slidesPerViewNumber,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}


function swiperSliderCards() {
    if (window.innerWidth < 1112) {
        if (window.innerWidth < 306) {
            removeSwiperCards();
            addSwiperCards(1);
        }

        else if (window.innerWidth < 362) {
            removeSwiperCards();
            addSwiperCards(1.19);
        }

        else if (window.innerWidth < 385) {
            removeSwiperCards();
            addSwiperCards(1.3);
        }

        else if (window.innerWidth < 437) {
            removeSwiperCards();
            addSwiperCards(1.5);
        }

        else if (window.innerWidth < 512) {
            removeSwiperCards();
            addSwiperCards(1.7);
        }

        else if (window.innerWidth < 620) {
            removeSwiperCards();
            addSwiperCards(2);
        }

        else if (window.innerWidth < 640) {
            removeSwiperCards();
            addSwiperCards(2.2);
        }

        else if (window.innerWidth < 768) {
            removeSwiperCards();
            addSwiperCards(2.5);
        }

        else if (window.innerWidth < 896) {
            removeSwiperCards();
            addSwiperCards(3);
        }

        else if (window.innerWidth < 1024) {
            removeSwiperCards();
            addSwiperCards(3.5);
        }
        else {
            removeSwiperCards();
            addSwiperCards(3.7);
        }
    }

    else {
        removeSwiperCards();
    }
}

swiperSliderCards();

window.addEventListener('resize', function() {
    swiperSliderCards();
});


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

const reviewsCards = document.querySelector('.reviews-cards');
const reviewsCard = document.querySelector('.reviews-card');
let startPosition = 0;
let currentPosition = startPosition;

let reviewsCardWidth = reviewsCard.clientWidth;
const rBtn1 = document.querySelectorAll('.rBtn-1');
const rBtn2 = document.querySelectorAll('.rBtn-2');
const rBtn3 = document.querySelectorAll('.rBtn-3');

const rBtnList = [rBtn1, rBtn2, rBtn3];

window.addEventListener('resize', function () {
    reviewsCardWidth = document.querySelector('.reviews-card').clientWidth;
});



function transformReviewsCards(cardList, currentPositionElement) {
    cardList.setAttribute('style', 'transform: translateX(' + currentPositionElement + 'px); transition-duration: .7s;');
    setTimeout(function() {
        cardList.setAttribute('style', 'transform: translateX(' + currentPositionElement + 'px);');
    }, 700);
}
function rBtnSetActive(rBtnActive, rBtnNotActive1, rBtnNotActive2) {
    rBtnActive.forEach(function(rbAc){
        if(!rbAc.classList.contains('active')){
            rbAc.classList.add('active');
        }
    });
    rBtnNotActive1.forEach(function(rbNotAc1){
        if(rbNotAc1.classList.contains('active'))
            rbNotAc1.classList.remove('active');
    });
    rBtnNotActive2.forEach(function(rbNotAc2){
        if(rbNotAc2.classList.contains('active'))
            rbNotAc2.classList.remove('active');
    });
}

function changeCurrentPosition(index) {
    currentPosition = startPosition - (reviewsCardWidth * index);
}

for (let i = 0; i < rBtnList.length; i++){
    for (let j = 0; j < rBtnList[i].length; j++) {
        rBtnList[i][j].onclick = (function(i, j) {
            return function() {
                switch(rBtnList[i]){
                    case rBtn1:
                        if(!rBtn1[0].classList.contains('active')){
                            rBtnSetActive(rBtn1, rBtn2, rBtn3);
                            changeCurrentPosition(i);
                            transformReviewsCards(reviewsCards, currentPosition);
                        }
                        break;
                    case rBtn2:
                        if(!rBtn2[0].classList.contains('active')){
                            rBtnSetActive(rBtn2, rBtn1, rBtn3);
                            changeCurrentPosition(i);
                            transformReviewsCards(reviewsCards, currentPosition);
                        }
                        break;
                    case rBtn3:
                        if(!rBtn3[0].classList.contains('active')){
                            rBtnSetActive(rBtn3, rBtn2, rBtn1);
                            changeCurrentPosition(i);
                            transformReviewsCards(reviewsCards, currentPosition);
                        }
                        break;
                }
            }
        })(i, j);
    }
}


