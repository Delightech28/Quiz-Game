let username  = "";

function start(){
    username = document.getElementById("username").value;
    // window.location.href = "select-subject.html";
    // document.getElementById("category").textContent = "Welcome " + username;
    if(username){
        localStorage.setItem('username', username);
        window.location.href = "select-subject.html";
    }else{
        alert("Please enter your username");
    }
}

function science(){
    window.location.href = "page-1.html";
}