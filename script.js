const form = document.querySelector(".forme form");
const nom = document.querySelector('input[type="text"]');
const email = document.querySelector('input[type="email"]');
const message = document.querySelector("textarea");
const checkbox = document.querySelector("#checkbox");
const result = document.querySelector("#result");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let nomValue = nom.value.trim();
    let emailValue = email.value.trim();
    let messageValue = message.value.trim();

    if (nomValue === "") {
        result.textContent = "Please enter your name";
        result.style.color = "red";
        return;
    }

    if (emailValue === "") {
        result.textContent = "Please enter your email";
        result.style.color = "red";
        return;
    }

    if (messageValue === "") {
        result.textContent = "Please enter your message";
        result.style.color = "red";
        return;
    }

    if (!checkbox.checked) {
        result.textContent = "Please accept the privacy policy";
        result.style.color = "red";
        return;
    }

    result.textContent = "Thank you " + nomValue + ", your message has been sent!";
    result.style.color = "green";

    form.reset();
});
