// 41 소수점 자리수 지정하기
(0.33333)
  .toFixed(2)(
    // 0.33(문자열)
    123.5678
  )
  .toFixed(1)(
    // 123.6 (근사치로 변환)
    2.4
  )
  .toFixed(4)(
    //2.4000(소수점이 네 자리가 되도록 0이 채워짐)

    0.3333
  )
  .toPrecision(2)(
    // 0.33 (정밀도2/ 문자열)
    123.456
  )
  .toPrecision(3); //123 (정밀도3)

/**
 * toFixed 같이 자릿수가 늘어나면 근사치 변환, 줄어들면 0으로 채워넣는다.
 */

//42 문자열 길이 맞추기

"5".padStart(2, "2"); //25
"ff".padEnd(6, "0"); // ff000000
"123".padStart(3, "0"); // 123 -> 지정한 길이가 실제 문자열 길이보다 짧음 문자열 변환이 안됨
"ff".padStart(6); //'      ff'.앞부분 4개 공백이 삽입

//43 문자열 URI 이스케이프 처리하기
//URI 한글이 포함되면 그대로 사용할 수 없어 인코딩 필요
/**
 * encodeURIcomponent() ->처리할 수 있는 문자 많음
 */

/**
 * 44. 문자열 URI 디코드 하기
 * 인코딩 된 문자를 롤백 해줌 deodeURI / decodeURIComponent
 */

/**
 * 45. 배열 정의하기
 * [] 안에 타입 상관없이 사용가능
 */

const arr7 = ["cat", "dog"];
console.log(arr7[0]); // cat

//New array를 사용한 배열의 초기화
const arr8 = new Array("dog", "cat");
console.log(arr8[0]); // dog

//인수가 하나의 숫자인 경우, 배열의 데이터 수가 바로 결정 된다
const arr9 = new Array(10);
arr9[0] = "곰";

/**
 * 46. 배열 길이 확인
 * 배열 데이터 요소의 수를 확인할때
 * 특정 JSON 데이터 요소 수를 확인하고 싶을때
 * 배열.length
 */
const arr1 = [
  { id: 1, name: "nn" },
  { id: 2, name: "mm" },
];
console.log(arr1.length); //2

/**
 * Ch.47 배열 요소 다루기1
 * 배열 요소에 데이터 처리
 * 배열.forEach(콜백함수) => 배열의 요소 데이터 콜백 함수로 실행
 * 반환값 그대로 루프 처리
 * 콜백함수 : ([요소],[인덱스],[기존배열])=> {} 안에 요소,인덱스,기존배열 다 생략 가능
 *
 */

const arr2 = ["딸기", "감", "귤"];
arr2.forEach((value, index) => {
  //배열 요소와 인덱스 순서대로 출력
  console.log(index, value); //0 "딸기", 1 "감" 등등
});

[1, 2, 3, 4, 5, 6, 7, 8]
  .filter((value) => value % 2 === 0)
  //배열 짝수 값을 처리 , 얕은 복사
  .forEach((value) => {
    console.log(value);
  });
