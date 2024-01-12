# javascript

## 프로그래밍 언어 유형

- 절차를 순서대로 작성해 나가는 절차적 언어
- 데이터와 절차를 묶어 객체 단위로 관리하는 **객체 지향 언어**
- 프로그램 함수를 조합하여 구현해 나가는 **함수형 언어**
- 데이터 사이의 관계와 논리를 설명해가는 논리형 언어

### 절차적언어 + 객체지향언어

1. 목표 설정하기
2. 흐름도 만들기
3. 각 단계를 코드로 표현하기

### 객체 속성 메소드 이벤트

- Object (객체)
    사용자가 컨트롤 할 수 있는 객체대상 ex) 버튼, 링크, 텍스트 박스 등
    <button type=”button” id=”btn”><button>
    
- Property (속성)
    객체가 가지는 속성
    ex) 클래스, 아이디, 색상, 위치 등
    
- 
- Event (이벤트)
    인터넷 브라우저에서 발생할 수 있는 사건
    ex) 클릭, 드래그, 더블클릭,  키보드 입력
    
- Method (메소드)
    객체의 실행
    ex) 확인, 삭제, 취소, 이동, 애니메이션 등

# javascript (ECMAscript)
* 자바스크립트는 절차적언어, 객체지향언어이다.
## 자바스크립트 작성위치
* `<head>`,`<body>` 내에 `<script>` 작성 가능
* 내부스크립트 `<script>...</script>`
* 외부스크립트 `<script src="url"></script>`
* 자바스크립트 성능 향상 추가 옵션 `defer`,`async`
## 자바스크립트 변수
* `변수생성키워드 생성변수명 대입연산자 대입값;`
### 변수생성 키워드 종류
1. `var` : 중복선언 거르지 못함, ECMA Script 구버전의 오래된 변수 선언문
2. `let` : 중복선언 불가능하고 대입된 값을 언제든 변경할 수 있다.
3. `const` : 상수 (변하지 않는 값), 선언과 동시에 대입이 이루어져야 한다.
### 기초 연산자
1. `=` : 대입연산자 `let x = data`
2. `+` : 연결연산자 ` x+'1' ` 서로다른 데이터를 연결해주는 것
3. `+=` : 복합대입연산자 `x += y` -> `x = x+y`
-----------------------------------
## 원시 데이터 : 데이터를 구성하는 가장 기본적 요소
* 
## array (배열)
* array에서 index(배열순서)는 0부터 시작이고 length(배열수)는 1부터 시작이다.
* `console.log(${nameArray.length})` -> 배열의 개수 확인
* `nameArray(저장소이름).push('a')` -> 배열의 끝에 새로운 값을 추가한다.
* `nameArray(저장소이름).pop()` -> 배열의 끝을 삭제한다.
* `nameArray(저장소이름).unshift('a')` -> 배열의 시작에 새로운 값을 추가한다.
* `nameArray(저장소이름).shift()` -> 배열의 시작 값을 삭제한다.
* 배열의 갯수를 정해놓은 경우 배열을 추가하는 방법
    `ex) const ooo = new Array(8)`
        `movie[0] = 'a1';` -> index 0번자리에 a1을 대입한다
        `movie[1] = 'b3';` -> index 1번자리에 b3을 대입한다
* 배열의 갯수를 정해놓지 않고 마지막에 수를 제한 할 경우
    `ex) const ooo = new Array()`
        `megabox.push('a1')` -> 배열의 끝에 새로운 값 추가
        `megabox.push('b3')` -> 배열의 끝에 새로운 값 추가
        - 순서대로 값이 추가된다.
## object (객체)
* 한가지 저장소에 여러가지 속성을 추가할 수 있음
* `const cat = {color:'black', age:1,}`
* 속성명에 공백이 들어갈 경우 따옴표로 묶는다
    ex) 'cat type':'코리안 숏헤어',
* 여러 속성값중 선택해서 부를때는 배열로 부를 수 있다. 
    `ex) console.log(${cat.color[1]})`
* 속성값을 변경하고 싶을 때는 대입연산자를 사용한다.
    ex) `cat.parcel = '중성화 완료'`

## dom (document object model)

* getElementsByTagName
HTML에 TagNode가 2개 이상일 때 그 중 1개만 동적인 기능이 적용되어
DOM으로 등록이 필요한 거라면 변수 지정 시 [index] 설정하고 대입하기

* HTML에 TagNode가 2개 이상일 때 그 중 여러 개에 동적인 기능이 적용되어
DOM이 된다면 변수 지정 시에는 [index]없이 대입하고
해당 DOM 변수 호출 시 필요한 경우 [index] 사용하기

ex)
const h1Tag = document.getElementsByTagName('h1')[0] //1~2개 동적기능 사용
console.log(h1Tag[0]); // 여러개 동적기능 사용
-> 여러개중 1~2개일때 변수에 [index], 여러개중 여러개일 때 호출에 [index]


* DOM Node 변수 지정 시
HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고
실제로 DOM Node 변수를 이용한 동적인 결과를 만들어야 할때는
직접적인 접근으로 대상을 하나씩 개별인식하게 만들어야한다. [`index`]

* getElementsByClassName
부모의 자식 클래스 노드 를 지정할 경우 부모 변수를 먼저 작성 후
자식 클래스 노드 변수를 지정한다. 이때 document자리에 먼저 만들었던 부모 clss 변수를 넣어 만든다.
ex) 
const ulTag = document.getElementsByTagName('ul')[0];
const listCls2 = ulTag.getElementsByClassName('list')
console.log(listCls2);

* getElementById
Id는 하나이기 때문에 Element에 복수형 s가 붙지 않으며,
부모의 자식 Id 노드를 만들때 document자리에 부모 Id가 들어갈 수 없다.
-> 그냥 document.getElementById('') 로 만들면된다.

* querySelector
Id, class, Tag 모두 첫번째 HTML요소를 찾아 변환해준다.

* 명시적 형변환 (개발자가 직접 테이터타입을 결정)
let a = 10
console.log(typeof a) //number
a = '10'
console.log(typeof a) // string

* 암시적 형변환 (자바스크립트가 동의없이 자동으로 형변환)
prompt 받는 데이터값은 무조건 문자열로 처리된다.
ex) let age = window.prompt('당신의 나이는?')
    문자열로 인식하여
    age += 1 
    console.log(age) 로 출력할 경우 20 +1 =201 로 인식한다
이 문제를 해결하기 위해서 Number로 형변환을 시켜준다.

## value
* form 태그에 삽입되는 값 속성 (input, option, select, button,
textarea)
* form 태그 내에 작성했을 땐 미리 입렵된 값 표현 가능
* javascript 의 DOM.속성 `ex)DOM.value`로 처리했을 땐 해당 DOM의
미리 입력된 값부터 사용자가 입력하는 신규 값까지 모두 인식할 수 있다.
1. 쇼필몰의 상품 수량
2. 쇼핑몰의 총 주문 가격
3. 예약 페이지의 여행 인원 수 등등 ..
* 주의사항 -> value속성은 form전용이므로 다른 태그일때 해당 값을 알고 싶다면 다른 속성 및 메서드를 사용해야 한다.
* 주의사항 -> `DOM.value`로 값 처리 시 숫자를 쓰더라도 문자열 (string)으로 인식하기 때문에 필요한 경우 `Number()` 메서드를 활용해 (Number) 데이터 타입으로 변환해야 한다. ex) `Number(객체.value())`

## 버튼 눌렀을 때 input:number 에 숫자가 올라가는 방법
    <form action="#" method="get" id="orderNum">
        <input type="number" name="num" id="num" value="0">
        <button type="button" id="numBtn" onclick="plus()">+</button>
    </form>

    const num = document.querySelector('#num')
    const numBtn = document.querySelector('#numBtn')
    console.log(num,numBtn)

    function plus(){
    // console.log(num.value) // 값 출력 확인 ok
    // console.log(num.value+1) // 더하기 출력 확인 x -> 문제확인
    // console.log(typeof num.value) //문제해결하기 위한 데이터확인 -> number
    // console.log(Number(num.value)+1) //더하기 확인 ok
    // num.value = Number(num.value)+1 //출력 대상 바꿔서 확인
    // (아래) 또다른 결과 (프로그래밍 깔끔하게 쓰기)
    let result = Number(num.value)
    num.value = result + 1 }
## EVENT

- onclick : 클릭했을때
- onmouseover : 마우스가 html 요소에 올라갔을 때
- onmouseout : 마우스가 html 요소에서 벗어났을 때
- onchange : input 요소의 값이 변경되었을 때
- onsubmit : 폼 제출 버튼을 눌렀을 때
- onload : html을 모두 로딩했을 때 (홈페이지에 들어가면 바로 뜨는 ex)팝업, 자동로그인 등..)

### 이벤트 리너스 등록과 삭제

addEventListener 메서드는 함수를 이용한 이벤트 지정 방식입니다.

- 이벤트대상.addEventListener(이벤트종류, 이벤트콜백함수, 이벤트단계 (←생략가능))
- 이벤트단계는 true, false(기본값) 중 하나로 설정할 수 있습니다.

- 하나의 요소에 여러개의 이벤트 리스너를 등록할 수 있습니다.
- HTML 요소를 포함 모든 DOM 노드에 이벤트 리스너를 등록할 수 있습니다.
- 다양한 추가 메서드를 이용하여 이벤트를 정밀하게 제어할 수 있습니다.

### DOM 관계속성

- parentNode : 부모노드 (텍스트, 공백 포함)
- parentElement : 부모 요소 참조
- childNodes : 자식 요소 참조 
- firstChild : 첫번째 자식 노드 (텍스트, 공백 포함)
- firstElementChild : 첫번째 자식 요소 참조
- lastChild : 마지막 자식 노드 (텍스트, 공백 포함)
- lastElementChild : 마지막 자식 요소 참조
- previousSibling : 이전 형제 노드 (텍스트, 공백 포함)
- previousElementSibling : 이전 형제 요소
- nextSibling : 다음 형제 노드 (텍스트, 공백 포함)
- nextElementSibling : 다음 형제 요소

1. parentNode 부모 노드, parentElement 부모 요소
    - parentNode, parentNode 연속 사용 (부모의 부모 잡기)
    -자식 또는 자손노드, parentElement (특정 자식의 부모 잡기)
2. javascript 에서 css 제어하기 -> style 속성
    -DOM.관계.style = "속성: 값; 속성: 값;"
    * (위) style 2번 이상 생성 시 이전 속성:값 제거됨
    -DOM.관계.관계.style.속성 = "값";
    * (위) style 2번 이상 생성 시 기존 속성값에 이어서 추가됨
    -DOM.style.속성 = "값";
    -위 관계는 필요에 따라 선택 속성

#### 텍스트 노드 인덱스 출력
- ex) consol.log(header.childNodes) <- 정보확인용
      consol.log(header.childNodes[0]) <- 직접 접근용
      consol.log(header.childNodes[0].data) 데이터 읽기
      consol.log(header.childNodes[0].length) 긁자수 읽기
      consol.log(header.childNodes[0].baseURI) 경로 읽기

#### 노드안에 innerText 변경
- ex) headerChild[1].childNodes[0].innerText = "로고";
      headerChild[1].children[0].innerHTML = "로고로고";

# 객체.innerHTML
* `객체.innerHTML;` 특정 객체의 자식, 자손 HTML 읽기
* `객체.innerHTML = 값;` HTML 삽입 및 변경
# innerText
* `객체.innerText;` 특정 객체의 자식, 자손 텍스트 노드 읽기 (HTML X)
* `객체.innerText = 값;` 텍스트 노드 삽입 및 변경 (HTML X)
# appendChild
* `객체.appendChild()`
* `객체.객체.appendChild()`
* `객체.속성.appendChild()`
* `객체.속성.속성.appendChild()`
* 객체의 마지막 자식 노드 위치에 `()` 괄호 안 값 추가
# createElement
* `document.createElemnet()`
* 요소 노드 자바스크립트 내에서 동적인 용도로 생성할 경우
# 논리연산자와 비교연산자, 논리테이터
## 논리데이터
* 참 (True) 또는 거잣 (False) 두 가지 값 중 하나의 데이터형식 조건문, 논리연산자, 논리적 판단 등에 사용합니다.
* 
## 비교연산자
* 두 값 이상을 비교하여 그 결과를 논리데이터로 반환하는 연산자
- 일치연산자 (x==y) (x===y)
    - (===) :  x 와y가 완벽하게 일치하는가? (데이터 타입까지 완벽하게 일치하는지 확인)
- 부등연산자 (x!=y) (x!==y) : x와 y가 다른가?
- 대소비교연산자 (x < y),(x > y),(x<=y),(x>=y)
- 논리연산자를 이용한 복합비교연산자
- (x > 5 && y < 30) (x === 10 || y ===15)
    - &&=and , || = or
* 
## 논리연산자
* 논리적인 조건을 결합하거나 변경하는 데 사용하는 연산자 => AND (&&) OR (||) NOT(!)
* 비교연산 또는 논리데이터를 좌우 두 값으로 두고 논리적으로 비교하는 연산자
- AND (&&) : 양쪽 피연산자가 모두 참일 때 결과는 참
- OR (||) : 양쪽 피연산자 중 하나라도 참이면 결과는 참
- NOT(!) : 피연산자의 논리 값을 반전함. 참이면 거짓 반환

### 논리 연산자 우선순위
- () >> Not(!) >> AND(&&) >> OR(||)
ex) result = (true || false) && !false; // true