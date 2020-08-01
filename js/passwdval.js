function checkPassword(form)
{
    password1 = form.passwd.value;
    password2 = form.nwpasswd.value;
    if (password1 === '') {
        alert("Please enter password.");
        return false;
    } else if (password2 === '') {
        alert("Please re-enter pasword.");
        return false;
    } else if (password1 !== password2) {
        alert("Both the passwords are not matching.");
        return false;
    } else
    {
        alert("Passwords matched.");
        var fm = document.getElementById("fm");
        fm.setAttribute("method", "GET");
        fm.setAttribute("action", "home.html");
        return true;
    }

}