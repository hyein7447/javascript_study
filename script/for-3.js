const target = document.querySelector('.target')
const ul = document.createElement('ul') //태그생성
let li = document.createElement('li') //태그생성
console.log(target, ul)

for(let i=0; i<3; i++){
    li=document.createElement('li')
    li.innerHTML += `list ${i+1}`
    console.log(li)
    ul.appendChild(li)
}
target.appendChild(ul)
console.log('----------------------------')

// target-ul-li-<span>상품</span>*2-</li>
target.appendChild(ul)
for(let i=0; i<3; i++){
    li = document.createElement('li')
    for(let j=0; j<2; j++){
        li.innerHTML += `<span>상품 ${j+1}</span>`
    }
    ul.appendChild(li)
}
target.appendChild(ul)

console.log('----------------------------')
for(let i=0; i<3; i++){
    li = document.createElement('li')
    for(let j=0; j<2; j++){
        li.innerHTML += `<span>상품 ${j+1}</span>`
    }
    ul.appendChild(li)
}
target.appendChild(ul)

const target2 = document.querySelector('.target2')
let dt = document.createElement('dt')
let dd = document.createElement('dd')

/* target2.appendChild(dt)
for(let i=0; i<2; i++){
    target2.innerHTML += `<dd>어렵다</dd>`
} */

for(i=0; i<2; i++){
    dt = document.createElement('dt')
    dt.innerHTML = 'dt'
    target2.appendChild(dt)
    for(j=0; j<2; j++){
        dd = document.createElement('dd')
        dd.innerHTML = 'dd'
        target2.appendChild(dd)
    }
}
