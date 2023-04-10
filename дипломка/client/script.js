let loginBtn = document.getElementById("login-button");
loginBtn.addEventListener("click", async function checkLoginAndPass() {
    let email = document.querySelector('input[name=email]').value;
    let password = document.querySelector('input[name=password]').value;
    if(!(email && password)) alert("Please fill in all fields");
    else {
        let data = {"email": email, "password": password};
        console.log(data);
        fetch("/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            console.log("Request complete! response:", res);
            if(res.status == 400) alert("Неправильные учетные данные");
            else if(res.status == 500) alert("Ошибка при авторизации пользователя");
            else if(res.status == 200) window.location.href = "main.html";
        })
    }
});
let createAccBtn = document.querySelector(".create-acc-button");
createAccBtn.addEventListener("click", () => {
    window.location.href = "createAcc.html";
});
