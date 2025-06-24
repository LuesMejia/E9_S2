document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    const validUsers = {
        "ADMIN": "ADMIN",
        "USER1": "Password1",
        "USER2": "Password2"
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.querySelector("input[type='text']").value;
        const password = document.querySelector("input[type='password']").value;

        if (validUsers[username] && validUsers[username] === password) {
            window.location.href = "./index.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});