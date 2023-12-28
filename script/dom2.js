const titleCls = document.getElementsByClassName('title')
console.log(titleCls)
console.log(titleCls[0])
console.log(titleCls[1])
const listCls = document.getElementsByClassName('list')
console.log(listCls);
// list 클래스를 가지고 있는 li만 인식하는 변수
const ulTag = document.getElementsByTagName('ul')[0];
const listCls2 = ulTag.getElementsByClassName('list')
console.log(listCls2);
//-----------------------------------
//Q. gnb 1개 잡기
const gnbCls = document.getElementsByClassName('gnb')[0];
console.log(gnbCls);
//Q. gnb-li 2개 잡기
const li_menu1 = gnbCls.getElementsByTagName('li')[0]
const li_menu2 = gnbCls.getElementsByTagName('li')[3]
console.log(li_menu1,li_menu2)
//Q. gnb-li-lnb 2개 잡기
const lnbCls = gnbCls.getElementsByClassName('lnb');
console.log(lnbCls)
//Q. gnb-li-lnb 첫번째 lnb만 잡기
const lnbCls1 = gnbCls.getElementsByClassName('lnb')[0]
console.log(lnbCls1)
//Q. gnb-li-lnb 두번째 lnb만 잡기
const lnbCls2 = gnbCls.getElementsByClassName('lnb')[1]
console.log(lnbCls2)
