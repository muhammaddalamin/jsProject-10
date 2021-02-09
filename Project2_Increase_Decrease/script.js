// set initial count 
let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(event){
        // console.log(event.currentTarget.classList)
        const style = event.currentTarget.classList;
        if(style.contains('btn-decrease')){
            count--;
        }
        else if(style.contains('btn-increase')){
            count++;
        }else{
            count = 0;
        }
        value.textContent = count;
        if(count > 0){
            value.style.color = 'green'
        }else if(count < 0){
            value.style.color = 'red'
        }
        if(count === 0){
            value.style.color = '#222'
        }
    });
});



window.onload = function(){
    navigator.geolocation.getCurrentPosition(success =>{
        console.log(success)
    },error =>{
        console.log(error)
    })
}