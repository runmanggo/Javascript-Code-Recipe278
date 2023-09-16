//83. 날짜 다루기
//  getNonth() 월 가져오기 , getDate () 일 가져오긴
// getMonth 반환 값0부터 시작한다

const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();

const label = `${month}월 ${day}일`;

//84.시간 다루기
const date1 = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();

const label1 = `${hour}시 ${minutes}분 ${seconds}초`;

//85 요일 다루기
//일요일은 [0], 월요일[1]...
const date2 = new Date();
const day2 = date.getDay();
const dayList = ["일", "월", "화", "수", "목", "금", "토"];
const label2 = dayList[day];

//86. 현재 시간과 날짜 가져오기

//87. 날짜 문자열의 타임스탬프 확인하기
//프로그래밍시 타입슽탬프를 기준으로 하여 시간을 계산하는 경우 해당 메소드의 사용이 가능하다.
//단위는 밀리초(1/1000초)

//88. 날짜 설정하기
// 생성자를 사용하는 방법 > 전달된 정보는 자동적으로 타입에 맞춰지며 문자열로 날짜와 시간을 설정할 수 있다

const date3 = new Date("2020/12/28 20:01:10");
const date4 = new Date("Mon Dec 28 20:01:10");

const date5 = new Date();

date.setFullYear(2021);
date.setMonth(0);
date.setDate(1);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);

//Ch.89 날짜 계산하기

const date6 = new Date("2020/06/01");
date.setMonth(date.getMonth() - 1); //1개월 전
date.setDate(date.getDate() + 60);
