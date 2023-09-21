// 118. 클릭 이벤트
버튼.addEventlistner("click", () => {});

//119 마우스 조작 이벤트 사용

//121 마우스 오버 이벤트 사용 (이벤트 버블링)
/**
 * mouseover / mouseout 이벤트는 포인팅 디바이스(마우스, 터치패드 등)가 요소 위에 있거나
 * 요소를 벗어날 때 발생하는 이벤트로 mouseenter,mouseleave와 다르게 이벤트 버블링이 일어난다.
 *
 * 이벤트 버블링 ? 자식요소에서 발생하는 이벤트 부모 요소까지 전달되는것
 * mouseover를 부모 자식 요소 둘다 설정하면, 자식 요소에서 발생하는 이벤가 부모 요소에서도 발생하여
 * 부모 요소의 이벤트 리스너도 함께 실행
 */

//123 스크롤 이벤트 처리하기
window.addEventListener("scroll", () => {
  console.log("스크롤 작업", window.scrollX, window.scrollY);
});
