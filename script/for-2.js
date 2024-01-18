//반복문 for
// for(초기값; 조건식; 증감식){조건이 참일 때 실행 반복결과} 조건 거짓일 때 종료되는 for문 위치
let data = [10,20,30,40,50]
let result = 0
for(i=0; i<data.length; i++){
    console.log(data[i]) //배열 값 반복 출력
    result += data[i]
}
console.log('총 배열의 합은'+result)
//-----------------------continue, break
for(var j=1; j<=10; j++){
    continue;
    console.log(`j=${j}`)
}
console.log(`for 조건식이 거짓으로 나오는 순간 결과는 ${j}`)
//-------------------------------------------
console.log('----------------------------------------')
//다중 반복문 for-for 2단 for문
let total = 0
for(let i=1; i<6; i++){ // 1~5 반복하는 1단 반복문
    console.log(`i = ${i}`)
    //2단 for 시작
    console.log('-------------------')
    for(let m=1; m<4; m++){ // 1단이 거짓이 될 때 까지 계속해서 실행됨
        console.log(`m = ${m}`)
        total += m
    }
    console.log(`total = ${total}`)
    console.log('-------------------')
    //2단 for 종료
}