// 첫번째 자식, 마지막 자식 노드 잡기
// firstChild, firstElementChild
// lastChild, lastElementChild
const items = document.querySelectorAll('.item')
console.log(items);
console.log(items[0]);
console.log(items[0].firstChild); // #text (공백)
console.log(items[0].firstElementChild); //p.photo 요소기준
console.log(items[0].lastChild); // #text 마지막 자식 노드 (공백)
console.log(items[0].lastElementChild); // p.price (마지막 자식 요소)
//-------------------------형제노드잡기
// 이전 형제 previousSibling, previousElementSibling
// 다음 형제 nextSibling, nextElementSibling
const item_h2 = items[0].querySelector('h2');
console.log(item_h2) //첫번째 item의 h2 상품 이름 정상 확인
console.log(item_h2.nextSibling) //#text
console.log(item_h2.nextSibling.nextSibling) // p.price
console.log(item_h2.nextElementSibling) // p.price
console.log(item_h2.previousSibling) // #text
console.log(item_h2.previousElementSibling) // p.photo