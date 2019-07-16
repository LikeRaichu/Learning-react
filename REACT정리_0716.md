# REACT_0716



** props = 데이터

​	state = 상태값

​	constructor = 생성자 함수



### 실습 코드 읽어보기



### ⅰ. cless

1. 이제 짬이 생겼으니 CDN 까지는 제외하고,

2.  "letter"라는 class를 통하여 무려 AEIOU를 꾸미는 코드를 써보기로 했다.

3. 처음엔 <head> 부분에 .letter로 클래스 디자인 속성을 넣어준 다음,

4. 어제와 같이 `class Letter extends React.Component`를 통해 클래스 이름 Letter에 리액트 컴포넌트를 만들어주었다.

5. 컴포넌트 내용은 이러하다. `{this.props.children}`, 즉 자식 속성의(나중에 나오겠지만 이때 부모는 Letter가 되겠다.) 컨텐츠를 참고하여 클래스 Letter의 꾸밈을 담은 `<h1>`을 `return ()`하겠다는 뜻이다. 

6. 이후 늘 그렇듯 `ReactDOM.render`로 프로퍼티 위에 컴포넌트 위에 클래스 이름을 기준으로한 기능을 읽어올 준비를 해주고

7. `<Letter>XXX</Letter>`을 써주며 클래스 속성을 반영한 XXX를 불러올 수 있었다.

   

   ** 특이한 점은 그저 클래스명을 태그처럼 써서 글자에 속성을 반영할 수 있다는 점이었다. 그래서 뭐가 차이점인가 찾아보던 와중 어제와는 다르게 `{this.props.children}`에서 children이 달랐던 것을 알게 되었다.

   ​	이에 추가적으로 질문드리고 답변을 들은 바로는 프로퍼티 뒤에 붙는 xxx은 변수이름이라고 하시더라! 이는 참 재미있는 설정이었는데 그렇게 된다면 마음대로 `this.props.daebak`이라고 써놓으면 `<"클래스이름" daebak="원하는 값"`을 적용했을 떄 적용이 된다는 소리다!

   

### ⅱ. inline

1. 두번쨰 inline은 같은 아웃풋을 나타내지만 다른 방식을 차용했다.

2. <head>태그 안에 CSS값을 부여해주는 것이 아니라 리액트 컴포넌트 안에 내장시켜주는 것이었다.

3. 코드에선 같은 것을 제외하고 난 후, 컴포넌트 내에서 다른점이 있다. 이는 `var letterStyle = { ~~~~~ }`로 속성을 객체화시킨 것이다.

4. 이후 return 내부에 `<div style={letterStyle}>`로 `{this.porps.children}`을 감싸주어 속성 적용을 한 컨텐츠를 뱉는다.

5. 이후 `ReactDOM.render` 의 내용은 위와 같다.

   

   ** 이번 실습에서 배운 점은 컴포넌트 내에서도 CSS속성을 지정할 수 있다는 것을 알았으며 특이하게도 이는 객체형으로 선언해주어야 사용 가능하다는 사실이었다.

   

### ⅲ. 속성 변경

1. 세번째 실습 코드는 두번째 'inline'코드를 그대로 쓴다.

2. 차이점은 `var letterStyle` 객체 내의 CSS속성 중 'backgroundColor'의 값을 `this.porps.bgcolor`로 써주어 bgcolor라는 변수를 지정해 주었다.

3. 이후 `ReactDOM.render`안에 `<Letter bgcolor = #XXXXXX>OOO</Letter>`를 써주어 자유롭게 같은 속성 안에서 배경색만 변화시킬 수 있었다.

   

   ** 질문인 'letterStyle'객체 내 'backgroundColor'의 값인 `this.props.bgcolor`에는 왜 중괄호( ''{  }' ')가 붙지 않아도 되는지에 대한 것은 return 함수 안 같은 JS의 영역이 아닌 곳에서는 JSX의 함수를 불러오는 형식으로 불러와야 하기 떄문에 중괄호를 삽입해야 하는 것이고 'render' 안은 JS의 영역이기 때문에 따로 호출을 위한 중괄호가 필요 없다는 답변을 들었다. 

   ​	컨텐츠가 아닌 속성도 위의 함수로 자유롭게 바꿀 수 있다는 점은 REACT를 이용해 기능을 구현할 떄 참 편리한 기능임을 이해할 수 있었다. 또한 컴포넌트와 render의 관계, 구조도 이해하기 좋은 실습이었다.

   *** render는 component를 읽어 표시해주는 소형 기계라고 볼 수 있겠다.

   ​	(그래서 매 코드에 들어갔구나!)

   

### ⅳ. Complex Component

1. 챕터의 마무리로 배워놓은 모든 컴포넌트 활용방법을 총 망라한 페이지를 만들어 보았다.
2. 일단 클래스는 3가지인 [square, Label, card]로 각각 [해당 색상, 색상코드, 외곽]을 나타내는 리액트 컴포넌트이다.
3. Square 클래스에서는 아까 배운 `this.props.color`를 통해 색이 변경될 수 있게 하였다.
4. Label 클래스에서는 코드를 나타내기 위해 return 안에 스타일을 적용한  `this.props.color`을 넣어주었다.
5. 마지막으로 Card 클래스에는 두 컴포넌트를 감싸주기 위해 CSS 코드를 쓴 객체로 음영 테두리를 만들어 주었다. 또한 두 컴포넌트를 나타내 주기 위해 return 안에 `<Square color={this.props.color}/>` 과 `<Label color={this.props.color}/>`를 써주었다.
6. 이후 ReactDOM.render 안에 `<card color="#XXXXXX">`를 써줌으로써 색상 팔레트 카드를 완성하였다.



### ⅴ.LIghtning!

1. 부수적인 코드는 제외하고 일단 'LightningCounter'라는 클래스부터 입력해주었다.

2. 내용은 새로운 코드인 `constructor(props)`로 시작하는데 이 함수는 생성자 함수라고 한다.

   ​	**생성자 함수는 이후에 쓰는 state를 쓰기 위해 내장 함수가 아닌 새로운 		함수를 써주느라 사용하게 되는 것이다. 이는 REACT에게 이번엔 네가 		만든게 아니라 내가 만들어서 쓸거야! 라고 선언하는 것이다.

3. `constructor` 안에는 새롭게 `super(props)`가 들어가게 된다.

   **이는 이전에 REACT 내장 함수를 이용했을 때와는 다르게 새로 함수를 지	정해 주는 과정에서 부모그룹을 초기화 해주는 역할을 한다. 이 명령 없이 	this를 쓰면 인식을 하지 못하기 때문에 super을 써서 부모를 지정해 주어	야 한다는 것이다!

4. 이어 같은 항렬에서 this.state를 선언해 주는데 이는 상태를 보관하는 변수값이다. 우리는 'strikes'상태의 초기값을 설정해 주는데 사용하였다.

5. 이후 선언한 대로 새로운 함수를 써주기 시작했다. componentDidMount라는 함수명을 할당해주고 setInterval함수를 이용하여 실행 간격을 지정해 주었다. 변화할 state는 `this.setState안의 strikes: this.state.strikes + 100`으로 기준 단위당 100만큼 변화하는 strikes를 표시해주었고 그 위에 1000을 써주어 setInterval의 밸류를 설정해 주었다.

6. 이후 랜더를 통해 위의 함수를 불러냈다.

7. 마지막으로 위 함수를 디스플레이해줄 'LightningCounterDisplay' 클래스 안에 깔끔하게 넣어줌으로써 마무리 했다.

   ** 이로써 동적으로 상황을 반영하는 웹사이트를 만들어보았다. 일단 다른건 제쳐두고 만들어 놓고 나니 보기가 참 좋았다. 감각있고 Fancy한 사이트를 만들기 차아아암 좋은 툴이다.

   ​	멋에 대한 감탄을 마치고 보니 내장 객체 외에 JS처럼 함수를 생성하여서도 쓸 수 있다는 사실에 또다시 감탄할 수 밖에 없었다. REACT에서도 JS처럼 다양한 기능의 사이트를 만들 수 있다는 말이다!

