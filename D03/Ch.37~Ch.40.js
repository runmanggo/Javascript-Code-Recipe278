

/x/ //문자X
/xyz/ // 문자열 xyz
/[xyz]/ // x,y,z중 하나의 문자
/[a-z]/ //a~z중 하나의 문자.

if (/iPhone|iPod|iPad/.test(navigator.userAgent)) {
    console.log('접속한 브라우저는 iOS입니다');
  } else {
    console.log('아님!');
  }
  
  if (
    navigator.userAgent.includes('iPhone') ||
    navigator.userAgent.includes('iPod') ||
    navigator.userAgent.includes('iPad')
  ) {
    console.log('접속한 브라우저는 iOS입니다');
  }
  

  //40
  console.log(/J/.test('JavaScript')); // 'J'가 JavaScript에 포함되어 있는지 true
console.log(/^iP/.test('레시피')); // 'iphone'의 시작 문자가 'ip'인지 여부 false
console.log(/\d/.test('레시피')); //'레시피' 문자열 내 숫자 포함 여부 false
console.log(/Java.*/.test('JavaScript')); // "Jav" 다음의 문자 'a'가 0회 이상 존재하는지 여부
console.log(/코.*피/).test('코드 레시피'); // "코피" 혹은 '코' 와 '피' 사이의 문자 존재 여부. true
console.log(/\d+-\d+-\d+/.test('010-1234-5678')); // '숫자-숫자-숫자'의 형식 여부 true