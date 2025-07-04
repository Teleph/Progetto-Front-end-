const carouselArray = [
  {
    title: "Giocattolo Sonaglio",
    description: "Bambino, baby sonaglio.",
    img: "img/giocattolo1.png",
  },
  {
    title: "Orso Blocco giocattolo",
    description: "Giochi puzzle, giocattolo educativo.",
    img: "img/giocattolo2.png",
  },
  {
    title: "Giocattolo blocchi.",
    description: "Giocattoli educativi Veicolo",
    img: "img/giocattolo3.png",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  createCarousel();
});

function createCarousel() {
  const container = document.getElementById("carouselExampleCaptions");
  container.innerHTML = "";
  carouselArray.forEach((_, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    if (index === 0) {
      btn.classList.add("active");
      btn.setAttribute("aria-current", "true");
    }
  });
  const inner = document.createElement("div");
  inner.className = "carousel-inner";
  carouselArray.forEach((carousel, index) => {
    const item = document.createElement("div");
    item.className = "carousel-item" + (index === 0 ? " active" : "");
    item.innerHTML = `
      <img src="${carousel.img}" class="d-block img-carousel" alt="${carousel.title}">
      <div class="carousel-caption custom-text d-none d-md-block">
        <h5>${carousel.title}</h5>
        <p><strong>Categoria:</strong> ${carousel.description}</p>
      </div>
    `;
    inner.appendChild(item);
  });
  container.appendChild(inner);
}
