const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(e) {
    if (e.type === 'touchstart') e.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    e.currentTarget.setAttribute('aria-expanded', 'true')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchsttart', toggleMenu);

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage()
}, 15000)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let startX, endX, diffX;
let currentIndex = 0;

const handleTouchStart = (e) => {
    startX = e.touches[e].clientX;
};

const handleTouchMove = (e) => {
    endX = e.touches[0].clientX
}

const handleTouchEnd = (e) => {
    diffX = startX - endX;
    if (diffX > 50) {
        currentIndex - Math.min(currentIndex + 1, slides.length - 1);
    } else if (diffX < -50) {
        currentIndex = Math.max(currentIndex - 1, 0)
    }
    updateSlider();
};

const updateSlider = (e) => {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
};
 

slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchmove', handleTouchMove);
slider.addEventListener('touchend', handleTouchEnd);