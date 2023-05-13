import {menu} from "./main.js";//menu로 선언한 함수를 수입
const web = document.querySelector('.web');// const web 선언 id가 web 요소를 가져옴
web.insertAdjacentHTML('beforeend', menu);//web아래에 menu에 정의된 코드를 제일 끝에 붙인다.