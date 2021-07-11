// .search의 정보,요소들을 찾기
// document는 html이라고 봐도 무방 
// ('.search input')대신에 document지우고 searchEl을 대입하여 ('input')만 기재하여 효율적으로 코딩하기 
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// function()핸들러 작성//click을 누르면 function()이 실행된다.
searchEl.addEventListener('click', function () {
  // logic 작성 //javascript를 이용해서 focus
  searchInputEl.focus();
});

//function()-->핸들러 만약 focus가 되면 함수가 실행될거다..
searchInputEl.addEventListener('focus', function( ){
  //focused라는 class를 추가하겠다.. 
  searchEl.classList.add('focused');
  // searchInputEl에 html의 속성을 지정해 줄 때 method
  searchInputEl.setAttribute('placeholder','통합검색');   
 });

// blur event: focus해제
searchInputEl.addEventListener('blur', function( ){
  //class 객체를 더하다 
  searchEl.classList.remove('focused'); //focused 해제
  // searchInputEl에 html의 속성을 지정해 줄 때 method
  searchInputEl.setAttribute('placeholder', '');   
 });

 //자바 스크립트는 요소에 이벤트를 넣으면 클래스를 넣어줬다가 뺐다가 역할만하는 거고
 //클래스에 추가되면 스타일을 추가 작업할 수 있다. 

 const badgeEl = document.querySelector('header .badges');
 const toTopEl = document.querySelector('#to-top');
// 브라우저 창, 윈도우 객체 보고있는 화면 자체
// 외부라이브러리 연결!

 window.addEventListener('scroll', _.throttle(function(){
// 윈도우의 몇 픽셀에 지정되는지 확인 가능
  console.log(window.scrollY);
  if (window.scrollY > 500){
    //배지 숨기기
    // badgeEl.style.display = 'none';
    //gsap의 to요소를 사용
    //gsap.to(요소, 지속시간, 옵션);    
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기!
    gsap.to('#to-top', .2,{
      x: 0
    });
  }else{
    gsap. to(badgeEl, .6,{
      opacity: 1,
      display: 'block'
    });
    //배지 보이기
    // badgeEl.style.display = 'block';
    //버튼 숨기기!
    gsap.to('#to-top', .2,{
      x: 100
    });
  }
}, 300));
// 300은 0.3초를 의미함 윈도 스크롤 0.3초 단위로 부하를 줌
//scroll 할 때마다 무거워질 수 있음..버벅임-> 자바스크립트 library사용
// _.throttle(함수, 시간)      throttle--scroll에 활용을 많이 함
//자바스크립트 애니메이션 라이브러리 도입

// 핸들러
toTopEl.addEventListener('click', function( ) {
  gsap.to(window, .7,{
    // scrollTo gsap 플러그인 효과
    scrollTo: 0
  });
});

//모든 .visual의 .fade-in요소를 찾음
const fadeEls = document.querySelectorAll('.visual .fade-in');
// for반복문과 일치, 자동화!
fadeEls.forEach(function(fadeEl, index){
   //gsap.to(요소, 지속시간, 옵션);  
  gsap.to(fadeEl, 1, {
    delay: (index + 1 )* .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

//gsap.to(요소, 지속시간, 옵션);  
// 생성자 클래스
//  new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay: true,
  loop: true
}); 
//  new Swiper(선택자, 옵션)
new Swiper('.promotion .swiper-container' ,{
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true,//1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 //boolean 데이터
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion// 느낌표: 느낌표 뒤의 값의 반대가 되도록 해주세요 = false가 아니고 true
  if (isHidePromotion) {
    //숨김 처리!
    promotionEl.classList.add('hide');
  } else{
    //보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    { //옵션
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    // 몇 초뒤에 애니메이션이 실행되겠다.
    delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  // javascript library 실행! 생성자 함수
  new ScrollMagic
      .Scene({
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
        triggerHook: .8 //전체 화면 높이중 80%;// 0.8에 요소가 감시되면 trigger됨
      })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
//생성자 함수 사용!
thisYear.textContent = new Date().getFullYear(); //2021












