/* slider-button을 눌렀을 때 slider-item 위치 변경 */
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

// slider-item
const sliderItmes = document.querySelectorAll(".slider-item")

// 전체 슬라이더 개수
const maxSlide = sliderItmes.length;

// 현재 슬라이더 위치를 알려 주기 위한 변수 작성
let currentSlide = 1;

/* 버튼을 눌렀을 때 left값이 이동하도록 */
// nextButton
nextButton.addEventListener("click", function(e){
    // 현재 슬라이더가 전체 개수보다 작을 때 실행
    if(currentSlide<maxSlide){
        currentSlide++; // 2일 때: -100%, 3일 때: -200%, 4일 때: -300% → 화면의 넓이를 곱해서 이동
    // sliderItems를 통해서 모든 left값을 이동시켜야 한다
    for(let i=0; i<sliderItmes.length; i++){
        sliderItmes[i].style.left = `${100+(-100)*currentSlide}%`
        }
    }
})

// prevButton
prevButton.addEventListener("click", function(e){
    // 현재 슬라이더가 1보다 클 때 실행
    if(currentSlide>1){
        currentSlide--; // 2일 때: -100%, 3일 때: -200%, 4일 때: -300% → 화면의 넓이를 곱해서 이동
    // sliderItems를 통해서 모든 left값을 이동시켜야 한다
    for(let i=0; i<sliderItmes.length; i++){
        sliderItmes[i].style.left = `${100+(-100)*currentSlide}%`
        }
    }
})