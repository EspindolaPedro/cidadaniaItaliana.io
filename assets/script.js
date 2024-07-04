const btnMobile = document.getElementById("btn-mobile"); function toggleMenu(e) {
  if (e.type === 'touchstart') e.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  e.currentTarget.setAttribute('aria-expanded', 'true')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchsttart', toggleMenu);

const navLinks = document.querySelectorAll("#nav a");
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById("nav");
    nav.classList.remove("active");
    btnMobile.setAttribute('aria-expanded', 'false');
  });
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage()
}, 20000)

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

const slider = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
let startX, currentX, diffX;
let currentIndex = 0;



const handleTouchStart = (e) => {
  startX = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  currentX = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  diffX = startX - currentX;
  if (diffX > 40) {
    currentIndex = Math.min(currentIndex + 1, slides.length - 1);
  } else if (diffX < -40) {
    currentIndex = Math.max(currentIndex - 1, 0);
  }
  updateSlider();
};

const updateSlider = () => {
  const radioButtons = document.querySelectorAll('input[name="radio-btn"]');
  if (radioButtons[currentIndex]) {
    radioButtons[currentIndex].checked = true;
  }
};

// Eventos de toque
slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchmove', handleTouchMove);
slider.addEventListener('touchend', handleTouchEnd);


//Perguntass Frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}
function ativarPergunta(e) {
  const pergunta = e.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);
  resposta.classList.toggle('active');
  const active = resposta.classList.contains('active');

  pergunta.setAttribute('aria-expanded', active);

}
perguntas.forEach(eventosPerguntas);

//scroll
document.addEventListener('DOMContentLoaded', function() {
  const beneficioList = document.querySelector('.beneficio-list');
  
  function applyScrollbarStyles() {
    const beneficioList = document.querySelector('.beneficio-list');
    if (window.innerWidth <= 850) {
        beneficioList.style.overflowY = 'hidden';
        beneficioList.style.overflowX = 'scroll';
        beneficioList.style.webkitOverflowScrolling = 'touch';
        beneficioList.style.scrollbarWidth = 'thin';
        beneficioList.style.scrollbarColor = 'var(--point-detail) #faf6ed';
    }
  }
});

function sendMessage() {
  let message = document.getElementById('message').value;
  let encodedMessage = encodeURIComponent(message);
  let phoneNumber = '5567991522775';
  let url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
}

window.addEventListener('resize', applyScrollbarStyles);
window.addEventListener('DOMContentLoaded', applyScrollbarStyles);