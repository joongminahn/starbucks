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

 const thisYear = document.querySelector('.this-year');
//생성자 함수 사용!
thisYear.textContent = new Date().getFullYear(); //2021


