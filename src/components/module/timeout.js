//count 라는 변수가 있어야한다 
//둠으로 바꿀 텍스트 부분을 가져온다 
//setInterval(fuction(count 를 감소시키는 함수))선언한다
//count가 1초에 1씩 감소를 해야한다 
//0이되면 더 이상 감소하면 안된다//
//초마다 텍스트가 바뀌어야한다//



let clear = document.querySelector('.boom');
let dom = document.querySelector('.timesale');
let count = 5; 
let countout = setInterval(function() {count--; console.log(count+"초남았읍니다")
dom.textContent = count;
if (count == 0){
    clearInterval(countout)
    alert('마감')
    clear.textContent = '';
}
},1000);
//countout  = couunt를 1초씩 감소 만약에 count가 0이되면 countout을 종료//
