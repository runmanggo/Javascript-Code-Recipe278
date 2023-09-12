//55. 배열 요소 검색
console.log(["사과", "바나나", "귤"].indexOf("바나나")); //1
console.log([0, 2, 4, 6, 4, 2, 0].indexOf(4)); //2
console.log([0, 2, 4, 6, 4, 2, 0].lastIndexOf(4)); //4

console.log(["사과", "바나나", "귤"].includes("바나나")); //true
console.log([0, 2, 4, 6, 4, 2, 0].includes(3)); //false

//56. 조건을 만족하는 배열 요소 가져오기
//유저 정보가 담긴 배열에서 ID를 기준으로 정보를 가져오고 싶을때

const myArr = ["곰", "사자", "여우", "원숭이"];
const targetUser = myArr.find((element) => element === "사자");

console.log(targetUser); //사자

//57. 역순
const arr2 = [1, 2, 3];
console.log(arr2.reverse());

//58. 배열요소 정렬 방법 지정하기
const arr1 = [3, 2, 1, 4, 5];

arr1.sort((a, b) => {
  if (a < b) {
    return 1;
  }
});
console.log(arr1);

arr1.sort((a, b) => {
  if (a === b) {
    return 0;
  }
});
console.log(arr1);

arr1.sort((a, b) => {
  if (a > b) {
    return -1;
  }
});
console.log(arr1);

//59.객체 포함 정렬하기

//60. 배열 요소 알파벳순 정렬하기
const arr3 = ["포도", "오렌지", "사과"];
console.log(arr3.sort());

const arr4 = ["orange", "grape", "apple"];
console.log(arr4.sort((a, b) => a.localeCompare(b)));

//61.배열 요소 추출하여 새 배열 만들기

const arr5 = [4, 10, 20];
const arr55 = arr5.map((value) => `userid_${value}`);
console.log(arr55);

const arr6 = [3, 8, 13];
const arr66 = arr6.map((value, index) => `userid_${index + 1}_${value}`);
console.log(arr66);

const datadata = [
  { id: 1, name: "yoon" },
  {
    id: 2,
    name: "roro",
  },
  { id: 3, name: "lulu" },
];

const data1 = datadata.map((value) => value.id);
console.log(data1);
