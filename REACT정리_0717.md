# REACT_0717



### 실습코드 읽기



### 	ⅰ. circle

​	이번 실습은 페이지 내에 원을 몇개 그리고 원의 색을 미리 지정해둔 색중 하나로 무작위 교체해주는 실습이다.

1. 기본 세팅을 해준다.

2. 이번엔 `class Circle extends React.Component` 정직하게 Circle(동그라미)라는 클래스를 지정해줄 것이다.

3. `render()` 내에 `var circleStyle`를 선언해주고 안에 원의 디자인을 책임져줄 막중한 CSS 코드를 넣어주었다(별 것 아니기에색을 바꿔주기 위하여 'backgroundColor' 속성을 `this.props.bgColor`로 채워주었다는 것은 생략하겠다).

4. 이후 `return()`으로 'circleStyle'을 적용한 div를 반환하도록 만들었다. 이로써 예쁜 원의 모양을 완성!

5. 이후 원의 색을 바꿔 화면에 나타내기 위해 'showColor'라는 함수를 만들어 주었다. 함수의 내용은 색상의 배열을 지정하는 `var colors`와 무작위 색상을 배정하는 `var ran`으로 시작한다.

6. 각각 'colors'에는 색상배열, ran에는 `Math.floor`을 이용한 무작위 색상 배정을 써주고 `<circle bgColor={colors[ran]} />`을 리턴하도록 만들었다.

7. 그렇게 되면 본문 `ReactDOM.render`내에 `{showColor}`을 입력하였을 떄 매번 무작위의 색을 가진 원을 나타낼 수 있다.

   **  컴포넌트 내 속성을 유연하게 변경할 수 있다는 것에서 더 나아가 배열에 따라 속성값을 넣을 수 있다는 것을 배웠다. 이렇게 되면 차후에 DB를 녹여도 구현이 가능하다는 소리이다. 배울수록 놀라운 REACT!!!!!



### 	ⅱ. btnCounter

​	두번째 실습은 버튼을 누르면 숫자를 카운트해주는 간단한 기능을 구현하는 것이다. 말로는 간단하지만 코드는 아니었다...

1. 늘 기본 세팅!

2. 카운팅 숫자를 나타낼 'Counter' 클래스를 만든다. 내용은 css속성을 지정해준 'textStyle' 선언과 그를 반영한 div 속 {this.props.display}를 리턴해주는 명령어다. (이 때 display를 잘 기억하자! 화면에 노출 시 값을 배정해주어야 하기 때문.)

3. 다음으로 'CounterParent' 클래스에 참 많은(...) 명령어들을 써줄건데, 처음으로 생성자함수인 constructor과 그 조수인 super을 넣어준 후 state를 0으로 지정해 주었다.

4. 이후 `handleClick`이라는 함수를 임의로 만들고 내용을 채워준다. 내용은 `count : this.state.count + 1` 위에 `setState`를 감싼 형태로 쉽게 말해 1씩 더한 상태를 새로 업데이트하라는 것이다.

5. 이후 스타일 코드들을 넣어준 후 return하는 값으로 `<counter display={this.state.count}/>`를 넣어줌으로써 버튼을 누르면 숫자가 1씩 증가하는 카운터를 표현했다.

6. 마지막으로 본문 ReactDOM.render에 CounterParent를 써주어 디스플레이하였다.

   ** 계속 연관된 내용을 복잡하게 섞어가며 배우는 것 같다. 속성 변경, 싸제 함수, 함수를 뿌린 속성, 속성 안의 함수. 이제 뭐던 어떻게 동작하는지 알 수 있을 것 같다.

   

   ### ⅲ. Colorizer

   ​	세번째 실습은 지정된 사각형의 색을 input값으로 바꾸어주는 실습이었다. 입력값을 실시간으로 속성에 반영하는 것이었기에 많이 까다로운 과제였다.

1. 첫 클래스로 Colorize라는 이름의 컴포넌트를 써주었다. 내용은 'state'의 초기값을 `{back : "blue"}`으로 한다는 것이다. (back은 뒤에 나오겠지만 inputColor를 넣을 공간이자 속성값이다!)

2. 하단에 setNewColor라는 함수를 생성하고 `evt.preventDefault()`를 작성한다. 이는 색 변환 작업(으로 표현하고 setNewColor 함수라 읽는다.)을 마치고 기능을 그만두겠다는 의미이다.

3. 두번째 실습과 같이 this.setState로 state값을 초기화 해주는데 이때 `back : this.inputColor.value`를 넣어줌으로써 입력값을 받아올 수 있게 만든다.

4. 이후 스타일 코드를 적어주고 함수를 실행할 수 있는 onClick속성의 버튼을 만들어주면 목표한 디스플레이가 완성된다.

   ** 뭔가 많은 기능을 후딱 구현한 기분이라 좋다. 막히는 것도 딱히 없었고 이제는 REACT의 구조에 익숙해지는 기분이다.

   

   그럼 오늘하루도 기분 좋게 끝!

