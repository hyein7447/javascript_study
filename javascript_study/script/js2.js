const x = 2;
const y = 4;
let num = 1;
let all = [x, y, num, 0];

function func1 (){
    //모든 변수 개별 출력
    // console.log(x,y,num,all[0],all[1],all[2],all[3])
    console.log(`x = ${x}, y = ${y}, num = ${num} all = ${all} 이다.`)
    // 각 개별 값 모두 더한 값 출력
    console.log(x+y+num+all[0]+all[1]+all[2]+all[3])
}

func1()