const spectrumContainer = document.querySelector('.visualizer');
const spectrumBars = [];

function getGradientByIndex(i, total) {
    const hue = Math.floor((i / total) * 360);
    const color1 = `hsl(${hue}, 100%, 60%)`;
    const color2 = `hsl(${(hue + 20) % 360}, 100%, 60%)`;
    return {
        gradient: `linear-gradient(to top, ${color1}, ${color2})`,
        baseColor: color1
    };
}

function createSpectrum(i) {
    const spectrum = document.createElement('div');
    spectrum.classList.add('spectrum');

    const width = 3;
    const height = 200;

    spectrum.style.width = `${width}px`;
    spectrum.style.height = `${height}px`;

    const { gradient, baseColor } = getGradientByIndex(i, 150);
    spectrum.style.background = gradient;
    spectrum.dataset.color = baseColor;
    spectrum.style.webkitBoxReflect = 'below 2px linear-gradient(transparent, rgba(0,0,0,0.7))';

    spectrumContainer.appendChild(spectrum);
    spectrumBars.push(spectrum);

    spectrum.addEventListener('mouseenter', () => {
        for (let j = -10; j <= 10; j++) {
            const index = i + j;
            if (index >= 0 && index < spectrumBars.length) {
                const distance = Math.abs(j);
                const factor = 1 - distance * 0.1;
                const baseHeight = 200;
                const height = baseHeight * factor + 200;

                spectrumBars[index].style.height = `${height}px`;
            }
        }
    });

    spectrum.addEventListener('mouseleave', () => {
        for (let j = -10; j <= 10; j++) {
            const index = i + j;
            if (index >= 0 && index < spectrumBars.length) {
                spectrumBars[index].style.height = '200px';
            }
        }
    });
}

for (let i = 0; i < 120; i++) {
    createSpectrum(i);
}