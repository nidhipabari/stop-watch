var secText = document.querySelector('.time h2');
var minText= document.querySelector('.time h1');
var sec= 00;
var min=00;

function start() {
    uid = setInterval(timer, 1000);
    function timer() {
        console.log('inside start()');
        sec++;
        if(sec==60){
            sec=0;
            min++;
            
        }
        secText.innerText = sec;
        minText.innerText = min;
    }

    
    
}
function stop(){
    clearInterval(uid);
    secText.innerText = sec;
    minText.innerText = min;
}

function reset() {
    clearInterval(uid);
    sec = 0;
    min= 0;
    secText.innerText = sec;
    minText.innerText = min;

}



