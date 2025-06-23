const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

const signInSubmitBtn = document.querySelector('.form-container.sign-in button');
const signUpSubmitBtn = document.querySelector('.form-container.sign-up button');

const toggleLeftH1 = document.querySelector('.toggle-left h1');
const toggleRightH1 = document.querySelector('.toggle-right h1');

const originalLeftText = toggleLeftH1.textContent;
const originalRightText = toggleRightH1.textContent;

const resetSubmitAnimation = () => {
    container.classList.remove('is-submitting');
    setTimeout(() => {
        toggleLeftH1.textContent = originalLeftText;
        toggleRightH1.textContent = originalRightText;
    }, 600);
};

const triggerSubmitAnimation = (event, message) => {
    event.preventDefault();

    if (container.classList.contains('active')) {
        toggleLeftH1.innerHTML = message;
    } else {
        toggleRightH1.innerHTML = message;
    }

    container.classList.add('is-submitting');

    setTimeout(resetSubmitAnimation, 4000);
};

const checkmarkIcon = '<i class="fa-solid fa-circle-check"></i>';

signInSubmitBtn.addEventListener('click', (event) => {
    triggerSubmitAnimation(event, checkmarkIcon);
});

signUpSubmitBtn.addEventListener('click', (event) => {
    triggerSubmitAnimation(event, checkmarkIcon);
});
