// Mensaje de bienvenida en la consola
console.log('Bienvenido a la Revista Digital');

// Animación de barras de la gráfica
function animarBarras() {
  const grafica = document.getElementById('anim-grafica');
  if (!grafica) return;
  const barras = grafica.querySelectorAll('.barra-valor');
  barras[0].style.width = '90%';
  barras[1].style.width = '63%';
  barras[2].style.width = '61%';
  barras[3].style.width = '55%';
  grafica.classList.add('animada');
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0
  );
}

// Fade-in para header y footer
window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  if (header) {
    header.style.opacity = 0;
    header.style.transform = 'translateY(-40px)';
    setTimeout(() => {
      header.style.transition = 'opacity 1.1s, transform 1.1s';
      header.style.opacity = 1;
      header.style.transform = 'none';
    }, 100);
  }
  if (footer) {
    footer.style.opacity = 0;
    footer.style.transform = 'translateY(40px)';
    setTimeout(() => {
      footer.style.transition = 'opacity 1.1s, transform 1.1s';
      footer.style.opacity = 1;
      footer.style.transform = 'none';
    }, 400);
  }
  // Animación de la gráfica si ya está en pantalla
  const grafica = document.getElementById('anim-grafica');
  if (grafica && isInViewport(grafica)) {
    animarBarras();
  }
});

// Rebote en el menú al hacer scroll
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = '#4a4e69';
    nav.style.transition = 'background 0.3s';
    nav.classList.add('nav-bounce');
    setTimeout(() => nav.classList.remove('nav-bounce'), 350);
  } else {
    nav.style.background = 'transparent';
  }
  // Animar barras si la gráfica entra en pantalla
  const grafica = document.getElementById('anim-grafica');
  if (grafica && isInViewport(grafica) && !grafica.classList.contains('animada')) {
    animarBarras();
  }
  lastScrollY = window.scrollY;
});
