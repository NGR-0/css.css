const starContainer = document.querySelector('.sky');
const twinkle = ['twinkle1', 'twinkle2', 'twinkle3', 'twinkle4', 'twinkle5'];

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    const duration = Math.random() * 30+2;
    const delay = Math.random() * 20+15;
    const randomIndex = Math.floor(Math.random() * twinkle.length);
    const animationName = twinkle[randomIndex];

    star.style.animationDelay = `${delay}s`;
    star.style.animation = `${animationName} ${duration}s linear infinite`;

    starContainer.appendChild(star);
}

for (let i = 0; i < 1000; i++) {
    createStar();
}

