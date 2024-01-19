const btn = document.querySelector('#btn')
const topb = document.querySelector('#top')
const header = document.querySelector('header')

topb.style.display = 'none'


// 일정 스크롤시 header부분 사라지고 네이게이션만 나오기
header.style.transition = 'top 0.3s'
window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 300){
        header.style.top = '-50px'
    }else{
        header.style.top = '0'
    }
})


// 일정 스크롤시 버튼 나오면서 상단이동 버튼 클릭시 상단으로 이동
window.addEventListener('scroll',()=>{
    // console.log('0')
    //console.log(window.pageYOffset)
    btn.innerHTML = window.scrollY // = pageYOffset
    if(window.scrollY > 200){
        topb.style.display = 'block'
    }else{
        topb.style.display = 'none'
    }
})
topb.addEventListener('click', ()=>{
    window.scrollTo (0,0)
})
