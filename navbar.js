const navbarArray = [
  { title: "Cards", href: "#cards" },
  { title: "Chi siamo", href: "#chi_siamo" },
  { title: "Contatti", href: "#contatti" },
];

document.addEventListener("DOMContentLoaded", () => {
  createNavbarLinks();
});

function createNavbarLinks() {
  const ul = document.getElementById("navbar-links");

  navbarArray.forEach((nav) => {
    const li = document.createElement("li");
    li.className = "nav-item";

    li.innerHTML = `<a class="nav-link section-title fw-bold" href="${nav.href}">${nav.title}</a>`;

    ul.appendChild(li);
  });
}
