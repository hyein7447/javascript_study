// 객체 object
// 데이터 저장소 = 변수(한번에 한가지 값), 배열(2개 이상의 값)
// 특정 값에 해당되는 속성을 추가해서 데이터 관리를 용이
const cat = {
    color:'black',
    age:1,
}
// console.log(cat.length);
// 객체에는 length, index 속성이 없다
console.log(cat);
console.log(cat.color);
console.log(cat.age);
// 1살 black 고양이 분양합니다.
console.log(`${cat.age}살 ${cat.color} 고양이 분양합니다.`)
const cat2 = {
    color:['white','yellow','black'], 
    //객체안에 배열을 넣을경우 length, index가 생긴다
    age:2,
}
console.log(cat2)
// 고양이의 털 색깔은  yellow, white, black 으로 이루어져 있습니다.
console.log(`고양이의 털 색깔은 ${cat2.color[1]},${cat2.color[0]},${cat2.color[2]} 으로 이루어져 있습니다.`);
const cat3 = {
    'cat type':'코리안 숏헤어', /* 공백이 들어갈경우 따옴표로 묶기 */
    color:['white','black'],
    age:1,
    gender:'암컷',
    parcel: '입양 전',
    neutering:'중성화 전',
    health:'양호',
}
/* 
    코리안 숏헤어
    흰색, 검은색 고양이
    1살
    암컷
    입양 전
    중성화 전
    건강 양호
 */
console.log(cat3)
// console.log('cat type')// error
console.log(cat3['cat type'])
cat.parcel='입양완료'
console.log(cat.parcel)
//중성화 전 -> 중성화 완료
// 1 -> 2
cat.neutering = '중성화 완료'
cat.age += 1
console.log(cat.neutering)
console.log(cat.age)