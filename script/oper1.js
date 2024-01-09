// 이항연산자
let x = 5 ;
let y = x+10;
console.log(`x=${x}, y=${y}`)

// 목표) 이항연산 피연산자를 2개 적고 "=" 버튼을 클릭하면 결과값 출력하기
// 1. 변수 선언 (val1, val2, calcBtn, result)
const val1 = document.querySelector('#val1')
const val2 = document.querySelector('#val2')
const calcBtn = document.querySelector('#calcBtn')
const result = document.querySelector('.result')
let total = 0
console.log(val1, val2, calcBtn, result)
// 2. calcBtn 클릭 이벤트
calcBtn.addEventListener('click', function(){
    // 2-1. val1, val2 값 가져오기
    // 2-2. 위 값 더하기
    total = Number(val1.value)+Number(val2.value)
    // 2-3. result 잡기
    // 2-4. 위 대상 결과 출력
    result.innerHTML = total.toLocaleString('ko-kr')
})
console.log('-----------------------------')
console.log(6/2) //3
console.log(6%2) //0

const num1 = 10;
let num2 = 3;
let total1 = num1 % num2 // 나머지 연산의 결과는 0, 1
console.log(total1)
console.log('-----------------------------')
// let a = 5;
// let b = a++;
// let b = ++a; // 6 6
// let b = a--;
// console.log(`a=${a}, b=${b}`) // 6 5

let a = 10
let b = 20
let c = 30
let d = 40
console.log(a,b,c,d) //결과 : 10, 20, 30, 40
a++
b--
c++
d--
console.log(a,b,c,d) //결과 : 11, 19, 31, 39
a = ++b // 20 20
b = a++ // 20 21
console.log(a,b,c,d) //결과 : 21 20 31 39
c = a + b // 41
d = ++c // 42 42
console.log(a,b,c,d) //결과 : 21 20 42 42
a = ++c + 10 // 53 43
b = --d + 1 // 42 41
console.log(a,b,c,d) //결과 : 53 42 43 41