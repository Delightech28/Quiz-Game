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


function goToNextQuestion(){
    window.location.href = "page-9.html";
}
