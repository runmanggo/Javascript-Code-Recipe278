//75. 가변성과 불가변성 이해하기
const myArr = [1, 2, 3];
myArr[0] = 100;

console.log(myArr);

let num = 1;
num = 2;
// 1과2는 다른 데이터

//76.데이터 타입 확인하기
//typeof 데이터 > 데이터 타입 확인
console.log(typeof null); //object
console.log(typeof undefined); //undefined

//77 객체 인스턴스 확인하기
// const today = new Date();

// console.log(today instanceof Date); //true
// console.log(today instanceof Array); // false

function showCurrentDate(argument) {
  if (argument instanceof Date) {
    console.log(`현재는 ${argument.toLocaleDateString()}입니다`);
  } else {
    console.log("적절한 데이터 타입이 아닙니다.");
  }
}
const today = new Date();
const myArr1 = [1, 2, 3];

showCurrentDate(today); //현재는 2023. 9. 15.입니다
showCurrentDate(myArr1); //적절한 데이터 타입이 아닙니다.

//78. 값 전달과 참조 전달 이해하기
let a = 100; //변수 a에 100을 대입한다
let b = a; // 변수 b에 변수 a를 대입 한다.
//변수 a에 대입한 값 100을 복사하여 변수 b에 전달한다.(값에 의한 전달)
a = 500; // 변수 a에 500을 대입한다.
console.log(b); //100

let c = [1, 2, 3]; //c 변수에 배열을 대입
let d = c; //d 변수에 변수 c에 대입, 변수c에 저장된 배열의 참조 값이 변수 d에 전달된다
c[0] = 100; // 변수 c에 저장된 배열의 첫 번째의 요소가 100을 참조한다.
console.log(d); //[100, 2, 3]

function myFuc(x) {
  x = x + 2;
}
let num10 = 10;

//함수에 변수값 전달
//복사된 데이터 10인걸 전달
myFuc(num10);

console.log(num10); // 결과 10

//함수내 처리 결과는 변수a에 영향을 주지 않는다.

//전달 받은 배열의 첫번째 요소 100을 대입하는 함수
function myFuc1(x) {
  x[0] = 100;
}
let arr2 = [1, 2, 3];
myFuc1(arr2);

console.log(arr2); //[100, 2, 3]

//79 데이터 타입 변환
/**
 * 암시형 변환 => 데이터 타입이 자동으로 변환
 * 변수 동적 타입 변환
 */

let num2 = 2; //숫자타입
num2 = "사자"; //num2 문자열 타입으로 변환

//80. 정의되지 않은 데이터 이해하기
/**
 * undefined 데이터가 정해지지 않은 상태 > 개발자가 정하는 것이 아닌 브라우저에서 정의
 * 1. 변수에 데이터를 대입 하지 않았을때,
 * 2.객체의 속성의 값을 대입하지 않는다
 * 3.파라미터에 값을 전달하지 않았을때
 */

//81. 빈데이터 이해하기
function searchUser(targetID) {
  const userList = [
    { id: 1, name: "사자" },
    { id: 2, name: "토마토" },
    { id: 3, name: "사과" },
  ];
  //해당 유저 검색
  const targetUser = userList.find((user) => user.id === targetID);

  if (targetUser === undefined) {
    return null;
  }
  return targetUser.name;
}
console.log(searchUser(1)); //사자
console.log(searchUser(4)); //null
