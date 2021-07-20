// gnb 

const gnb = document.getElementById('gnb');
const gnbTop = document.getElementsByClassName("gnb-top")[0];
const gnbBottom = document.getElementsByClassName("gnb-bottom")[0];

var frontCloud = document.getElementsByClassName("front-cloud")[0];
var backCloud = document.getElementsByClassName("back-cloud")[0];

var cookieImg01 = document.getElementsByClassName("cookie-img__1")[0];
var cookieImg02 = document.getElementsByClassName("cookie-img__2")[0];
var cookieImg03 = document.getElementsByClassName("cookie-img__3")[0];

// var yellowCookie = document.getElementsByClassName("yellow-cookie")[0];
// var purplewCookie = document.getElementsByClassName("purple-cookie")[0];
// var whiteCookie = document.getElementsByClassName("white-cookie")[0];
// var pinkCookie = document.getElementsByClassName("pink-cookie")[0];
// var orangeCookie = document.getElementsByClassName("orange-cookie")[0];

var bodyScrollTop = window.pageYOffset; //현재 스크롤탑값
var bodyScrollTopPrev = 0; // 이전 스크롤탑값
var bodyScrollDirection = bodyScrollTop - bodyScrollTopPrev; // 스크롤 방향 탐색 위한 변수

function menuScroll() {

    // 스크롤 이벤트가 발생할 때 마다 바디의 스크롤 탑 값 갱신
    bodyScrollTop = window.pageYOffset;

    // 스크롤 이벤트 방향 확인
    bodyScrollDirection = bodyScrollTop - bodyScrollTopPrev;
    console.log(bodyScrollTop);


    if ( bodyScrollTop > 50 ) {
        gnbTop.style.top = "-40px";
        gnbBottom.style.top = "-0";
    } else {
        gnbTop.style.top = "0";
        gnbBottom.style.top = "40px";
    }


    if ( bodyScrollTop > 3000 ) {
        frontCloud.style.animation = "ani01 1.2s ease-in forwards";
        backCloud.style.animation = "ani02 1s ease-in forwards";

        cookieImg01.style.animation = "ani03 1s ease-in forwards";
        cookieImg02.style.animation = "ani04 1s ease-in forwards";
        cookieImg03.style.animation = "ani05 1s ease-in forwards";

    } else {
        frontCloud.style.animation = "none";
        backCloud.style.animation = "none";  

        cookieImg01.style.animation = "none";
        cookieImg02.style.animation = "none";
        cookieImg03.style.animation = "none";

    }

    //마지막 순간에 이전 값을 현재 값으로 저장
    bodyScrollTopPrev = bodyScrollTop;

}





// main visual modal

var mvModal = document.getElementsByClassName("mv-modal")[0];
var modalVideo = document.getElementsByClassName("meida-modal__video")[0];
var mediaList = document.getElementsByClassName("media-list___li");

// 플레이 버튼 클릭시 모달 팝업 (유튜브 동영상)

function mvModalOpen() {
    mvModal.style.display = "block";
}


function mvModalClose() {
    // 버튼 클릭시 모달 display block
    mvModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == mvModal) {
        mvModal.style.display = "none";
    }
}




//game info content

function infoChange(i) {

    var slideImg = document.getElementsByClassName("slide-img")[0];

    var slideCirlce1 = document.getElementsByClassName("slide-circle1")[0];
    var slideCirlce2 = document.getElementsByClassName("slide-circle2")[0];
    var slideCirlce3 = document.getElementsByClassName("slide-circle3")[0];
    var slideCirlce4 = document.getElementsByClassName("slide-circle4")[0];
    var slideCirlce5 = document.getElementsByClassName("slide-circle5")[0];

    if ( i == 0 ) {

        slideImg.src = "img/gameContents-ko-01.jpg"

        slideCirlce1.style.width = "50px";
        slideCirlce2.style.width = "10px";
        slideCirlce3.style.width = "10px";
        slideCirlce4.style.width = "10px";
        slideCirlce5.style.width = "10px";

        slideCirlce1.style.backgroundColor = "#E2CA99;";
        slideCirlce2.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce3.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce4.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce5.style.backgroundColor = "rgb(197, 151, 113)";

        
    } else if ( i == 1) {

        slideImg.src = "img/gameContents-ko-02.jpg"

        slideCirlce1.style.width = "10px";
        slideCirlce2.style.width = "50px";
        slideCirlce3.style.width = "10px";
        slideCirlce4.style.width = "10px";
        slideCirlce5.style.width = "10px";

        slideCirlce1.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce2.style.backgroundColor = "#E2CA99";
        slideCirlce3.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce4.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce5.style.backgroundColor = "rgb(197, 151, 113)";
        

        
    } else if ( i == 2) {

        slideImg.src = "img/gameContents-ko-03.jpg"

        slideCirlce1.style.width = "10px";
        slideCirlce2.style.width = "10px";
        slideCirlce3.style.width = "50px";
        slideCirlce4.style.width = "10px";
        slideCirlce5.style.width = "10px";

        slideCirlce1.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce2.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce3.style.backgroundColor = "#E2CA99";
        slideCirlce4.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce5.style.backgroundColor = "rgb(197, 151, 113)";

    } else if ( i == 3) {
        slideImg.src = "img/gameContents-ko-04.jpg"

        slideCirlce1.style.width = "10px";
        slideCirlce2.style.width = "10px";
        slideCirlce3.style.width = "10px";
        slideCirlce4.style.width = "50px";
        slideCirlce5.style.width = "10px";

        slideCirlce1.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce2.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce3.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce4.style.backgroundColor = "#E2CA99";
        slideCirlce5.style.backgroundColor = "rgb(197, 151, 113)";

    } else {
        slideImg.src = "img/gameContents-ko-05.jpg"
        slideCirlce1.style.width = "10px";
        slideCirlce2.style.width = "10px";
        slideCirlce3.style.width = "10px";
        slideCirlce4.style.width = "10px";
        slideCirlce5.style.width = "50px";

        slideCirlce1.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce2.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce3.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce4.style.backgroundColor = "rgb(197, 151, 113)";
        slideCirlce5.style.backgroundColor = "#E2CA99";
        
    }
 
}


var currentSlideNum = 1;
var circleNum = 1;
var slideImg = document.getElementsByClassName('slide-img')[0];
var slideCircle = document.getElementById('slide-circle');

var slideCirlce1 = document.getElementsByClassName("slide-circle1")[0];
var slideCirlce2 = document.getElementsByClassName("slide-circle2")[0];
var slideCirlce3 = document.getElementsByClassName("slide-circle3")[0];
var slideCirlce4 = document.getElementsByClassName("slide-circle4")[0];
var slideCirlce5 = document.getElementsByClassName("slide-circle5")[0];


function slideLeft() {

    if ( currentSlideNum > 1 ) {
        currentSlideNum = currentSlideNum - 1;
        slideImg.src = "img/gameContents-ko-0"+currentSlideNum+".jpg";

        circleNum = currentSlideNum;

        if ( circleNum == 1 ) {

            slideCirlce1.style.width = "50px";
            slideCirlce2.style.width = "10px";
            slideCirlce3.style.width = "10px";
            slideCirlce4.style.width = "10px";
            slideCirlce5.style.width = "10px";
    
            slideCirlce1.style.backgroundColor = "#E2CA99";
            slideCirlce2.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce3.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce4.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce5.style.backgroundColor = "rgb(197, 151, 113)";

        } else if ( circleNum == 2 ) {
        
            slideCirlce1.style.width = "10px";
            slideCirlce2.style.width = "50px";
            slideCirlce3.style.width = "10px";
            slideCirlce4.style.width = "10px";
            slideCirlce5.style.width = "10px";
    
            slideCirlce1.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce2.style.backgroundColor = "#E2CA99";
            slideCirlce3.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce4.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce5.style.backgroundColor = "rgb(197, 151, 113)";

        } else if ( circleNum == 3 ) {
        
            slideCirlce1.style.width = "10px";
            slideCirlce2.style.width = "10px";
            slideCirlce3.style.width = "50px";
            slideCirlce4.style.width = "10px";
            slideCirlce5.style.width = "10px";
    
            slideCirlce1.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce2.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce3.style.backgroundColor = "#E2CA99";
            slideCirlce4.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce5.style.backgroundColor = "rgb(197, 151, 113)";
        
        } else if ( circleNum == 4 ) {
        
            slideCirlce1.style.width = "10px";
            slideCirlce2.style.width = "10px";
            slideCirlce3.style.width = "10px";
            slideCirlce4.style.width = "50px";
            slideCirlce5.style.width = "10px";
    
            slideCirlce1.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce2.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce3.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce4.style.backgroundColor = "#E2CA99";
            slideCirlce5.style.backgroundColor = "rgb(197, 151, 113)";
        
        } else if ( circleNum == 5 ) {
                
            slideCirlce1.style.width = "10px";
            slideCirlce2.style.width = "10px";
            slideCirlce3.style.width = "10px";
            slideCirlce4.style.width = "10px";
            slideCirlce5.style.width = "50px";
    
            slideCirlce1.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce2.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce3.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce4.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce5.style.backgroundColor = "#E2CA99";
                
        }

    }

    

    //현재 slide num
    //click -1 , ( 0 < n < 5) 슬라이드 넘버가 0이 되면 더이상 작동 x

    
}

function slideRight() {
     
    if ( currentSlideNum < 5 ) {
        currentSlideNum = currentSlideNum + 1;
        slideImg.src = "img/gameContents-ko-0"+currentSlideNum+".jpg";

        circleNum = currentSlideNum;

        if ( circleNum == 1 ) {

            

            slideCirlce1.style.width = "50px";
            slideCirlce2.style.width = "10px";
            slideCirlce3.style.width = "10px";
            slideCirlce4.style.width = "10px";
            slideCirlce5.style.width = "10px";
    
            slideCirlce1.style.backgroundColor = "#E2CA99;";
            slideCirlce2.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce3.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce4.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce5.style.backgroundColor = "rgb(197, 151, 113)";

        } else if ( circleNum == 2 ) {
        
            slideCirlce1.style.width = "10px";
            slideCirlce2.style.width = "50px";
            slideCirlce3.style.width = "10px";
            slideCirlce4.style.width = "10px";
            slideCirlce5.style.width = "10px";
    
            slideCirlce1.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce2.style.backgroundColor = "#E2CA99";
            slideCirlce3.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce4.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce5.style.backgroundColor = "rgb(197, 151, 113)";

        } else if ( circleNum == 3 ) {
        
            slideCirlce1.style.width = "10px";
            slideCirlce2.style.width = "10px";
            slideCirlce3.style.width = "50px";
            slideCirlce4.style.width = "10px";
            slideCirlce5.style.width = "10px";
    
            slideCirlce1.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce2.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce3.style.backgroundColor = "#E2CA99";
            slideCirlce4.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce5.style.backgroundColor = "rgb(197, 151, 113)";
        
        } else if ( circleNum == 4 ) {
        
            slideCirlce1.style.width = "10px";
            slideCirlce2.style.width = "10px";
            slideCirlce3.style.width = "10px";
            slideCirlce4.style.width = "50px";
            slideCirlce5.style.width = "10px";
    
            slideCirlce1.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce2.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce3.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce4.style.backgroundColor = "#E2CA99";
            slideCirlce5.style.backgroundColor = "rgb(197, 151, 113)";
        
        } else if ( circleNum == 5 ) {
                
            slideCirlce1.style.width = "10px";
            slideCirlce2.style.width = "10px";
            slideCirlce3.style.width = "10px";
            slideCirlce4.style.width = "10px";
            slideCirlce5.style.width = "50px";
    
            slideCirlce1.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce2.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce3.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce4.style.backgroundColor = "rgb(197, 151, 113)";
            slideCirlce5.style.backgroundColor = "#E2CA99";
                
        }

    }
}





// category change btn

var btn1 = document.getElementsByClassName("btn-hero")[0];
var btn2 = document.getElementsByClassName("btn-brave")[0];
var btn3 = document.getElementsByClassName("btn-legend")[0];
var btn4 = document.getElementsByClassName("btn-villain")[0];

var category1 = document.getElementsByClassName("hero-cookie")[0];
var category2 = document.getElementsByClassName("brave-cookie")[0];
var category3 = document.getElementsByClassName("legend-cookie")[0];
var category4 = document.getElementsByClassName("villain-cookie")[0];

var characterImg = document.getElementsByClassName("character-card__img")[0];
var characterName = document.getElementsByClassName("character-cookiname")[0];
var voiceActorName = document.getElementsByClassName("voiceactor-name")[0];
var characterInfo = document.getElementsByClassName("character-cookieinfo")[0];

var hero01 = document.getElementById('hero-01');
var hero02 = document.getElementById('hero-02');
var hero03 = document.getElementById('hero-03');
var hero04 = document.getElementById('hero-04');
var hero05 = document.getElementById('hero-05');

var brave01 = document.getElementById('brave-01');
var brave02 = document.getElementById('brave-02');
var brave03 = document.getElementById('brave-03');
var brave04 = document.getElementById('brave-04');
var brave05 = document.getElementById('brave-05');

var legend01 = document.getElementById('legend-01');
var legend02 = document.getElementById('legend-02');
var legend03 = document.getElementById('legend-03');
var legend04 = document.getElementById('legend-04');
var legend05 = document.getElementById('legend-05');

var villain01 = document.getElementById('villain-01');
var villain02 = document.getElementById('villain-02');
var villain03 = document.getElementById('villain-03');
var villain04 = document.getElementById('villain-04');
var villain05 = document.getElementById('villain-05');


function characterCate(i) { 

    if ( i == 0 ) {

        btn1.style.display = "flex";
        btn2.style.display = "none";
        btn3.style.display = "none";
        btn4.style.display = "none";

        category1.style.display = "block";
        category2.style.display = "none";
        category3.style.display = "none";
        category4.style.display = "none";

    } else if ( i == 1 ) {

        btn1.style.display = "none";
        btn2.style.display = "flex";
        btn3.style.display = "none";
        btn4.style.display = "none";

        category1.style.display = "none";
        category2.style.display = "block";
        category3.style.display = "none";
        category4.style.display = "none";

    } else if ( i == 2 ) {

        btn1.style.display = "none";
        btn2.style.display = "none";
        btn3.style.display = "flex";
        btn4.style.display = "none";

        category1.style.display = "none";
        category2.style.display = "none";
        category3.style.display = "block";
        category4.style.display = "none";


    } else {

        btn1.style.display = "none";
        btn2.style.display = "none";
        btn3.style.display = "none";
        btn4.style.display = "flex";

        category1.style.display = "none";
        category2.style.display = "none";
        category3.style.display = "none";
        category4.style.display = "block";

    }

}

//characters btn-icon

function characterChange1(i) {
    // 1번 버튼 클릭 시 1번 콘텐츠 보임
    // 2~5번 콘텐츠는 사라짐

    if ( i == 0 ) {

        hero01.style.display = "flex";
        hero02.style.display = "none";
        hero03.style.display = "none";
        hero04.style.display = "none";
        hero05.style.display = "none";

    } else if ( i == 1 ) {
        hero01.style.display = "none";
        hero02.style.display = "flex";
        hero03.style.display = "none";
        hero04.style.display = "none";
        hero05.style.display = "none";

    } else if ( i == 2 ) {
        hero01.style.display = "none";
        hero02.style.display = "none";
        hero03.style.display = "flex";
        hero04.style.display = "none";
        hero05.style.display = "none";

    } else if ( i == 3 ) {
        hero01.style.display = "none";
        hero02.style.display = "none";
        hero03.style.display = "none";
        hero04.style.display = "flex";
        hero05.style.display = "none";

    } else {
        hero01.style.display = "none";
        hero02.style.display = "none";
        hero03.style.display = "none";
        hero04.style.display = "none";
        hero05.style.display = "flex";

    }

}

function characterChange2(i) {
    // 1번 버튼 클릭 시 1번 콘텐츠 보임
    // 2~5번 콘텐츠는 사라짐

    if ( i == 0 ) {

        brave01.style.display = "flex";
        brave02.style.display = "none";
        brave03.style.display = "none";
        brave04.style.display = "none";
        brave05.style.display = "none";

    } else if ( i == 1 ) {
        brave01.style.display = "none";
        brave02.style.display = "flex";
        brave03.style.display = "none";
        brave04.style.display = "none";
        brave05.style.display = "none";

    } else if ( i == 2 ) {
        brave01.style.display = "none";
        brave02.style.display = "none";
        brave03.style.display = "flex";
        brave04.style.display = "none";
        brave05.style.display = "none";

    } else if ( i == 3 ) {
        brave01.style.display = "none";
        brave02.style.display = "none";
        brave03.style.display = "none";
        brave04.style.display = "flex";
        brave05.style.display = "none";

    } else {
        brave01.style.display = "none";
        brave02.style.display = "none";
        brave03.style.display = "none";
        brave04.style.display = "none";
        brave05.style.display = "flex";

    }

}

function characterChange3(i) {

    if ( i == 0 ) {
        legend01.style.display = "flex";
        legend02.style.display = "none";
        legend03.style.display = "none";
        legend04.style.display = "none";
        legend05.style.display = "none";

    } else if ( i == 1 ) {
        legend01.style.display = "none";
        legend02.style.display = "flex";
        legend03.style.display = "none";
        legend04.style.display = "none";
        legend05.style.display = "none";
        
    } else if ( i == 2 ) {
        legend01.style.display = "none";
        legend02.style.display = "none";
        legend03.style.display = "flex";
        legend04.style.display = "none";
        legend05.style.display = "none";
        
    } else if ( i == 3 ) {
        legend01.style.display = "none";
        legend02.style.display = "none";
        legend03.style.display = "none";
        legend04.style.display = "flex";
        legend05.style.display = "none";
        
    } else {
        legend01.style.display = "none";
        legend02.style.display = "none";
        legend03.style.display = "none";
        legend04.style.display = "none";
        legend05.style.display = "flex";
        
    }
}

function characterChange4(i) {

    if ( i == 0 ) {
        villain01.style.display = "flex";
        villain02.style.display = "none";
        villain03.style.display = "none";
        villain04.style.display = "none";
        villain05.style.display = "none";

    } else if ( i == 1 ) {
        villain01.style.display = "none";
        villain02.style.display = "flex";
        villain03.style.display = "none";
        villain04.style.display = "none";
        villain05.style.display = "none";
        
    } else if ( i == 2 ) {
        villain01.style.display = "none";
        villain02.style.display = "none";
        villain03.style.display = "flex";
        villain04.style.display = "none";
        villain05.style.display = "none";
        
    } else if ( i == 3 ) {
        villain01.style.display = "none";
        villain02.style.display = "none";
        villain03.style.display = "none";
        villain04.style.display = "flex";
        villain05.style.display = "none";
        
    } else {
        villain01.style.display = "none";
        villain02.style.display = "none";
        villain03.style.display = "none";
        villain04.style.display = "none";
        villain05.style.display = "flex";
        
    }
}

// media modal popup

var modal = document.getElementsByClassName("media-modal")[0];
var modalVideo = document.getElementsByClassName("meida-modal__video")[0];
var mediaList = document.getElementsByClassName("media-list___li");


function modalOpen(i) {

    if ( i == 0 ) {
            modal.style.display = "block";
            modalVideo.src = "https://www.youtube.com/embed/tFLz40XFwkQ";
            
        } else if ( i == 1) {
            modal.style.display = "block";
            modalVideo.src = "https://www.youtube.com/embed/KPztqYEvS20";
            
        } else if ( i == 2) {
            modal.style.display = "block";
            modalVideo.src = "https://www.youtube.com/embed/18k8Q7eWPL4";
            
        } else if ( i == 3) {
            modal.style.display = "block";
            modalVideo.src = "https://www.youtube.com/embed/c8zQXKk7DeI";
            
        } else if ( i == 4) {
            modal.style.display = "block";
            modalVideo.src = "https://www.youtube.com/embed/the4S9AGHGE";
            
        } else {
            modal.style.display = "block";
            modalVideo.src = "https://www.youtube.com/embed/ENEGexiBsrA";
        }

}


function modalClose() {
    // 버튼 클릭시 모달 display block
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// mobile menu

var gnbMobile = document.getElementsByClassName('gnb-mobile__wrap')[0];

var btnMenuOpen = document.getElementsByClassName('gnb-mobile__open')[0];
var btnMenuClose = document.getElementsByClassName('gnb-mobile__close')[0];

var body = document.getElementById('body');

function mobileMenuOpen() {
    gnbMobile.style.display = "block";
    btnMenuOpen.style.display = "none";
    btnMenuClose.style.display = "block";
    body.style.height = "100%";
    body.style.overflow = "hidden";

}

function mobileMenuClose() {
    gnbMobile.style.display = "none";
    btnMenuOpen.style.display = "block";
    btnMenuClose.style.display =  "none";
    body.style.height = "auto";
    body.style.overflow = "visible";
}


