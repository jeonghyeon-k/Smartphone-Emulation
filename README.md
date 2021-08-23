# 스마트폰 에물레이션
> Frontend분야 사전과제

<br/>

[ 시연 영상](https://drive.google.com/file/d/1q-NbsRpTOLqtDVsrOOJkch3QKcohj0R1/view?usp=sharing)

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
   ├── views        
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

---