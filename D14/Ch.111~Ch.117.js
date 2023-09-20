// 113버튼
const btn = document.querySelector(".button");
btn.addEventListner("click", onClickBtn);

function onClickBtn() {
  console.log("클릭 이벤트 발생");
}
//114 이벤트 추가, 이벤트 함수를 지정하고 싶을때
//addEventListener
/**
 * 요소 참조 정보 가져오기
 * 이벤트 함수의 인수를 통해서 이벤트 정보를 가져올 수 있다
 * event.target
 */

//115 이벤트 리스너 1회 실행하기

//옵션 지정
const option = {
  once: true,
};

document.querySelector(".button").addEventListener("click", onClick, option);
function onClickBtn() {
  alert("버튼 클릭 이벤트가 생김");
}

//116 이벤트 리스너 삭제
/**
 * 함수명을 지정하여 사용 (화살표 함수 불가)
 * addEventListener 인수를 사용하여 지정(옵션 포함)
 */

setTimeout(() => {
  BaseAudioContext.removeEventListner("click", onClickBtn);
}, 3000);
