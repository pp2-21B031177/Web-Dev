window.addEventListener("load", () => {
    let registerBtn = document.querySelector(".create-acc-button");
    registerBtn.addEventListener("click", () => {
        let firstName = document.querySelector('input[name=firstName]').value;
        let lastName = document.querySelector('input[name=lastName]').value;
        let email = document.querySelector('input[name=email]').value;
        let password = document.querySelector('input[name=password]').value;
        console.log(firstName + " " + lastName + " " + email + " " + password);
        if(!(firstName && lastName && email && password)) {
            alert("Please fill in all fields");
        } else {
            let data = {"email" : email, "password": password};
            console.log(data);
            fetch("/api/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => {
                console.log("Request complete! response:", res);
                if(res.status == 400) alert("Такой пользователь существует");
                else if(res.status == 500) alert("Ошибка при регистрации пользователя");
                else if(res.status == 201) alert("Пользователь успешно зарегистрирован");
            })
        }
    });
});