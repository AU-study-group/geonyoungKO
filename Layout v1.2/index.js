document.addEventListener("DOMContentLoaded", function() {
    // DOMContentLoaded 이벤트 발생 시 실행되는 함수
    
    const dom1 = document.querySelector('.fa-solid.fa-bars');
    const dom2 = document.querySelector('.nav');
    
    dom1.addEventListener("click", function() {
      // dom1 요소에 클릭 이벤트 리스너 추가
    
      const targetElement = document.querySelector('.nav');
      // 대상 요소 선택
    
      if (targetElement) {
        // 대상 요소가 존재하는 경우
      
        if (targetElement.style.display === 'none') {
          // 대상 요소의 display 속성이 'none'인 경우
          
          targetElement.style.display = 'block';
          // display 속성을 'block'으로 변경하여 요소를 보이도록 설정
        } else {
          // 대상 요소의 display 속성이 'none'이 아닌 경우
          
          targetElement.style.display = 'none';
          // display 속성을 'none'으로 변경하여 요소를 숨기도록 설정
        }
      }
    });
  });
  