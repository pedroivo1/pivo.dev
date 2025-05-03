const navLinks = document.querySelectorAll('header nav ul li a');
const sections = document.querySelectorAll('main section');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    sections.forEach(section => {
      section.setAttribute('hidden', 'true');
    });
    navLinks.forEach(link => {
      link.classList.remove('on');
    });
    this.classList.add('on');
    

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.removeAttribute('hidden');
    }
  });
});
