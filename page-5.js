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
    let optionD = document.getElementById('option-d');
    optionA.style.background = "red";
    optionD.style.background = "green";
}

function optionB(){
    resetoptions()
    let optionB = document.getElementById('option-b');
    let optionD = document.getElementById('option-d');
    optionB.style.background = "red";
    optionD.style.background = "green";
}

function optionC(){
    resetoptions()
    let optionC = document.getElementById('option-c');
    let optionD = document.getElementById('option-d');
    optionC.style.background = "red";
    optionD.style.background = "green";
}

function optionD(){
    resetoptions()
    let optionD = document.getElementById('option-d');
    optionD.style.background = "green";
}

function cancelling_i(){
    let quitting_msgg = document.getElementById('quitting_msg');
    quitting_msgg.style.display = "none";

}


function goToNextQuestion(){
    window.location.href = "page-6.html";
}
