# 스마트폰 에물레이션

## [ ` 👉 시연 영상 ` ](https://drive.google.com/file/d/1mR1xzr0grYjrn3_eYrvzd6yMtDJQBVIX/view?usp=sharing)

<br/>

### 홈
<img src="https://github.com/jeonghyeon-k/Smartphone-Emulation-after/blob/main/etc/home.gif?raw=true">

<br/>

### 사진
<img src="https://github.com/jeonghyeon-k/Smartphone-Emulation-after/blob/main/etc/photo.gif?raw=true">

<br/>

### 메모
<img src="https://github.com/jeonghyeon-k/Smartphone-Emulation-after/blob/main/etc/memo.gif?raw=true">

<br/>

### 알람
<img src="https://github.com/jeonghyeon-k/Smartphone-Emulation-after/blob/main/etc/alarm.gif?raw=true">



</br>
</br>
</br>

### 구현사항 모두 구현


#### 홈

- [ㅇ] 상단에 날짜와 시간이 표시되어야 합니다.
- [ㅇ] 모든 화면에서 표시 되어야 함
- [ㅇ] 아래 3개의 앱이 표시되어야 합니다. (알람, 메모, 사진)
- [ㅇ] 핸드폰에서 앱 위치 바꾸는 동작과 같습니다.
- [ㅇ] 위치는 Local Storage에 저장되어 브라우저 Reload 후에도 바뀐 위치로 나와야 합니다
- [ㅇ] 각 앱 선택 시 해당 앱 화면으로 바뀌어야 합니다.
- [ㅇ] 앱은 Drag & Drop 으로 서로 위치를 이동할 수 있어야 합니다.

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



## 참고 사항
--- 
실행방법

https://github.com/jeonghyeon-k/Smartphone-Emulation#%EC%8B%A4%ED%96%89-%EB%B0%A9%EB%B2%95

파일구조

https://github.com/jeonghyeon-k/Smartphone-Emulation#%ED%8C%8C%EC%9D%BC-%EA%B5%AC%EC%A1%B0

코드구조

https://github.com/jeonghyeon-k/Smartphone-Emulation#%EC%BD%94%EB%93%9C-%EA%B5%AC%EC%A1%B0

