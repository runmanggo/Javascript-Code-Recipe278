//90 날짜 차이 구하기, 두 날짜의 차이를 구하고 싶을 때
//일수는 결괏값을 "24*60*60*1000" 나누기
const dateA = new Date("2020/06/01");
const dateB = new Date("2020/05/01");

const diffMSec = dateA.getTime() - dateB.getTime();
const diffDate = diffMSec / (24 * 60 * 60 * 1000);

console.log(`날짜의 차이는 ${diffDate}일입니다.`);
// 시간 단위
const date1 = new Date("2020/06/01 10:00:00");
const date2 = new Date("2020/06/01 07:00:00");

const diffMSec1 = date1.getTime() - dateB.getDate();
const diffHour = diffMSec1 / (60 * 60 * 1000);

console.log(`시간의 차이는 ${diffHour}시간입니다.`);

// 분 단위는 위의 로직으로 60*1000 로 나누면 된다
//91 경과 시간 확인하기

// 94 경고 표시하기
//alert 경고창

//95 확인창 표시하기
