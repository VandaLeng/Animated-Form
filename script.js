let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let showPasswordButton = document.querySelector(".password-button");
let face = document.querySelector(".face");
let ears = document.querySelectorAll(".ear");
let eyes = document.querySelectorAll(".eye");
let nose = document.querySelector(".nose");
let mouth = document.querySelector(".mouth");
let hands = document.querySelectorAll(".hand");
let loginForm = document.querySelector("#login-form");

// Username input: head rotation and ear wiggle
usernameInput.addEventListener("focus", (event) => {
    ears.forEach((ear) => ear.classList.add("active"));
    face.style.setProperty("--rotate-head", "5deg");
    hands.forEach((hand) => {
        hand.classList.remove("close-eyes");
        hand.classList.remove("peek");
    });
});

usernameInput.addEventListener("blur", (event) => {
    ears.forEach((ear) => ear.classList.remove("active"));
    face.style.setProperty("--rotate-head", "0deg");
    hands.forEach((hand) => {
        hand.classList.remove("close-eyes");
        hand.classList.remove("peek");
    });
});

usernameInput.addEventListener(
    "input",
    _.throttle((event) => {
        let length = Math.min(event.target.value.length - 16, 19);
        face.style.setProperty("--rotate-head", `${-length}deg`);
        ears.forEach((ear) => ear.classList.add("active"));
        setTimeout(() => ears.forEach((ear) => ear.classList.remove("active")), 300);
    }, 100)
);

// Password input: hands cover eyes
passwordInput.addEventListener("focus", (event) => {
    eyes.forEach((eye) => eye.classList.add("closed"));
    nose.classList.add("active");
    mouth.classList.add("active");
    document.querySelector(".tongue").classList.remove("breath");
    hands.forEach((hand) => {
        hand.classList.remove("peek");
        hand.classList.add("close-eyes");
    });
});

passwordInput.addEventListener("blur", (event) => {
    eyes.forEach((eye) => eye.classList.remove("closed"));
    nose.classList.remove("active");
    mouth.classList.remove("active");
    document.querySelector(".tongue").classList.add("breath");
    hands.forEach((hand) => {
        hand.classList.remove("close-eyes");
        hand.classList.remove("peek");
    });
});

// Show/hide password: hands peek
showPasswordButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default button behavior
    if (passwordInput.type === "text") {
        passwordInput.type = "password";
        showPasswordButton.textContent = "Show";
        eyes.forEach((eye) => eye.classList.add("closed"));
        nose.classList.remove("active");
        mouth.classList.remove("active");
        hands.forEach((hand) => {
            hand.classList.remove("peek");
            hand.classList.add("close-eyes");
        });
    } else {
        passwordInput.type = "text";
        showPasswordButton.textContent = "Hide";
        eyes.forEach((eye) => eye.classList.remove("closed"));
        nose.classList.add("active");
        mouth.classList.add("active");
        hands.forEach((hand) => {
            hand.classList.remove("close-eyes");
            hand.classList.add("peek");
        });
    }
});

// Form submission handling
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Placeholder for actual form submission logic (e.g., send to server)
    console.log("Form submitted:", {
        username,
        password
    });
    // Example: You can add an AJAX call here to send data to a server
    // fetch('/your-login-endpoint', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));

    alert("Login attempt successful! (Placeholder)");
});