// "안녕" chat_txt 입력 후 send_btn을 클릭하면
// chat_list 에 <li> 태그로 chat_txt에 입력한 "안녕" 값을 출력하기

const chat_list = document.querySelector('#chat .chat_list' ) //메세지 출력 위치
const send_btn = document.querySelector('#chat .chat_send #send_btn') //보내기 버튼
const chat_txt = document.querySelector('#chat .chat_send #chat_txt') //메세지 입력창
console.log(chat_list, send_btn, chat_txt)
const list_create = document.createElement('ul')

//보내기 버튼 클릭 시
send_btn.addEventListener('click',function(){
    list_create.innerHTML += `<li>${chat_txt.value}</li><span>1</span>`
    chat_list.appendChild(list_create);
    chat_txt.value = ''
})