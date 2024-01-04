// 아아디 찾기 - 인증번호 받기
//Q. 인증번호 받기 클릭 시 버튼 다음 형제 위치에 "인증번호가 발송되었습니다." 출력하기
const authentication_form = document.querySelector('#id_search form')
const authentication_btn = document.querySelector('#authentication_btn')
const form_create = document.createElement('span')
console.log(authentication_form, authentication_btn)

authentication_btn.addEventListener('click', function(){
    authentication_form.appendChild(form_create)
    form_create.innerText = '인증번호가 발송되었습니다.'
    // authentication_form.insertBefore(form_create, authentication_form.firstChild)

})
//객체.appendChild(Node) 마지막 자식 노드 추가
//객체.insertBefore(삽입Node, 기존 시작자식 노드) 첫번째 자식 노드 추가
// ex) 부모.insertBefore(삽입, 부모.firtChild)

/* Q. 인증번호입력칸 #authentication_input 값을 입력하면 form의 이전 형제 위치에 
"인증번호가 틀렸습니다." 출력하기 */
const authentication_input = document.querySelector('#authentication_input')
const message_error = document.createElement('p')
const frm = document.querySelector('#id_search')

message_error.innerText = "인증번호가 틀렸습니다."
console.log(authentication_input, message_error)

authentication_input.addEventListener('blur',function(){
    // console.log('.') //인증번호 칸에 숫자를 쓸 때 마다 . 생김
    frm.insertBefore(message_error, frm.firstChild)
})