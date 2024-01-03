const header = document.querySelector('header');
const headerChild = header.childNodes;
console.log(header,headerChild);
// console.log(header,childElementCount); //length와 동일하게 1부터 셈

console.log(headerChild[1])
console.log(headerChild[3])
console.log(headerChild[1].innerText) // logo
console.log(headerChild[1].innerHTML) // <a href="#">logo</a>
console.log(headerChild[3].innerText) // menu1 , menu2
console.log(headerChild[3].innerHTML) // <a href="#">menu1</a> , <a href="#">menu2</a>

// headerChild[1].innerText = "로고"; //대입연산자로 바꿀 경우 안에있는 모든 자식,자손을 text로 변경
headerChild[1].childNodes[0].innerText = "로고";
headerChild[1].children[0].innerHTML = "로고로고";

// Q menu1 마우스를 올리면 menu1 -> 메뉴1 글자 변경
const nav = document.querySelector('nav');
const navChild = nav.childNodes;
console.log(nav, navChild)

navChild[1].addEventListener('mouseover',function(){
    navChild[1].innerText = "메뉴1"
})

// Q menu2 마우스를 올리면 menu2 -> 메뉴2 글자 변경

navChild[3].addEventListener('mouseover',function(){
    navChild[3].innerText = "메뉴2"
})

/* const nav = header.querySelector('nav');
const nav_a = nav.children;
console.log(nav, nav_a, nav_a[0], nav_a[1])

nav_a[0].addEventListener('mouseover',function(){
    nav_a[0].innerText = '메뉴1';
}) */


// main-장바구니 아이템의 개수를 자동으로 측정하여 main span.all 노드에 해당 개수 출력하기
const mainNode = document.querySelector('main');
// 1. main-cart 변수 생성하기
const cart = mainNode.querySelector('.cart');
// 2. span.all 변수 생성하기
const all_count_view = mainNode.querySelector('span.all');
// 3. main-cart의 자식 item 개수 체크하기
const cart_item_count = cart.childElementCount;
console.log(mainNode, cart, all_count_view, cart_item_count);
// 4. span.all 변수에 위(3)번 값 대입하기
all_count_view.innerText = cart_item_count;

/* const cart = document.querySelector('.cart')
const cartChild = cart.childElementCount;
let span_all = document.querySelector('.all')
console.log(cart, cartChild, span_all)
 */
