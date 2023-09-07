// 13. 함수의 파라미터 초기값 설정하기
/**
 * 
 * @param {Number} price 가격
 * @param {Number} tax 세율
 * @returns 결과
 */
function cal(price, tax = 0.08) {
  const result = price + price * tax;
  return result;
}

// 14. 다수의 파라미터를 가지는 함수를 정의하기 (파라미터 많을 때 사용)
function CalSum(...prices) {
  let res = 0;
  // const 요소 of 배열이름
  for (const value of prices) {
    res += value;
  }
  return res;
}
const res1 = CalSum(10, 20);
console.log(res1);

//if (조건문) => 불리언 값

if(true){
  console.log('hello')
}

const randomNum = Math.random() * 10;
if (randomNum >= 5) {
  console.log("randomNum는 5 이상");
} else {
  console.log("randomNum는 5 미만");
}

// 조건문 (switch)
// 다수의 데이터 처리하고 싶을때

const myFruit = "딸기";
switch (myFruit) {
  case "사과":
    console.log("사과!");
    break;
  case "귤":
    console.log("귤!");
    break;
  default:
    console.log("다른거임!");
    break;
}

//switch는 ===비교를 한다
const myValue = "100";

switch (myValue) {
  case 100:
    console.log("숫자타입임!");
    break;
  default:
    console.log("숫자타입 아님!");
    break;
}

// for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//역순
for (let i = 9; i >= 0; i--) {
  console.log(i);
}


//18 반복문 사용하기 while
let myNumber = 0; //초기값
while (myNumber < 10) {
  console.log(myNumber);
  myNumber += 1;
}
//0~9

// 19. 반복 처리 스킵
let myNumber1 = 0; //초기값
while (myNumber1 < 10) {
  console.log(myNumber1);
  myNumber1 += 1;
}
//1~10


for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
console.log("루프종료");

//continue

function myFunction(flgA) {
  for (let i = 0; i < 10; i++) {
    if (flgA === false) {
      continue;
    }
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
}
const res = myFunction();

// 진위 여부 판별하기

const userName = "정윤";
if (userName) {
  console.log(`안녕하세요. ${userName}님`);
}
// 값 나옴

const address = "";
if (address) {
  alert(`당신은 ${address}에 살고 계시네요`);
}
//값 없음

const flg = "apple".includes("a");
console.log(!flg);
// false
/**
 * !! 두개 쓰면 Boolean 타입으로 변환
 */

// 22. 어림 계산하기
console.log(Math.round(6.24)); //6
console.log(Math.floor(6.24)); //6
console.log(Math.ceil(6.24)); //7
console.log(Math.trunc(6.24)); //9


console.log(Math.round(7.8)); //8
console.log(Math.floor(7.8)); //7
console.log(Math.ceil(7.8)); //8
console.log(Math.trunc(7.8));// 7


console.log(Math.round(-7.49)); // -7
console.log(Math.round(-7.5)); //-7
console.log(Math.round(-7.51)); //-8

console.log(Math.floor(-8.6)); // -9
console.log(Math.ceil(-8.6)); // -8
console.log(Math.trunc(-8.6)); // -8

// 임의의 수 다루기
console.log(Math.random());

console.log(Math.floor(Math.random())); //0

console.log(Math.floor(Math.random() * 100)); //100 안에서 랜덤 수

console.log(10 + Math.floor(Math.random() * 10)); //10이상 20미만


// 24. 함수 사용하기
console.log(Math.abs(-10));
console.log(Math.pow(2, 10));
console.log(Math.sign(2));
console.log(Math.sign(-2));
console.log(Math.sqrt(16));
console.log((Math.log(Math.E))

// 특수문자 length 계산하기

let 스마일1 = '😆';
console.log(스마일1.length); //2 
console.log(Array.from(스마일).length); //1

let 스마일 = '😆';
console.log(스마일.length);
console.log(Array.from(스마일).length);

// 28 문자열 공백 처리
let ex1 = '    안녕       ';
console.log(ex1.trim());

let ex2 = '정윤\n 정신혼미함';
console.log(ex2);
console.log(ex2.trim());

let ex3 = '정윤 정신혼미함\n';
console.log(ex3);
console.log(ex3.trim());

let ex4 = '정윤. 리액트.    ';
console.log(ex4);
console.log(ex4.trim());

// 29 문자열 검색하기
const str = 'JavaScript를 배우자';

const a1 = str.indexOf('f');
console.log(a1); //-1

const a2 = str.lastIndexOf('a');
console.log(a2); //3

const c1 = str.indexOf('JavaScript', 4);
console.log(c1); // -1

//정규표현의 검색 > 일치하는 문자의 인덱스 값을 반환한다.

const str1 = 'JavaScript를 배우자';
const s1 = str1.search(/JavaScript/);
console.log(s1); //0

const s2 = str1.search(/HTML/);
console.log(s2); //1
