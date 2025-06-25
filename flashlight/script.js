const paper = document.getElementById('paper');

paper.addEventListener('mousemove', (e) => {
    const rect = paper.getBoundingClientRect();
    const scale = 1.2;

    const offsetX = (e.clientX - rect.left) / scale;
    const offsetY = (e.clientY - rect.top) / scale;

    paper.style.setProperty('--x', offsetX + 'px');
    paper.style.setProperty('--y', offsetY + 'px');
    paper.classList.add('active-spotlight');
});

paper.addEventListener('mouseleave', () => {
    paper.style.setProperty('--x', '-1000px');
    paper.style.setProperty('--y', '-1000px');
    paper.classList.remove('active-spotlight');
});
