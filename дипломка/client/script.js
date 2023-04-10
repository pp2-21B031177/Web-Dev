let loginBtn = document.getElementById("login-button");
loginBtn.addEventListener("click", async function checkLoginAndPass() {
    const url = 'http://localhost:3000/api/users';
    const response = await fetch(url);
    const text = await response.text();
    console.log(text);
});
let createAccBtn = document.querySelector(".create-acc-button");
createAccBtn.addEventListener("click", () => {
    window.location.href = "createAcc.html";
});