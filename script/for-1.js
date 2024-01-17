// 반복문 for
// for(초기값선언; 조건식; 증감식){괄호안 조건식이 참일 때 반복실행결과}
// 1 ~ 10 반복문
// for 지역함수 안에서 작성되는 변수명 = i, j, m, n
for(let i=1; i<=10; i++){console.log(`i=${i}`)}
console.log('---------------------------')
//5~10 반복문
for(let i=5; i<=10; i++){console.log(`i=${i}`)}
console.log('---------------------------')
//5 ~ 0 반복문
for(let i=5; i>=0; i--){console.log(`i = ${i}`)}
console.log('---------------------------')
// 1,3,5,7,9 반목문
for(let i=1; i<=10; i++){
    if(i%2==1){
        console.log(`홀수${i}`)
    }else{
        console.log(`짝수${i}`)
    }
}
//----------------------------------
const study = ['illustrator','photoshop','figma','html','css','javascript']
// 반복문 활용 study 배열 값 한번에 출력하기
// 1. illustrator 공부
// ....
// 6. javascript 공부
/* for(i =0; i<study.length; i++){
    console.log( `${i+1}.${study[i]}공부`)
}
*/
for(let i=study.length-1; i>=0; i--){
    console.log(`${i+1}.${study[i]}공부`)
}

console.log('---------------------------')
const menuAll = document.querySelectorAll('nav a')
for(let i = 0; i<menuAll.length; i++){
    console.log(menuAll[i])
    if((i+1)%2==1){
        menuAll[i].classList.add('bg1')
    } // 홀수
    else{
        menuAll[i].classList.add('bg2')
    } // 짝수
}