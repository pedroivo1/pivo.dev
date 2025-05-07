const allLinks = document.querySelectorAll("header nav ul li a");
const navLinks = Array.from(allLinks).slice(1);
const sections = document.querySelectorAll("main section");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);

    // Esconde todas as seções
    sections.forEach((section) => {
      section.classList.remove("section-on");
    });
    // Mostra a seção alvo
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("section-on");
    }

    // Remove 'on' de todos os links
    navLinks.forEach((link) => {
      link.classList.remove("on");
    });
    // Adiciona 'on' só ao clicado
    this.classList.add("on");
  });
});
