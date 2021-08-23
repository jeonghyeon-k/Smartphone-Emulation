# 스마트폰 에물레이션

## [ ` 👉 시연 영상 ` ](https://drive.google.com/file/d/1q-NbsRpTOLqtDVsrOOJkch3QKcohj0R1/view?usp=sharing)

<img src="https://github.com/jeonghyeon-k/Smartphone-Emulation/blob/master/etc/show.gif?raw=true">

<br/>



## 실행 방법
--- 


1. npm 종속성 설치
    ```
    npm install
    ```
2. 서버 실행
    ```
    npm run start
    ```
0. 기본 url

    http://localhost:3000/

<br/>
<br/>

## 파일 구조
---
```bash
src
   ├── services
   │    ├── DelAlarm.js
   │    ├── ImageUrl.js
   │    └── ParseUrl.js
   ├── components        
   │    ├── ImageUrl.js
   │    └── ParseUrl.js
   ├── views
   │    ├── components
   │    │     ├── Inputbox.js
   │    │     └── Navbar.js
   │    └── pages
   │        ├── Alarm.js
   │        ├── AlertAlarm.js
   │        ├── Home.js
   │        ├── Memo.js
   │        ├── MemoShow.js
   │        ├── Photos.js
   │        ├── PhotoShow.js
   │        └── Error404.js
   │    
   ├── img
   │     └── Dog1 ~ 10.png
   ├── styles
   │     └── styles.css
   │
   ├── index.html
   └── index.js

``` 
<br/>
<br/>

## 코드 구조
---

프레임워크나 라이브러리를 사용하지 않고 단일 페이지 애플리케이션을 만드는 것입니다. 순수한 JavaScript를 사용하여 SPA를 구현하기 위해 다음 3가지를 고려하였습니다.
### 1. 라우터
라우터의 핵심 아이디어는 URL에 해시 기호(#)를 사용하는 것입니다 . 
브라우저의 관점에서 'localhost:8080/#/memo'와 'localhost:8080/#/photo'가 동일하며 서버 측 경로를 가져오기 위해 서버 요청을 보내지 않는다는 점을 이용하여 단일 페이지 앱을 구현하였습니다. 라우터는 /#/ 이후 정의된 경로와 뒤의 URL 부분을 비교하고 해당 페이지를 렌더링합니다.
<br/>
<br/>
localhost:8080/#/resource/verb/id

이 와 같은 형식으로<br/>
resource는 메모,알람,사진 와 같은 어플리케이션을 나타내며 <br/>
verb는 new, del, show 와 같은 동작을 의미하고 <br/>
id는 동작의 당사자가 되는 요소를 의미합니다.
<br/>
<br/>
### 2. 템플릿
템플릿은 ES6 템플릿 문자열 리터럴 구문을 통해 구성했습니다. 모든 템플릿에는 render페이지가 방문한 URL과 일치할 때 호출 되는 메서드가 있습니다. 이 render메서드는 fetch필요할 때 페이지 에서 외부 소스의 데이터를 가져오는 비동기식으로 작동합니다.
<br/>
<br/>
### 3. 구조
index.html와 index.js는 모듈화 것을 의미합니다.

pages는 URL 방문에 따라 렌더링을 담당하며 components는 page에 관계없이 렌더링 되어지는 HTML 조각입니다. 둘 다 views디렉토리 내부에 포함되어 있습니다.<br/>
services는 내부의 page는 내부 화면, 동작 관계 없이 작동되어집니다.

<br/>
<br/>


## 참고 사항
--- 

<br/>

### 미구현사항 

- [x] 앱은 Drag & Drop 으로 서로 위치를 이동할 수 있어야 합니다.

### 구현사항 


#### 홈

- [ㅇ] 상단에 날짜와 시간이 표시되어야 합니다.
- [ㅇ] 모든 화면에서 표시 되어야 함
- [ㅇ] 아래 3개의 앱이 표시되어야 합니다. (알람, 메모, 사진)
- [ㅇ] 핸드폰에서 앱 위치 바꾸는 동작과 같습니다.
- [ㅇ] 위치는 Local Storage에 저장되어 브라우저 Reload 후에도 바뀐 위치로 나와야 합니다
- [ㅇ] 각 앱 선택 시 해당 앱 화면으로 바뀌어야 합니다.

### 알람

- [ㅇ] 우측 상단에 “NEW” 버튼이 있어야 합니다. 
- [ㅇ] “NEW” 버튼 클릭 시 바로 아래 입력창이 나와야 합니다
- [ㅇ] 분은 10분 단위로 입력 받습니다. 
- [ㅇ] 저장을 클릭하면 아래 리스트에 추가되고 입력창 은 사라져야 합니다. 
- [ㅇ] 알람 리스트에 “삭제” 클릭 시 지워져야 합니다.
- [ㅇ] 알람 시간이 되면 alert 창으로 알람 시간을 띄어 주고 확인 클릭 시 해당 알람은 삭제되어야 합니다.
- [ㅇ] 다른 앱에 있어도 알람 은 동작해야 합니다.
- [ㅇ] 알람 리스트는 LocalStorage에 저장되며 브라우저 Reload 후에도 모두 그대로 나와야 합니다.



### 메모

- [ㅇ] 우측 상단에 “NEW” 버튼이 있어야 합니다.
- [ㅇ] “NEW” 버튼 클릭 시 바로 아래입력창 이 나와야 합니다.
- [ㅇ] 메모는 input 태그를 사용하고엔터키 입력 시 저장되며 입력창은 사라져야 합니다.
- [ㅇ] 메모 리스트에서는 2줄만 표시되어야 합니다.
- [ㅇ] 해당 메모 클릭 시 모든 메모 내용이 나오도록 펼쳐져야 합니다.
- [ㅇ] 한번에 하나의 메모만 펼칠 수있도록 이전에 펼쳐진 메모는 다시 2줄만 표시되도록 합니다.
- [ㅇ] 모든 메모는 LocalStorage에 저장되며 브라우저 Reload 후에도 저장된 메모가 그대로 나와야 합니다.

### 사진

- [ㅇ ] 사진은 로컬에 사진을 10개 정도 저장한 후 불러오도록 합니다.
- [ㅇ] 상단에 모든 사진 리스트가 나오며 가로 스크롤이 되어야 합니다.
- [ㅇ] 리스트에서 사진을 선택 화면 리스트에 Border등이 생겨 해당 사진이 선택되었다는 표시가 야합니다.
- [ ㅇ] 선택된 사진은 아래에 표시되어야 하고, 가로 세로 중앙 정렬이며 화면에 딱 맞게 줄어들어야 합니다.

### 화면
<br/>
 &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<홈화면> &nbsp &nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <알람화면>
<br/>
<img src="./etc/홈화면.png" alt="drawing" width="197"/>
<img src="./etc/알람화면.png" alt="drawing" width="200"/>
<br/>
 &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<메모화면> &nbsp &nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <사진화면>
<br/>
<img src="./etc/메모화면.png" alt="drawing" width="200"/>
<img src="./etc/포토화면.png" alt="drawing" width="200"/>

<br/>
<br/>
<br/>

---