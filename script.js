// Fungsi untuk menambahkan efek scroll smooth pada link navigasi
function addSmoothScroll() {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const target = document.querySelector(event.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Panggil fungsi untuk menambahkan efek scroll smooth
addSmoothScroll();
