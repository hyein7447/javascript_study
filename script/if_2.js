// 1. 'admin' 아이디만 접근 할 수 있는 페이지
let userId = "admin"
if(userId == 'admin'){
    console.log('관리자님 어서오세요')
}
// 2. 'admin' 아이디 '1234' 비밀번호인 관리자만 접근할 수 있는 페이지
let userPW = '1234'
if(userId=='admin' && userPW=='1234'){
    console.log('관리자님 어서오세요')
}

// 3. 사용자의 아이디를 입력받고 admin이 아니면 "일반 회원입니다." 출력
/* const userIdInput = prompt('아이디를 입력하세요')
if(userIdInput != 'admin'){
    console.log('일반 회원입니다.')
} */

/* const userNum = prompt('숫자를 써주시면 짝수인지 홀수인지 맞춰볼게요!')
if(userNum%2 == 0 ){
    console.log('짝수')
}
if(userNum%2){
    console.log('홀수')
} 
// if 를 여러개 만들면 각각 동작
if(true){} //<-무조건 실행하는 조건문
 */
// if (1) {}
// if(true) {}
// 5. 10살 이상만 탈 수 있는 놀이기구, 나이를 물어보고 10살 이하면 탑승불가!
/* const Q = prompt('현재 나이를 입력하세요')
if(Q <= 10){
    window.alert('탑승불가!!!!!!')
} */

//6. 10살 이상이면서 키가 120 이상인 애만 탈 수 있는 놀이기구
// 나이와 키를 물어보고 조건이 맞으면 '탑승가능 !'

/* const age = prompt('몇살이세요?')
const height = prompt('키가 몇이세요?')
if(age >= 10 && height >= 120){
    window.alert('탑승가능')
} */

const printBtn = document.querySelector('#printBtn')
printBtn.addEventListener('click',()=>{
    let yes = confirm('인쇄할까요?')
    if(yes){
        print ()
    }
})
//최소 구매수량 1, 최대 구매수량 10
// 10개 이상 구매하려고 하면 '최대 구매 수량입니다.'

const numInput = document.querySelector('#num')
const minusBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')
const price = document.querySelector('.price')
let num = 1
let price_input = 1000
let total = 0

numInput.value = num
plusBtn.addEventListener('click',()=>{
    // console.log(num)
    if(num < 10 ){
        num++
        numInput.value = num
        //수량이 증가 될 때 가격 증가
        total = price_input * num
        price.innerHTML = total.toLocaleString('ko-kr')+`원`
    }
    // 수량이 10개 됬을 때 버튼을 또 누르면 실행되는 메세지
    if(num == 10){
        alert('최대 구매수량입니다')
    }
})
minusBtn.addEventListener('click',()=>{
    if(num>1){
        num--
        numInput.value = num
        //수량이 감소 할 때 가격 감소
        total = price_input * num
        price.innerHTML = total.toLocaleString('ko-kr')+`원`
    }
})