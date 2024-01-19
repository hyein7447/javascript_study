//스크롤 javascript
// 1. window.scrollTo(x, y) 지정된 x, y좌표로 스크롤 이동 함수
// window.scrollTo(0, 200)

// window.onload : body 리소스를 모두 읽고 onload 함수 실행
/* window.onload = () => {
    console.log('.')
    window.scrollTo(0, 200)
} */

// 리소스 로드를 기다리지 않고 바로 함수 실행
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const bg = document.querySelectorAll('.bg')
const btn = document.querySelector('#btn')
console.log(btn)


document.addEventListener('DOMContentLoaded', ()=>{
    console.log('...')
    setTimeout(()=>{
        window.scrollTo(0, 200)
    },0)
})


btn.addEventListener('click', ()=>{
    // window.scrollTo(0, 1000)
    // window.scrollTo({left:0, top:1000}) //절대위치
    // window.scrollBy(0, 200) // 현재 나의 위치에서 움직이기 (상대위치)
    window.scrollTo({left:0, top:bg[2].offsetTop}) // 특정위치로 이동
})


// bg[0].style = 'scroll-behavior:smooth' //스크롤 애니메이션

next.addEventListener('click',()=>{
    bg[0].scrollBy(1400, 0)
})

prev.addEventListener('click',()=>{
    bg[0].scrollBy(-1400,0)
})