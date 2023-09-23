//135 자바스크립트 요소 다루기
/**
 * 요소 노드, 속성 노드, 텍스트 노드
 * element 객체는 node객체를 계승한다. 계승은 부모객체의 성질을 그대로 받는다
 */

//ch.137 id의 각 요소 값 읽어 오기
/**
 * document.getElementByID 요소
 */

//138. 셀렉터 조건 만족하는 모든 요소 읽어오기
/**
 * document.querySelectorAll(셀렉터명)
 * 반환값은 배열로 정리하는 객체이다
 */
const boxList = document.querySelectorAll(".box");
boxList.forEach((targetBox) => {
  console.log(targetBox);
});

/**
 * 139 클래스명으로 요소 읽기
 * document.getElementByClassName 클래스명 일치 요소 모두 가져오기 > Html 요소를 모두 가져오기,
 * querySelector 달리 인수는 클래스명만 전달할 수 있다
 * 각요소 처리는 for문 사용하고 forEach 사용할 수 없다.
 */

const boxes = document.getElementsByClassName("box");
const boxLength = boxes.length;
for (let index = 0; index < boxLength; index++) {
  console.log(boxes[index]);
}
