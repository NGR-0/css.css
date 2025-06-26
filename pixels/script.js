const cards = document.querySelectorAll(".cards");

cards.forEach((card) => {
  const pixelContainer = card.querySelector(".pixel-container");

  const pixSize = 20;
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;

  const cols = Math.floor(cardWidth / pixSize);
  const rows = Math.floor(cardHeight / pixSize);

  const pixelGrid = Array.from({ length: rows }, () => []);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");

      pixel.style.left = `${j * pixSize}px`;
      pixel.style.top = `${i * pixSize}px`;

      pixel.dataset.row = i;
      pixel.dataset.col = j;

      pixelGrid[i][j] = pixel;
      pixelContainer.appendChild(pixel);
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const pixel = pixelGrid[i][j];

      pixel.addEventListener("mouseenter", () => {
        const radius = 1;

        for (let dy = -radius; dy <= radius; dy++) {
          for (let dx = -radius; dx <= radius; dx++) {
            const ni = i + dy;
            const nj = j + dx;

            if (pixelGrid[ni] && pixelGrid[ni][nj]) {
              const targetPixel = pixelGrid[ni][nj];

              if (targetPixel.classList.contains("is-animating")) {
                continue;
              }

              const r = Math.floor(Math.random() * 256);
              const g = Math.floor(Math.random() * 256);
              const b = Math.floor(Math.random() * 256);
              targetPixel.style.background = `rgb(${r}, ${g}, ${b})`;

              targetPixel.classList.add("is-animating");

              targetPixel.addEventListener(
                  "animationend",
                  () => {
                    targetPixel.classList.remove("is-animating");

                  },
                  { once: true }
              );
            }
          }
        }
      });
    }
  }
});
