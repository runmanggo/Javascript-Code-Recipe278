//30. 문자열 검색 (부분 검색)
const str = "Javascript를 배우자";

console.log(str.includes("Javascript")); //true

console.log(str.startsWith("배우자")); //false

console.log(str.endsWith("배우자")); // true

//32. 문자열에서 문자 다루기 (문자열에서 문자 추출하기)
//slice 사용하기
console.log("나의 노트북".slice(3, -1)); //노트
console.log("나의 노트북".slice(-6, -4)); //나의

//substring 사용하기
console.log("나의 노트북".substring(3, -3));
// console.log('나의 노트북'.substring(3, 0));
// console.log('나의 노트북'.substring(0, 3)) 특징 때문에
// "나의 "=> 나의(공백)
console.log("나의 노트북".substring(-4, -1)); // 0 => 공백

//33. 문자열 다루기
console.log("Javascript".substr(4, 6));

//34.지정 문자열 변환
const imageName = "image1.png";
console.log(imageName.replace("1.png", "2.png")); //image2.png

const inputText = "제이\n-펍";
console.log(inputText.replace("\n", ""));

let phoneNumber = "010-1234-4567";
console.log(phoneNumber.replace("-", "")); //0101234-4567
console.log(phoneNumber.replace(/-/g, "")); //01012344567
