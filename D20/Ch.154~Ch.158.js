//154
요소.outHTML; // 자신을 포함한 HTML 텍스트와 이미지의 태그를 변경하고 싶을때

//155
요소.setAttribute(속성, 값); // 요소 속성 설정
요소.getAttibute(속성); // 요소 속성 가져오기
요소.hasAttribute(속성); //요소 속성 존재여부 확인

//<a id="anchor", href="example.com">링크</a>
//<img id="image" src = "foo.png">
const anchorElement = document.querySelector("#anchor");
console.log(anchorElement.getAttribute("href")); // example.com

const image = document.querySelector("#image");
image.setAttribute("src", "bar.png"); // img요소 src 값을 bar.png

//156
