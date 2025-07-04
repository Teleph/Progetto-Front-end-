const productCards = [
  {
    id: 1,
    img: "img/toys_buy1.png",
    title: "Giocattolo in legno",
    price: "€24,99",
  },
  {
    id: 2,
    img: "img/toys_buy2.png",
    title: "Pirata giocattolo",
    price: "€17,99",
  },
  {
    id: 2,
    img: "img/toys_buy3.png",
    title: "Cubo per bambini",
    price: "€34,99",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  createCard();
});

function createCard() {
  const container = document.querySelector(".container-card");

  productCards.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card p-3";
    card.innerHTML = `
      <img class="img" src="${product.img}" alt="" />
      <p class="obj-title">${product.title}</p>
      <p class="price">${product.price}</p>
      <div class="d-flex align-items-center gap-1">
      <i class="fa-solid fa-cart-plus"></i>
       <button class="btn-buy">Acquista il prodotto</button>
       <i class="fa-solid fa-star"></i>
      </div>
    `;
    container.appendChild(card);
  });
}