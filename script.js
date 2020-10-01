/* CARROUSEL */

const imgCarrousel = document.getElementsByClassName('carrousel-img');
let imgActive = 0;
imgCarrousel[imgActive].classList.add('show');


for (let i = 1; i < imgCarrousel.length; i++) {
    imgCarrousel[i].classList.add('hidden');
}

// Clic bouton suivant
document.querySelector('.carrousel-next').addEventListener('click', function(){
    next();
});

// Clic bouton précédent
document.querySelector('.carrousel-prev').addEventListener('click', function(){
    prev();
});

// Fonction next
const next = () => {
    imgCarrousel[imgActive].classList.remove('show');
    imgCarrousel[imgActive].classList.add('hidden');
    imgActive +=1;
    if (imgActive >= imgCarrousel.length) {
        imgActive = 0;
    }
    imgCarrousel[imgActive].classList.remove('hidden');
    setTimeout(() => {
        imgCarrousel[imgActive].classList.add('show');
    }, 100);
};

// Fonction prev
const prev = () => {
    imgCarrousel[imgActive].classList.remove('show');
    imgCarrousel[imgActive].classList.add('hidden');
    imgActive -=1;
    if (imgActive < 0) {
        imgActive = imgCarrousel.length-1;
    }
    imgCarrousel[imgActive].classList.remove('hidden');
    setTimeout(() => {
        imgCarrousel[imgActive].classList.add('show');
    }, 100);
};


let interval;
let playIcon = document.querySelector('.fa-play');
let pauseIcon = document.querySelector('.fa-pause');

// Clic bouton play
document.getElementById('play').addEventListener('click', function(){
    interval = setInterval(next, 5000);
    playIcon.classList.add('active');
    pauseIcon.classList.remove('active');
});

// Clic bouton pause
document.getElementById('pause').addEventListener('click', function(){
    clearInterval(interval);
    playIcon.classList.remove('active');
    pauseIcon.classList.add('active');
});

const autoPlay = () => {
    interval = setInterval(next, 5000);
    playIcon.classList.add('active');
}

autoPlay();
