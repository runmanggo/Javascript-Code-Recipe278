/**
 * 140 <body><html> 요소 읽어오기
 * document.documentElement (console.dir)
 * document.head
 * document.body
 */

//ch.141 부모/자식/전/후 요소 읽어오기
부모요소.children; //자식 노드
부모노드.firstElementChild; //첫번재 자식 노드
부모노드.lastElementChild; // 마지막 자식 노드
노드.nextElementSibling; // 다음 노드
노드.previousElementSibling; // 이전 노드
자식노드.parentNdoe; // 부모노드

//143 지정 위치 요소 추ㅏㄱ
부모노드.inserBefore(자식노드, 희망위치의노드); // 부모 노드 내 노드 추가
