# REACT



### What is REACT?

리액트란 기존 멀티페이지 디자인을 싱글 페이지 앱 형식으로 바꾸어주는 라이브러리라고 한다.

인터프리터 언어인 자바스크립트를 컴파일러로 변화시켜주는 작업을 한다.

##### 멋대로 이해하기

멋대로 이해하면 매뉴 이동이나 로그인시 깜빡이는 구린 사이트들을 누르면 움찔하는 지렁이마냥 하나로 이어준다는 뜻인 것 같다. 이로 인해 로딩의 부하를 줄여주고 UX를 개선하는 두마리 토끼를 잡아주는 고마운 라이브러리라고 볼 수 있겠다.



### 실습 코드 읽어보기



1. 늘 그렇듯 html파일을 만든 후 기본 폼을 doc으로 불러왔다.

2. Bootstrap / Jquery와 같이 소스를 불러와야한다. 난 CDN방식으로 떙겼다.

   <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
       <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
       <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

3. 테스트임을 알리는 제목을 달아주고 <div>를 나누어 주었는데 id를 "target"으로 주었다. 이는 이후 쓸 target을 지정해 주기 위함이다.
4. 또한 본문 작성 전 `<script type="text/babel">` 을 달아주었는데 이는 babel을 사용하기 위한 조건이다.
5. 이제 본문에 `var target = document.querySelector('#target');`으로 타겟을 지정해 주었다.
6. 내용을 채우기 위해 `ReactDOM.render(내용)`을 쓴 후 '내용'부분에 컨텐츠를 채워주었다. 이는 REACT의 객체 구조화인 DOM을 사용한다는 선언이다.
7. 안에 `h1`, `span` 등의 html 태그와 내용을 넣고 마지막에 `,`를 붙이는 것이 인상적이었다. 이는 구조 내 두개의 객체를 구분해 준 것이다. 나의 실습 파일 내에 한하면 쉼표 앞의 내용은 말그대로 JSX를 이용한 컨텐츠이며 이후는 목적지(dst)라고 볼 수 있겠다.
8. 이후에는 구조체에 대한 이해를 돕기 위해 영웅이름으로 장난을 쳐보았다.
9. 새 실습파일의 폼은 이전과 비슷했으나 이번에는 `class`와 `extends`를 사용하여 구조체에 기능을 넣어 보았다.]
10. `class XXX extends React.Component`라는 명령어를 써넣어 리액트 구조체와 클래스의 이름(XXX)을 주고 감싼 다음 내용으로 `return ({thist.props.xxx`을 뱉도록 만들어 주었다.
11. 이후 본문에 `<XXX xxx="ooooo">`를 써 주어 ooooo에 해당하는 값을 사용하는 기능을 사용해 보았다.
12. 잘 나왔다.



### 어디에 써먹을 것인가

말 그대로 이전과는 바뀌어버린 파격적인 방법이다.

JS의 섬세함을 부담스러워하던 내게 이러한 구조체 조립의 모양은 마치 기존 JS의 툭하면 무너지는 모래성 만들기에서 레고만들기로 난이도가 하향한 기분을 들게 만든다.

모듈, 라우팅을 한 HTML 파일에서 하는 기분이다.

이로써 확실히 한 페이지 내에서 동적인 웹사이트를 만들 수 있을 것 같으며 더 배우면 그럴싸한 UI/UX의 웹사이트를 만들 수 있을 것 같은 자신감을 주는 라이브러리였다.

어서 그럴싸한 홈페이지를 만들 수 있을만큼 배우고 싶다.

