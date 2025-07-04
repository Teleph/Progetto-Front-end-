const infoObj = {
  email: 'test@gmail.com',
  telephone: '+39 1234567890',
  location: 'NY(US)',
};

document.addEventListener("DOMContentLoaded", () => {
  createInfo();
  createForm();
});

function createInfo() {
  const container = document.getElementById("infoContatti");

  const info = document.createElement("div");
  info.classList.add("row", "text-center");

  info.innerHTML = `
    <div class="col">
      <p class="card-text"><strong>Indirizzo email:</strong> ${infoObj.email}</p>
      <p class="card-text"><strong>Telefono:</strong> ${infoObj.telephone}</p>
      <p class="card-text"><strong>Luogo:</strong> ${infoObj.location}</p>
    </div>
  `;

  container.appendChild(info);
}

function createForm() {
  const formContainer = document.getElementById("formContatti");

  const form = document.createElement("form");
  form.className = "custom-form mx-auto p-4 rounded shadow";
  form.action = "#";

  form.innerHTML = `
    <div class="mb-3">
      <label for="nome" class="form-label">Nome</label>
      <input type="text" class="form-control" id="nome" placeholder="Inserisci il nome..." />
    </div>
    <div class="mb-3">
      <label for="cognome" class="form-label">Cognome</label>
      <input type="text" class="form-control" id="cognome" placeholder="Inserisci il cognome..." />
    </div>
    <div class="mb-3">
      <label for="messaggio" class="form-label">Messaggio</label>
      <textarea class="form-control" id="messaggio" rows="3" placeholder="Scrivi qui il tuo messaggio..."></textarea>
    </div>
    <div class="d-flex justify-content-between">
      <button type="submit" class="btn btn-warning px-4 shadow-sm">Invia</button>
      <button type="reset" class="btn btn-outline-danger px-4 shadow-sm">Reset</button>
    </div>
  `;

  formContainer.appendChild(form);
}
