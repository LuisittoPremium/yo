const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si TE AMO DEMASIAO, DEMASIAO DEMASIAO :3')
    window.location.href = "carrusel.html";
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});

let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carrusel-slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const carrusel = document.querySelector('.carrusel');
    carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Opcional: Iniciar el carrusel automáticamente cada 3 segundos
setInterval(() => {
    moveSlide(1);
}, 3000);