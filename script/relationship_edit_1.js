/* 
아이디 (로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br>
입력하신 내용을 다시 확인해주세요.
*/
// "로그인" 버튼을 클릭 시 위 메세지가 form 안에 span.error 출력

const error = document.querySelector('#frm .error')
const loginBtn = document.querySelector('#frm #loginBtn')
const error_create = document.createElement('ul')
console.log(error_create) // <p></p>
console.log(error, loginBtn)

//form 마지막 자식 위치 createElement 생성한 노드 추가

//삽입노드 += 값
//객체(부모).appendChild(삽입노드)

//객체.innerHTML += '삽입노드'



loginBtn.addEventListener('click', function(){
/*     error.innerHTML = "<em>아이디 (로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br>            입력하신 내용을 다시 확인해주세요.</em>"
    // 태그가 들어갈 경우 innerHTML로 사용한다! 
    console.log(error) */
    error_create.innerHTML += '<li>아이디 입력하세요</li>';
    error.appendChild(error_create);
    console.log(error) 
})