const smokeContainer = document.querySelector('.smoke');
const animateSmoke = ['smk1', 'smk2', 'smk3', 'smk4', 'smk5', 'smk6', 'smk7', 'smk8', 'smk9', 'smk10','smk11','smk12','smk13','smk14','smk15'];

function createSmoke(props) {
    const smoke = document.createElement('span');

    const randomIndex = Math.floor(Math.random() * animateSmoke.length);
    const animationName = animateSmoke[randomIndex];
    const duration = Math.random() * 3+1;

    smoke.style.setProperty('--i', props);
    const delay = props * -1;

    smoke.style.animationDelay = `${delay}s`;
    smoke.style.animation = `${animationName} ${duration}s linear infinite`;

    smokeContainer.appendChild(smoke);

}

for (let i = 1; i < 61; i++) {
    createSmoke(i);
}