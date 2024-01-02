const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const txt = document.querySelector('#certified_txt');
const btn = document.querySelector('#certified_btn');
console.log(btn1,btn2,btn3,txt,btn); //변수 정상 등록 확인

btn1.addEventListener('mousedown',function(){
    console.log('hello btn1');
})

// btn2 클릭 시 윈도우 질문답변창으로 1+1을 물어보고 그 결과 팝업으로 출력하기

btn2.addEventListener('click',function(){
    const qa = Number(window.prompt('1+1은?'));
    window.alert(qa+1)
})

// btn3 누를 시 구글 주소로 바로가기

btn3.addEventListener('mousedown',function(){ // <- 익명함수, 콜백함수
    window.location.href = 'https://google.com' 
})
// 인증확인 버튼 클릭 시 input에서 입력한 값이 팝업창으로 출력
// 출력 메세지 예) 0000 입력확인 되었습니다.

btn.addEventListener('click',function(){
    // console.log(tex.value);
    // window.alert(tex.value);\
    let certified_input = txt.value // <- 식을 깔끔하게 쓰기 위한 작업 중간에 변수를 생성
    window.alert(`${certified_input} 입력확인 되었습니다.`)
})

// 총 수입 버튼을 클릭 시 월급+보너스 더한 결과가 팝업으로 출력
// 결과 예시) 총 수입은 0000000원 입니다.
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');
const answer_btn_ = document.querySelector('#answer_btn');
console.log(result1,result2,answer_btn);

answer_btn.addEventListener('click',function(){
    // console.log(result1.value+result2.value) //이벤트 정상 확인 , 더하기 확인
    // console.log(typeof(result1.value+result2.value)) //계산이 안되는 문제 (데이터) 확인 =>
    // string => 문제해결 (Number)

    let answer_input = Number(result1.value)+Number(result2.value)
    //결과를 담는 변수 생성 후 대입
    window.alert(`총 수입은 ${answer_input}원 입니다.`)
})

//자바스크립트 은행
// 입금 전 잔액 : 10000원 (버튼 클릭 전 미리 보이는 값)
// 입금액(자유) 입금 시 마다 +100원이 더해져서 총 잔액에 포함
// 입금 시 잔액 포함은 버튼 클릭 시 실행 구조

const bank_input = document.querySelector('#bank_input');
const bank_total = document.querySelector('#bank_total');
const bank_btn = document.querySelector('#bank_btn');
let total = 10000 //number
console.log(bank_input,bank_total,bank_btn)
bank_total.value = total

bank_btn.addEventListener('click',function(){
    // console.log('.')
    console.log(Number(bank_input.value)+100) // 더하기 결과 확인
    console.log(total+Number(bank_input.value)+100) //총 잔액 더하기 결과 확인
    let input_total = Number(bank_input.value) + 100 // 입금액+이자
    total += input_total; // total = total + input_total;
    bank_total.value = total;
    //입금액 입력값 초기화
    bank_input.value = '';
})