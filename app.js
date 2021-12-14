let playStop = document.getElementById('play');
let reset = document.getElementById('reset');
let resultSecond =  document.getElementById('resultSecond');
let countSecond = document.getElementById('inputSecond');
let timeOutId = null;
let countMinute = document.getElementById('inputMinute');
let resultMinute =  document.getElementById('resultMinute');


playStop.addEventListener('click', function timeOutId() {
    let chrono = setTimeout(timeOutId,1000 ,countSecond.value);
    countSecond.value--;
    resultSecond.innerHTML = countSecond.value;
    resultMinute.innerHTML = countMinute.value;

    //check si la value des minute et vite ou inférieur a 1 et seconde inférieur a 1 alors 'clearTimeOut'
    if (countMinute.value === '' || countMinute.value <= 0 && countSecond.value <= 1 ) {
            clearTimeout(chrono);
    }
    //si les minutes contient une valeur alors:
    else {
        // une fois arriver a la derniere seconde repart a 60 et retire 1 minute
        if (countSecond.value < 1 ) {
            countSecond.value = 60;
            let chronoMinute = setTimeout(timeOutId,60000 ,countMinute.value);
            countMinute.value--;
        }
    }//balise ferment premier else

})