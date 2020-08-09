function redirectLogin(form){
    var uname = form.username.value;
    var passwd = form.pass.value;
    if (uname === "sk116" && passwd === "sk116"){
        var fm = document.getElementById("loginForm");
        fm.setAttribute("action","home.html");
    }
}
