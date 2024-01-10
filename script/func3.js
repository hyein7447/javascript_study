/* // Q. 콜라만 나오는 자판기
function japangi(){
    console.log('콜라')
}
// Q. 사이다만 나오는 자판기
function japangi2(){
    console.log('사이다')
}
japangi()
japangi()
japangi2() */

//필요한 음료수를 자유롭게 뽑을 수 있는 자판기
function japangi(drink){ // drink 매개변수 생성 = let drink;
    console.log(drink)
}
japangi("콜라")
japangi("사이다")
japangi("커피")
japangi("탄산수")

function japangi_v2(drink, num){
    console.log(drink+num+'개 나왔습니다')
}
japangi_v2('탄산수',2)
japangi_v2('콜라',10)
japangi_v2('사이다',50)
console.log('--------------------------------------------')

// Q. 피연산자 2개가 항상 더해져서 결과가 나오는 함수 만들기

function calc1(a,b){
    console.log(a+b)
}
calc1(55,99)
calc1(5446,546464)
calc1(5,1)

// Q. 피연산자 2개와 산술연산자를 설정해서 자유로운 계산이 가능한 함수 만들기

let result
function calc2(num1,calc,num2){
    result = calc=='*' ? num1*num2 : null
    console.log(`${num1}${calc}${num2} = ${result}`)
}
calc2(5,'*',9)
console.log('--------------------------------------------')
// 함수의 데이터값 반환 return
let total = 0
function func1(num){
    total = num+1
    return total
}
console.log(total) // 0
console.log(func1(5))
window.alert(func1(10))
/* 
    return 사용 시 밑에 데이터는 읽지않고 바로 밖으로 반환되기 때문에
    지역함수를 사용할 때는 대입되는 값을 먼저 쓰고 마지막에 return을 사용해야한다.
    특정 상황에따라 데이터값을 더이상 읽지않고 반환되도록 return을 먼저 사용하기도 한다.
*/