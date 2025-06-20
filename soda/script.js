const foamContainer = document.querySelector('.soda');
const Move=['move1', 'move2', 'move3', 'move4', 'move5','move6','move7','move8','move9','move10'];


function createFoam() {
    const foam = document.createElement('div');
    foam.classList.add('foam');

    respawnFoam(foam);

    foamContainer.appendChild(foam);

    return foam;
}


function respawnFoam(foam) {
    const size = Math.random() * 10 + 5;
    foam.style.width = `${size}px`;
    foam.style.height = `${size}px`;

    const left = Math.random() * 120;
    const top = Math.random() * 120;
    foam.style.left = `${left}%`;
    foam.style.top = `${top}%`;

    const duration = Math.random() * 20+1;
    const delay = Math.random() * 20+15;
    const randomIndex = Math.floor(Math.random() * Move.length);
    const animationName = Move[randomIndex];

    foam.style.animation = animationName;
    foam.style.animation = `${animationName} ${duration}s linear infinite`;

}

for (let i = 0; i < 1000; i++) {
    createFoam(i);
}
