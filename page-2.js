function quitting_msg(){
        let quitting_msgg = document.getElementById('quitting_msg');
        quitting_msgg.style.display = "block";
    }

function resetoptions(){
    let options = ['option-a', 'option-b', 'option-c', 'option-d'];
    options.forEach(option => {
        let element = document.getElementById(option);
        element.onclick = null;
    })
}

function optionA(){
    resetoptions()
    let optionA = document.getElementById('option-a');
    let optionC = document.getElementById('option-c');
    optionA.style.background = "red";
    optionC.style.background = "green";
}

function optionB(){
    resetoptions()
    let optionB = document.getElementById('option-b');
    let optionC = document.getElementById('option-c');
    optionB.style.background = "red";
    optionC.style.background = "green";
}

function optionC(){
    resetoptions()
    let optionC = document.getElementById('option-c');
    optionC.style.background = "green";
}

function optionD(){
    resetoptions()
    let optionD = document.getElementById('option-d');
    let optionC = document.getElementById('option-c');
    optionD.style.background = "red";
    optionC.style.background = "green";
}

function cancelling_i(){
    let quitting_msgg = document.getElementById('quitting_msg');
    quitting_msgg.style.display = "none";

}

//Set the initial time in seconds (3 minutes = 180 seconds)
// function startTimer(duration){
//     let timer = duration, minutes, seconds;
//     const countdownElement = document.getElementById("timer");

//     const interval = setInterval(function(){
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         countdownElement.textContent = minutes + ":" + seconds + " min";

//         sessionStorage.setItem("quizTimer", timer);
//         if(--timer < 0){
//             clearInterval(interval);
//             countdownElement.textContent = "Time Up!";
//             sessionStorage.removeItem("quizTimer");
//         }
//     }, 1000);
// }

// window.onload = function(){
//     let savedTime = sessionStorage.getItem("quizTimer");
//     if(savedTime){
//         startTimer(parseInt(savedTime, 10));
//     } else{
//         startTimer(300);
//     }
// };

function goToNextQuestion(){
    window.location.href = "page-3.html";
}

// window.onbeforeunload = function(){
//     sessionStorage.removeItem("quizTimer");
// };


// function try_again(){
//     window.location.href = "page-1.html";
// };