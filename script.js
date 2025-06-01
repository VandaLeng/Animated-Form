let usernameInput = document.querySelectorAll(".username");
let passwordInput = document.querySelectorAll(".password");
let emailInput = document.querySelector("#reg-email");
let showPasswordButton = document.querySelectorAll(".password-button");
let face = document.querySelector(".face");
let ears = document.querySelectorAll(".ear");
let eyes = document.querySelectorAll(".eye");
let nose = document.querySelector(".nose");
let mouth = document.querySelector(".mouth");
let hands = document.querySelectorAll(".hand");
let loginForm = document.querySelector("#login-form");
let registerForm = document.querySelector("#register-form");
let showRegisterLink = document.querySelector("#show-register");
let showLoginLink = document.querySelector("#show-login");
let footerPs = document.querySelectorAll(".footer p");

// Toggle between login and register forms
showRegisterLink.addEventListener("click", (event) => {
    event.preventDefault();
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    footerPs[0].classList.add("hidden");
    footerPs[1].classList.remove("hidden");
});

showLoginLink.addEventListener("click", (event) => {
    event.preventDefault();
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    footerPs[0].classList.remove("hidden");
    footerPs[1].classList.add("hidden");
});

// Username input: head rotation and ear wiggle
usernameInput.forEach((input) => {
    input.addEventListener("focus", (event) => {
        ears.forEach((ear) => ear.classList.add("active"));
        face.style.setProperty("--rotate-head", "5deg");
        hands.forEach((hand) => {
            hand.classList.remove("close-eyes");
            hand.classList.remove("peek");
        });
    });

    input.addEventListener("blur", (event) => {
        ears.forEach((ear) => ear.classList.remove("active"));
        face.style.setProperty("--rotate-head", "0deg");
        hands.forEach((hand) => {
            hand.classList.remove("close-eyes");
            hand.classList.remove("peek");
        });
    });

    input.addEventListener(
        "input",
        _.throttle((event) => {
            let length = Math.min(event.target.value.length - 16, 19);
            face.style.setProperty("--rotate-head", `${-length}deg`);
            ears.forEach((ear) => ear.classList.add("active"));
            setTimeout(() => ears.forEach((ear) => ear.classList.remove("active")), 300);
        }, 100)
    );
});

// Email input: similar to username
emailInput.addEventListener("focus", (event) => {
    ears.forEach((ear) => ear.classList.add("active"));
    face.style.setProperty("--rotate-head", "5deg");
    hands.forEach((hand) => {
        hand.classList.remove("close-eyes");
        hand.classList.remove("peek");
    });
});

emailInput.addEventListener("blur", (event) => {
    ears.forEach((ear) => ear.classList.remove("active"));
    face.style.setProperty("--rotate-head", "0deg");
    hands.forEach((hand) => {
        hand.classList.remove("close-eyes");
        hand.classList.remove("peek");
    });
});

emailInput.addEventListener(
    "input",
    _.throttle((event) => {
        let length = Math.min(event.target.value.length - 16, 19);
        face.style.setProperty("--rotate-head", `${-length}deg`);
        ears.forEach((ear) => ear.classList.add("active"));
        setTimeout(() => ears.forEach((ear) => ear.classList.remove("active")), 300);
    }, 100)
);

// Password input: hands cover eyes
passwordInput.forEach((input) => {
    input.addEventListener("focus", (event) => {
        eyes.forEach((eye) => eye.classList.add("closed"));
        nose.classList.add("active");
        mouth.classList.add("active");
        document.querySelector(".tongue").classList.remove("breath");
        hands.forEach((hand) => {
            hand.classList.remove("peek");
            hand.classList.add("close-eyes");
        });
    });

    input.addEventListener("blur", (event) => {
        eyes.forEach((eye) => eye.classList.remove("closed"));
        nose.classList.remove("active");
        mouth.classList.remove("active");
        document.querySelector(".tongue").classList.add("breath");
        hands.forEach((hand) => {
            hand.classList.remove("close-eyes");
            hand.classList.remove("peek");
        });
    });
});

// Show/hide password: hands peek
showPasswordButton.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const passwordField = button.previousElementSibling;
        if (passwordField.type === "text") {
            passwordField.type = "password";
            button.textContent = "Show";
            eyes.forEach((eye) => eye.classList.add("closed"));
            nose.classList.remove("active");
            mouth.classList.remove("active");
            hands.forEach((hand) => {
                hand.classList.remove("peek");
                hand.classList.add("close-eyes");
            });
        } else {
            passwordField.type = "text";
            button.textContent = "Hide";
            eyes.forEach((eye) => eye.classList.remove("closed"));
            nose.classList.add("active");
            mouth.classList.add("active");
            hands.forEach((hand) => {
                hand.classList.remove("close-eyes");
                hand.classList.add("peek");
            });
        }
    });
});

// Login form submission handling
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    console.log("Login submitted:", {
        username,
        password
    });
    alert("Login attempt successful! (Placeholder)");
});

// Register form submission handling
registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.querySelector("#reg-username").value.trim();
    const email = document.querySelector("#reg-email").value.trim();
    const password = document.querySelector("#reg-password").value.trim();

    if (!username || !email || !password) {
        alert("Please fill in all fields: username, email, and password.");
        return;
    }

    console.log("Register submitted:", {
        username,
        email,
        password
    });
    alert("Registration attempt successful! (Placeholder)");
});