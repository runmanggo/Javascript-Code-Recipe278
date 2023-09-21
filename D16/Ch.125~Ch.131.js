//125. 터치 이벤트 처리하기
//126. 터치 이벤트 정보 확인
//127. 키보드 입력 이벤트 처리하기
/**
 * keypress 문자 입력때만 발생, alt /shift / ctrl / enter 입력해도 작동x
 * 이경우에는 keydown, keyup을 사용한다
 */

//129 탭화면 이벤트 처리하기
//130 화면사이즈 이벤트 처리하기
//131 사이즈 벗어난 화면 처리
/**
 * matchMedia 는 인수에 따라 미디어 쿼리의 정보를 반환한다. (객체로 반환)
 * mathchMeia(미디어쿼리).addListener(처리) 미디어 쿼리 일치 시 처리
 *  mathchMeia(미디어쿼리).matches 미디어 쿼리 일치 여부 > 진리값
 *
 */

const meiaQueryList = matchMedia("(orientation:portrait)");
meiaQueryList.addEventListener(() => {
  console.log("디바이스 화면의 방향이 전화되었습니다");
});
