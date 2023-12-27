// let m1 = window.alert('popup');
// console.log(m1); //undifined

// let m2 = window.alert('잠시 기다려주세요'); //alert 확인 버튼 하나
// let m3 = alert('준비중입니다');
// let m4 = window.alert('메롱');
// let m5 = window.alert('하잉');
// const m6 = window.alert('제출완료');

// const qa1 = window.prompt('당신의 나이는?','') //prompt는 기본적으로 typeof 문자열로 인식
// console.log(typeof qa1)

// const ok = window.confirm('결제하시겠습니까?'); //confirm 확인/취소 버튼 두개 true,false
// console.log(ok);

// window.print();
function web(){
    window.location.href='https://www.naver.com/';
}
//----------------------
//객체.속성.속성
//객체.속성.메서드()
window.document.write("테스트문구")
document.write('자바스크립트')
document.write('hello<br>world') // 태그도 문자열로 인식해서 태그대로 동작함
//------------------------
// window.open('https://google.com','_blank'); 
function func2(){
    window.open('https://google.com','_blank','width=500,height=300')
    window.open('https://google.com','_blank','width=500,height=300')
}