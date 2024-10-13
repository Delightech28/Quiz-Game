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
    let optionB = document.getElementById('option-b');
    optionA.style.background = "red";
    optionB.style.background = "green";
}

function optionB(){
    resetoptions()
    let optionB = document.getElementById('option-b');
    optionB.style.background = "green";
}

function optionC(){
    resetoptions()
    let optionC = document.getElementById('option-c');
    let optionB = document.getElementById('option-b');
    optionC.style.background = "red";
    optionB.style.background = "green";
}

function optionD(){
    resetoptions()
    let optionD = document.getElementById('option-d');
    let optionB = document.getElementById('option-b');
    optionD.style.background = "red";
    optionB.style.background = "green";
}

function cancelling_i(){
    let quitting_msgg = document.getElementById('quitting_msg');
    quitting_msgg.style.display = "none";

}


function goToNextQuestion(){
    window.location.href = "page-5.html";
}
