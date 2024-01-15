// 조건문 if(조건문){조건식 참 실행결과}else{조건식 거짓 실행결과}
// const qa = prompt('이동 방향을 입력하세요','왼쪽,오른쪽,가운데 중 하나로 입력')
// 논리 연산자(&&(and),||(or), !(not)) 활용 조건식 단축하기
// 비교 && 비교 = 둘다 참이어야 참 결과
// 비교 || 비교 = 둘 중 하나만 참이어도 참 결과
/* if(qa=='왼쪽' || qa=='가운데' || qa=='오른쪽'){
    alert(`${qa} 1칸 이동`)
}else {
    alert('잘못 입력하셨습니다')
} */
// if ~ else if ~ else 다양한 조건식으로 구분하기
/* if(qa == '왼쪽'){
    alert('왼쪽으로 1칸 이동')
}else if(qa == '오른쪽'){
    alert('오른쪽 1칸 이동')
}else if(qa == '가운데'){
    alert('가운데로 1칸 이동')
} */


// 케찹, 머스타드, 설탕 소스 중 하나 선택
// const q = prompt('다음 중 핫도그에 뿌릴 소스를 고르세요','케찹, 머스타드, 설탕')
/* if(q == '케찹'){
    alert('케찹을 뿌려드릴게요')
}else if(q == '설탕'){
    alert('설탕을 뿌려드릴게요')
}else if(q == '머스타드'){
    alert('머스타드를 뿌려드릴게요')
}else {
    alert("소스를 선택 안하셨습니다.")
} */
/* if(q=='설탕' || q=='머스타드' || q=='케찹'){
    alert(`${q} 소스를 선택하셨습니다.`)
}else{
    alert('잘못 선택하셨습니다.')
} */

// 100 ~ 90 A
// 89 ~ 80 B
// 79 ~ 70 C
// 69 ~ 60 D
// 59 이하면 F
// const score = prompt('시험점수를 입력하세요','0~100점 사이값')
/* if(score <= 100 && score >=90){
    alert('이번 학기 점수는 A입니다.')
}else if(score < 90 && score >= 80){
    alert('이번학기 점수는 B입니다.')
}else if(score < 80 && score >= 70){
    alert('이번학기 점수는 C입니다.')
}else if(score < 70 && score >= 60){
    alert('이번학기 점수는 D입니다.')
}else if(score < 60){
    alert('이번학기 점수는 F입니다. 재수강하세요.')
}else{
    alert('잘못 입력 하셨습니다.')
} */
// let score_result = ''
/* if 조건안에 if를 추가 작성하는경우 --> 중첩if문 (조건에서 추가조건이 더
필요한 경우 0~100 참 조건으로 만든 후 그사이 50점수를 알고 싶을 때) */
/* if(score >=0 && score < 101){ // 0~100 조건
    if(score>=90){
        score_result = 'A'
    }else if(score>=80){
        score_result = 'B'
    }else if(score>=70){
        score_result = 'C'
    }else if(score>=60){
        score_result = 'D'
    }else {
        score_result = 'F'
    }
    alert(`당신의 점수는 ${score_result} 학점입니다`)
}else{
    alert('잘못 입력 하셨습니다.')
} */

const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움',
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결',
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격',
    },{
        month:8,
        flower:'글라디몰러스',
        content:'비밀, 상상, 견고함',
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑',
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애',
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실',
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사',
    }
]
const qa = Number(prompt('당신의 생일은 몇 월 인가요?','1~12월 중 입력하세요'))
let birhday_message = '' //최종 결과 값 변수
let user_birthday_month = ''; //중첩 if문에서 사용자가 입력한 달과 탄생화 배열객체를 연결해주는 전역변수
if(qa > 0 && qa <13){ // 1~12조건
    // 위 조건이 참일 때 추가 세부조건을 만들어주는 중첩 if문 위치
/*     if(qa == 1){
        user_birthday_month = birthday_flower[qa-1]
    }else if(qa == 2){
        user_birthday_month = birthday_flower[qa-1]
    }else if(qa == 3){
        user_birthday_month = birthday_flower[qa-1]
    }else if(qa == 4){
        user_birthday_month = birthday_flower[qa-1]
    }else if(qa == 5){
        user_birthday_month = birthday_flower[qa-1]
    }else if(qa == 6){
        user_birthday_month = birthday_flower[qa-1]
    }else if(qa == 7){
        user_birthday_month = birthday_flower[qa-1]
    }else if(qa == 8){
        user_birthday_month = birthday_flower[qa-1]
    }else if(qa == 9){
        user_birthday_month = birthday_flower[qa-1]
    }else if(qa == 10){
        user_birthday_month = birthday_flower[qa-1]
    }else if(qa == 11){
        user_birthday_month = birthday_flower[qa-1]
    }else if(qa == 12){
        user_birthday_month = birthday_flower[qa-1]
    } */
    if(qa == 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11 || 12){
        user_birthday_month = birthday_flower[qa-1]
    }
    birhday_message = ` 
    ${user_birthday_month.month}월의 탄생화는 
    ${user_birthday_month.flower} 이고, 꽃말은 
    ${user_birthday_month.content} 입니다.`
    alert(birhday_message)
}else { // 1~12 외 다른 입력 값 일 때
    alert('잘못 입력하셨습니다. 1~12월 중 하나를 입력하세요.')
}



/* if(qa == '1월'){
    let result = `당신의 탄생화는 ${birthday_flower[0].flower} 이고, 꽃말은 ${birthday_flower[0].content} 입니다.` 
    alert(result)
}else if(qa == '2월'){
    let result = `당신의 탄생화는 ${birthday_flower[1].flower} 이고, 꽃말은 ${birthday_flower[1].content} 입니다.` 
    alert(result)
}else if(qa == '3월'){
    let result = `당신의 탄생화는 ${birthday_flower[2].flower} 이고, 꽃말은 ${birthday_flower[2].content} 입니다.` 
    alert(result)
}else if(qa == '4월'){
    let result = `당신의 탄생화는 ${birthday_flower[3].flower} 이고, 꽃말은 ${birthday_flower[3].content} 입니다.` 
    alert(result)
}else if(qa == '5월'){
    let result = `당신의 탄생화는 ${birthday_flower[4].flower} 이고, 꽃말은 ${birthday_flower[4].content} 입니다.` 
    alert(result)
}else if(qa == '6월'){
    let result = `당신의 탄생화는 ${birthday_flower[5].flower} 이고, 꽃말은 ${birthday_flower[5].content} 입니다.` 
    alert(result)
}else if(qa == '7월'){
    let result = `당신의 탄생화는 ${birthday_flower[6].flower} 이고, 꽃말은 ${birthday_flower[6].content} 입니다.` 
    alert(result)
}else if(qa == '8월'){
    let result = `당신의 탄생화는 ${birthday_flower[7].flower} 이고, 꽃말은 ${birthday_flower[7].content} 입니다.` 
    alert(result)
}else if(qa == '9월'){
    let result = `당신의 탄생화는 ${birthday_flower[8].flower} 이고, 꽃말은 ${birthday_flower[8].content} 입니다.` 
    alert(result)
}else if(qa == '10월'){
    let result = `당신의 탄생화는 ${birthday_flower[9].flower} 이고, 꽃말은 ${birthday_flower[9].content} 입니다.` 
    alert(result)
}else if(qa == '11월'){
    let result = `당신의 탄생화는 ${birthday_flower[10].flower} 이고, 꽃말은 ${birthday_flower[10].content} 입니다.` 
    alert(result)
}else if(qa == '12월'){
    let result = `당신의 탄생화는 ${birthday_flower[11].flower} 이고, 꽃말은 ${birthday_flower[11].content} 입니다.` 
    alert(result)
}else{
    alert('잘못 입력 하셨습니다.')
} */
