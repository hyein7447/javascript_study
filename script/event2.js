// 문자열 변환 메서드
// let price = 1000000
// 계산을 모두 마친 후 마지막 출력 경우에만 toLocalString() 사용한다.
// console.log(price.toLocaleString('ko-kr'))
// HTMLNode.value = price.toLocalString('ko-kr')

const input = document.querySelector('#bank_input');
const total = document.querySelector('#bank_total');
const btn = document.querySelector('#bank_btn');
console.log(input, total, btn);
let original = 10000
bank_total.value = original.toLocaleString('ko-kr')

bank_btn.addEventListener('click',function(){
    console.log(Number(input.value)+100) // 더한 값 확인
    console.log(original+Number(input.value)+100) // 총잔액 더하기 확인
    let total_input = Number(input.value)+100
    original += total_input
    bank_input.value = '' // 입력 갑 초기화
    bank_total.value = original.toLocaleString('ko-kr') 
    // 총잔액이라는 칸에 위에서 만든 total금액을 넣는다 ((toLocal~ 단위로 구분해서 보여준다))
})