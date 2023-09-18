"use strict";

// 69 객체 복사
const object = {
  result: true,
  members: [
    { id: 1, name: "여우" },
    { id: 2, name: "호랑이" },
    { id: 3, name: "사자" },
  ],
};

const copy = Object.assign({}, object);
const copy2 = { ...object };

console.log(copy);
console.log(copy2);
//얕은 복사, 복사 전 데이터와 복사 후의 데이터가 같은 곳을 참조하는 것
//복사 전의 데이터 수정하면 복사 후의 데이터에도 영향을 미친다

const obj1 = {
  id: 1,
  member: ["사자", "토끼", "거북이"],
};
obj1.member[0] = "yoon";
console.log(obj1.member[0]);

//70. 객체 속성 확인하기
//객체.hasOwnProperty => 데이터 유무 확인 / 진릿값
//키 in 객체 => 데이터의 유무 여부 반환
//Api response의 특정 데이터를 확인하고 싶을때
//지정한 데이터가 객체에 존재하지 않아서 처리 작업을 취소하고 싶을 때

const userData = {
  id: 1,
  name: "사자",
  age: 24,
};

console.log(userData.hasOwnProperty("id")); //true
console.log(userData.hasOwnProperty("address")); //false
console.log("id" in userData); //true

//71 객체 요소 값 확인하기
//APi response

const userData1 = {
  id: 2,
  name: "사자",
  age: 27,
};

console.log(Object.keys(userData1)); // 키들을 배열로
console.log(Object.values(userData)); // 데이터를 배열로
console.log(Object.entries(userData1)); // 객체 각 속성(key,value)의 배열

//72 객체 요소 분할 대입

const userData2 = {
  id: 3,
  name: "토마토",
  age: 20,
};

const { id, name, age } = userData2;

console.log(id); //userData2.id값
console.log(name); // userData2.name값
console.log(age); // userData2.age
//console.log(address); //Uncaught ReferenceError: address is not defined

const { name: myName } = userData2;

console.log(myName); //토마토

// 객체에 이름의 키 데이터를 추출하여 변수에 대이바는 분할대입
// 변수의 정의 순서아 객체 키의 순서는 상관이 없으며, 존재하지 않는 키는 undefinded 반환

//73. 객체 수정 제한하기
// 객체 수정 제한하기
const obj2 = { id: 3, name: "사과" };
obj2.id = 4;
obj2.address = "서울"; // 속성 추가 가능

Object.freeze(obj2);
obj2.id = 5; //에러
obj2.address = "부산"; // 에러
console.log(obj2.address);

const arr = [1, 2, 3];
Object.freeze(arr);
arr.push(4);

const object3 = { id: 10, name: "바바" };
Object.freeze(object3);
console.log(Object.isFrozen(object3));

//객체 수정을 제한하는 다른 방법
//Object.seal () : 속성의 추가와 삭제 제한 변경만 가능
//Object.preventExtnesions : 속성의 추가 제한, 삭제와 변경만 가능

//74. 데이터 타입 이해 원시 타입 객체 타입
//75. 가변성과 불가변성 원시타입 불가변성 , 객체타입 가변성
