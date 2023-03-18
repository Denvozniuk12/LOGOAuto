const navBtn = document.getElementById('nav-btn');
const header = document.querySelector('header');
const headerContent1 = document.getElementById('header-content-1');
const headerContent2 = document.getElementById('header-content-2');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const cards = document.querySelectorAll('.card');
const competitionsHeading = document.getElementById('competitions-heading');
const latestHeading = document.getElementById('latest-heading');
let competitionsCards = document.getElementById('competitions-cards');
let latestCards = document.getElementById('latest-cards');
const competitionsWrapper = document.getElementById('competitions-wrapper');
const latestWrapper = document.getElementById('latest-wrapper');
let swiper = null;
let changeCards = false;
let window1112px = false;
let window1024px = false;
let window896px = false;
let window768px = false;
let window640px = false;
let window620px = false;
let window512px = false;
let window437px = false;
let window385px = false;
let window362px = false;
let window306px = false;


function removeSwiperCards() {
    if (swiper !== null) {
        swiper = null;
    }
    if (changeCards) {
        while (competitionsWrapper.hasAttributes()) {
            competitionsWrapper.removeAttribute(competitionsWrapper.attributes[0].name);
        }
        competitionsWrapper.setAttribute('id', 'competitions-wrapper');

        while (latestWrapper.hasAttributes()) {
            latestWrapper.removeAttribute(latestWrapper.attributes[0].name);
        }
        latestWrapper.setAttribute('id', 'latest-wrapper');

        cards.forEach((card) => {
            while (card.hasAttributes()) {
                card.removeAttribute(card.attributes[0].name);
            }
            card.setAttribute('class', 'card');
        });


        competitionsCards.remove();
        latestCards.remove();
        competitionsCards = null;
        latestCards = null;

        const compCards = document.createElement('div');
        compCards.setAttribute('id', 'competitions-cards');
        compCards.appendChild(competitionsWrapper);
        competitionsCards = compCards;
        competitionsHeading.insertAdjacentElement('afterend', competitionsCards);

        const latCards = document.createElement('div');
        latCards.setAttribute('id', 'latest-cards');
        latCards.appendChild(latestWrapper);
        latestCards = latCards;
        latestHeading.insertAdjacentElement('afterend', latestCards);

        changeCards = false;
    }
}

function addSwiperCards(slidesPerViewNumber) {
    if (!competitionsCards.classList.contains('swiper-container'))
        competitionsCards.classList.add('swiper-container');

    if (!latestCards.classList.contains('swiper-container'))
        latestCards.classList.add('swiper-container');


    if (!competitionsWrapper.classList.contains('swiper-wrapper'))
        competitionsWrapper.classList.add('swiper-wrapper');

    if (!latestWrapper.classList.contains('swiper-wrapper'))
        latestWrapper.classList.add('swiper-wrapper');

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

function resetWindowSceen() {
    window1112px = false;
    window1024px = false;
    window896px = false;
    window768px = false;
    window640px = false;
    window620px = false;
    window512px = false;
    window437px = false;
    window385px = false;
    window362px = false;
    window306px = false;
}

function swiperSliderCards() {
    if (window.innerWidth < 1112) {
        if (window.innerWidth < 306) {
            if(!window306px){
                removeSwiperCards();
                addSwiperCards(1);
                resetWindowSceen();
                window306px = true;
                changeCards = true;
            }
        }

        else if (window.innerWidth < 362) {
            if(!window362px){
                removeSwiperCards();
                addSwiperCards(1.19);
                resetWindowSceen();
                window362px = true;
                changeCards = true;
            }
        }

        else if (window.innerWidth < 385) {
            if(!window385px){
                removeSwiperCards();
                addSwiperCards(1.3);
                resetWindowSceen();
                window385px = true;
                changeCards = true;
            }
        }

        else if (window.innerWidth < 437) {
            if(!window437px){
                removeSwiperCards();
                addSwiperCards(1.5);
                resetWindowSceen();
                window437px = true;
                changeCards = true;
            }
        }

        else if (window.innerWidth < 512) {
            if(!window512px){
                removeSwiperCards();
                addSwiperCards(1.7);
                resetWindowSceen();
                window512px = true;
                changeCards = true;
            }
        }

        else if (window.innerWidth < 620) {
            if(!window620px){
                removeSwiperCards();
                addSwiperCards(2);
                resetWindowSceen();
                window620px = true;
                changeCards = true;
            }
        }

        else if (window.innerWidth < 640) {
            if(!window640px){
                removeSwiperCards();
                addSwiperCards(2.2);
                resetWindowSceen();
                window640px = true;
                changeCards = true;
            }
        }

        else if (window.innerWidth < 768) {
            if(!window768px){
                removeSwiperCards();
                addSwiperCards(2.5);
                resetWindowSceen();
                window768px = true;
                changeCards = true;
            }
        }

        else if (window.innerWidth < 896) {
            if(!window896px){
                removeSwiperCards();
                addSwiperCards(3);
                resetWindowSceen();
                window896px = true;
                changeCards = true;
            }
        }

        else if (window.innerWidth < 1024) {
            if(!window1024px){
                removeSwiperCards();
                addSwiperCards(3.5);
                resetWindowSceen();
                window1024px = true;
                changeCards = true;
            }
        }
        else {
            if(!window1112px){
                removeSwiperCards();
                addSwiperCards(3.7);
                resetWindowSceen();
                window1112px = true;
                changeCards = true;
            }          
        }
    }

    else {
        if(window1112px || window1024px || window896px || window768px || window640px || window620px || window512px || window437px ||
            window385px || window362px || window306px){
            
            resetWindowSceen();
            changeCards = true;
        }
        removeSwiperCards();
    }
}

swiperSliderCards();


window.addEventListener('resize', function(){
    swiperSliderCards();
});


navBtn.onclick = function () {
    if (headerContent2.classList.contains('close')) {
        return;
    }
    if (!navBtn.classList.contains('active')) {
        navBtn.classList.add('active');
        header.classList.add('menu-open');
        headerContent1.classList.add('menu-open');
        headerContent2.classList.add('menu-open');
        main.style = "display: none";
        footer.style = "display: none";
    }
    else {
        navBtn.classList.remove('active');
        header.classList.remove('menu-open');
        headerContent1.classList.remove('menu-open');
        main.removeAttribute('style');
        footer.removeAttribute('style');
        headerContent2.classList.add('close');
        setTimeout(() => {
            headerContent2.classList.remove('close');
            headerContent2.classList.remove('menu-open');
        }, 500)
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


