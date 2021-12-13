let playStop = document.getElementById('play');
let reset = document.getElementById('reset');
let result =  document.getElementById('result');
let countSecond = document.getElementById('inputSecond');
let timeOutId = null;


//make a chrono for a second
let countdown = function () {
    timeOutId = setTimeout(function () {
        countSecond.value = countSecond--;
        result.innerHTML = countSecond;
        countdown();
        return timeOutId;
    },1000)
}

playStop.addEventListener('click' ,() => {
    countdown();
    console.log(countSecond.parseInt)
});
