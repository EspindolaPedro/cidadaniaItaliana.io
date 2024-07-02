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