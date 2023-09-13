// 조건을 만족하는 배열 요소
const newArr = [10, 20, 30, 40].filter((value) => value >= 30);
console.log(newArr);

const newArr1 = [10, 20, 30, 40].filter((value) => {
  return value >= 30;
});

const newArr2 = [10, 20, 30, 40].filter(function (value) {
  return value >= 30;
});

// 63 배열 요소 하나로 정리하기 (redude)
//배열의 3개의 값을 넣고 합계 구하기
const arr1 = [100, 500, 900];
const sum = arr1.reduce((pre, current) => {
  return pre + current;
});
console.log(sum); // 1500

//for 문으로 사용했을때

const arr2 = [100, 500, 900];
let sum2 = 0;

for (const element of arr2) {
  sum2 += element;
}

console.log(sum2); // 1500

//2차 배열을 1차 배열 만들기
const arr3 = [
  ["딸기", "바나나", "멜론"],
  ["귤", "포도"],
];
const flattening = arr3.reduce((pre, cur) => {
  return pre.concat(cur);
});

console.log(flattening);

const arr7 = ["사자", "여우", "호랑이"];
const member1 = arr7.reduce((pre, cur) => {
  return `${pre}와 ${cur}`;
});
console.log(member1);

const member2 = arr7.reduceRight((pre, cur) => {
  return `${pre}와 ${cur}`;
});
console.log(member2);

//64 유사 배열 객체를 배열로 변환
// <div class ="on"></div> 요소를 찾기 위해 filter()를 사용하면
// NodeList에서는 filter()를 사용할 수 없으므로 에러가 발생함
// allDivElementList.filter((element) => element.classList.contains("on"));

// const allDivElementList = document.querySelectorAll("div"); // NodelistOf 유사객체
// const elementsArray = [...allDivElementList];
// elementsArray.filter((element) => element.classList.contains("on"));
//배열용 메소드인 filter() 사용 가능

const myStr = "안녕하세요";
console.log([...myStr]); //["안","녕","하","세","요"]

//유사 배열은 Array.from[]
const hello = "안녕하세요";
console.log(Array.from(hello)); //['안', '녕', '하', '세', '요']

const newHello = Array.from(hello, (character) => `${character}!`);
console.log(newHello); // ['안!', '녕!', '하!', '세!', '요!']

const newHello1 = [...hello].map((character) => `${character}!`);
console.log(newHello1); //['안!', '녕!', '하!', '세!', '요!']

//65 요소의 개별 변수에 분할 대입하기
//[변수1,변수2,변수3]=[값1,값2,값3] -> 각 변수에 값을 대입 (분할대입)

let a;
let b;
let c;
[a, b, c] = [1, 2, 3];
console.log(a, b, c); //1 2 3

const arrarr = ["곰", "여우"];
[arrarr[0], arrarr[1]] = [arrarr[1], arrarr[0]];
console.log(arrarr); // ['여우', '곰']

// 66.배열 섞기 [셔플]
const game = [1, 2, 3, 4, 5];
const gameLength = game.length;
for (let i = gameLength - 1; i > 0; i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [game[i], game[randomIndex]] = [game[randomIndex], game[i]];
}
console.log(game); //[4, 2, 1, 5, 3]

// const array123 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const shuf = shuffleArray(array123);
// console.log(shuf);

const array2 = ["사자", "여우", "곰", "호랑이", "기린"];
const shuffled2 = shuffleArray(array2);
console.log(shuffled2);

function shuffleArray(sourceArr) {
  //배열 복제
  const array = sourceArr.concat();
  //피셔 예이츠 알고리즘 사용
  const arrayLength = array.length;
  for (let i = arrayLength - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

// 67 다양한 데이터 타입을 가진 객체 사용하기
const person = {
  id: 1,
  name: "yoon",
  age: 26,
};

console.log(person);

// 68 객체 선언, 수정, 확인
/**
 * {} 빈객체
 *
 */

const obj = {};

console.log(person.id);
console.log(person["name"]);

//값을 변경
person.id = 2;
person.name = "jeong";
console.log(person.id);
console.log(person.name);

console.log(obj.foo); //객체 안에 없는 값을 출력하면 undefined

const response = {
  result: true,
  list: [
    { id: 1, name: "toto", age: 13 },
    { id: 2, name: "lolo", age: "34" },
  ],
};
//데이터 확인
console.log(response.list[0].name); //toto

response.list[1].age = 78;
console.log(response.list[1].age);

//함수 타입 지정 가능
const myClass = {
  method1: function () {
    console.log("1번");
  },
  method2: function () {
    console.log("2번");
  },
};
myClass.method2();
