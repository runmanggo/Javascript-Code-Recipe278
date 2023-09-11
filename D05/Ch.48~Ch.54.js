//48. 배열 요소 다루기

const arr = ["1", "2", "3"]; // 배열 루프 처리 중 요소의 인덱스가 불필요할때 for...of

for (const value of arr) {
  console.log(arr);
}

// 49. 배열 루프 처리 중 요소의 인덱스가 필요할때

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 50. 배열 요소 추가하기

arr.unshift("0"); // 0 을 배열 첫 위치에 추가
arr.push("4"); // 4를 배열 마지막에 추가

//51. 배열 요소 삭제

arr.shift(); //첫 위치의 요소 삭제
arr.pop(); //마지막 위치 요소 삭제
// pop , shift 삭제 요소가 없으면 반환값은 undefined

// 52. 배열 요소 부분 변환
// 배열.splice(위치, 추출개수, 요소 1, 요소2,...)
arr.splice(1, 0, "바나나"); //인덱스 1위치에 0개 요소를 삭제하고 "바나나" 추가

//53. 배열 결합하기
const arr2 = ["참치마요", "아프지마요", "하지마요"];
const arr3 = ["김치", "김치전", "김치볶음밥"];

const arrPlus = arr2.concat(arr3); // ["참치마요", "아프지마요", "하지마요","김치", "김치전", "김치볶음밥"]
const arrSpread = [...arr2, ...arr3];

//54. 배열 오소 결합하여 문자열 만들기
const numArr = [1, 2, 3];
numArr.join(); // "1,2,3"

const strArr = ["a", "b", "c"];
strArr.join(""); //"abc"
