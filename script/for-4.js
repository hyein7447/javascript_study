// while 무한 반복 (횟수가 정해져있지 않는 곳에 사용)
// 1~10 반복
for(let i=1; i<=10; i++){
    console.log(`for i=${i}`)
}
console.log('-------------------------')
let j=1;
while(j<=10){
    console.log(`while j=${j}`)
    j++
}
//--------------------------------------
console.log('-------------------------')
let qa = prompt('밥줄까?')
while(qa !='응'){
    qa = prompt('밥줄까?')
}
alert('밥먹자')