const cardsContacts = [
  {
    name: "Maria Rossi",
    description:
      "Fondatrice e appassionata di giocattoli educativi, crede nel gioco come strumento di crescita.",
    img: "img/maria_rossi.jpg",
  },
  {
    name: "Luca Bianchi",
    description:
      "Esperto in design di giocattoli sicuri e innovativi, sempre alla ricerca di novità.",
    img: "img/giulia.jpg",
  },
  {
    name: "Giulia Verdi",
    description:
      "Customer care e assistenza, sempre pronta a rispondere con gentilezza e competenza.",
    img: "img/luca_bianchi.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  createCardsContacts();
});

function createCardsContacts() {
  const container = document.getElementById("cards-contacts");

  cardsContacts.forEach((contact) => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card m-auto shadow-md">
        <img src="${contact.img}" class="card-img-top" alt="${contact.name}" />
        <div class="card-body">
          <h5 class="card-title">${contact.name}</h5>
          <p class="card-text">${contact.description}</p>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}
