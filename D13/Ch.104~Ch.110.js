//104 해시 처리하기
/**
 * 단일 웹페이지 내에서 여러화면으로 표시하고 싶을때 사용
 * 앵커값이 변경 되면 id요소를 확인하고 페이지를 스크롤을 조절하여 원하는 화면 표시
 */

//읽기 작업
const hash = location.hash;
console.log(hash); //#app
//쓰기 작업
location.hash = "app";

//106. 새 윈도우 창 열기
window.open(URL);
const win = window.open("another.html");
win.focus(); // focus a 태그의 target="_blank"속성과 비슷하다.

//108 스크롤 설정하기
//페이지 원하는 부분에 스크롤을 넣고 싶을때
// "상당 top으로 가기 버튼을 사용하고 싶을때"
window.scrollTo(0, 100); // 지정한 좌표의 값까지 스크롤하기

//109 타이틀 변경
