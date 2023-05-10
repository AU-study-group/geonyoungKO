import {time1} from"./components/module/timelimit.js";//time1로 선언한 함수를 수입
const web = document.querySelector('.web');// const web 선언 id가 web 요소를 가져옴
web.insertAdjacentHTML('beforeend', time1);//web아래에 time1에 정의된 코드를 제일 끝에 붙인다.