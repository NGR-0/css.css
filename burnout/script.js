const smokeContainer = document.querySelector('.smoke');
const animateSmoke = [
    'smk1', 'smk2', 'smk3', 'smk4', 'smk5',
    'smk6', 'smk7', 'smk8', 'smk9', 'smk10',
    'smk11', 'smk12', 'smk13', 'smk14', 'smk15'
];

let smokeInterval;
let props = 1;

function createSmoke(props) {
    const smoke = document.createElement('span');
    const randomIndex = Math.floor(Math.random() * animateSmoke.length);
    const animationName = animateSmoke[randomIndex];
    const duration = Math.random() * 3 + 1;
    const delay = props * -1.5;

    smoke.style.setProperty('--i', props);
    smoke.style.animationDelay = `${delay}s`;
    smoke.style.animation = `${animationName} ${duration}s linear forwards infinite`;

    smokeContainer.appendChild(smoke);

    if (smokeContainer.children.length > 61) {
        smokeContainer.removeChild(smokeContainer.firstChild);
    }
}

function startSmoke(rate) {
    clearInterval(smokeInterval);
    smokeInterval = setInterval(() => {
        createSmoke(props++);
    }, rate);
}
function stopSmoke(rate) {
    clearInterval(smokeInterval);
    smokeInterval = setInterval(() => {
        smokeContainer.removeChild(smokeContainer.firstChild);
    }, rate);
}

function SmokeCycle() {

    setTimeout(() => {
        startSmoke(100);
    }, 2000);

    setTimeout(() => {
        stopSmoke(50);
    }, 15000);

    setTimeout(SmokeCycle, 20000);
}

SmokeCycle()