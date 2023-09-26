// 148 요소 생성하기
createAttribute(); //속성 생성
createComment(); // 주석 생성

/**
 * 151 replaceWith와 replaceChild 차이
 * eplaceChild는 부모 노드에서 호출되어, 특정 자식 노드를 다른 요소로 교체합니다.
 * 반면에 replaceWith는 교체될 요소 자신에서 직접 호출되어, 그 요소를 다른 요소로 교체
 *
 * 원래의 요소에 대한 참조가 필요하다면 replaceChild를 사용하고, 
 * 그렇지 않다면 코드가 좀더 간결해지는 replaceWith를 사용할 수 있다.
 * 
 * <div id="parent">
  <div id="child">Hello</div>
 */
let parentDiv = document.getElementById("parent");
let childDiv = document.getElementById("child");

let newElement = document.createElement("p");
newElement.textContent = "World";

let replacedNode = parentDiv.replaceChild(newElement, childDiv);
console.log(replacedNode); // <div id="child">Hello</div>

/**
 *  replaceChild 메서드는 원래의 자식 노드(<div id="child">Hello</div>)를 반환합니다.
 * 따라서 replacedNode 변수는 이제 원래의 <div id="child">Hello</div> 요소를 참조
 */
