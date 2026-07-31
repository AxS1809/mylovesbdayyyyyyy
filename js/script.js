/* ==========================================
   MUSIC
========================================== */

const music = document.getElementById("music");

music.volume = 0.35;

document.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });

/* ==========================================
   FLOATING HEARTS
========================================== */

const hearts = document.querySelector(".hearts");

const emojis = ["❤️","💖","💕","🤍"];

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (16 + Math.random()*12) + "px";

    heart.style.animationDuration = (6 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,450);

/* ==========================================
   CINEMATIC SLIDESHOW
========================================== */

const cinemaImage = document.getElementById("cinemaImage");
const cinemaCaption = document.getElementById("cinemaCaption");

const slides = [

{image:"assets/photos/1.jpg",text:"The Cutest Girl ❤️"},
{image:"assets/photos/2.jpg",text:"The Prettiest Smile 🌸"},
{image:"assets/photos/3.jpg",text:"My Favourite Person 🤍"},
{image:"assets/photos/4.jpg",text:"The Sweetest Soul 💕"},
{image:"assets/photos/5.jpg",text:"Sunshine ☀️"},
{image:"assets/photos/6.jpg",text:"My Happy Place ❤️"},
{image:"assets/photos/7.jpg",text:"Forever Beautiful ✨"},
{image:"assets/photos/8.jpg",text:"My Safe Place 🥹"}

];

let current = 0;

function changeSlide(){

    cinemaImage.style.opacity = "0";
    cinemaCaption.style.opacity = "0";

    cinemaImage.style.transform = "scale(.96)";

    setTimeout(()=>{

        current++;

        if(current >= slides.length){

            current = 0;

        }

        cinemaImage.src = slides[current].image;

        cinemaCaption.innerHTML = slides[current].text;

        cinemaImage.style.opacity = "1";
        cinemaCaption.style.opacity = "1";

        cinemaImage.style.transform = "scale(1)";

    },700);

}

setInterval(changeSlide,2500);

/* ==========================================
   SCROLL REVEAL
========================================== */

const sections = document.querySelectorAll(".memory,.ending");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

sections.forEach(section=>{

section.classList.add("fade");

observer.observe(section);

});
/* ==========================================
FINAL SURPRISE
========================================== */

const gift = document.getElementById("gift");
const surprise = document.getElementById("surprise");

if(gift){

gift.onclick = () => {

gift.style.display = "none";

surprise.style.display = "block";

launchConfetti();

};

}

/* ==========================================
CONFETTI
========================================== */

function launchConfetti(){

for(let i=0;i<180;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.style.left=Math.random()*100+"vw";

piece.style.animationDelay=Math.random()+"s";

piece.style.background=

`hsl(${Math.random()*360},90%,70%)`;

document.body.appendChild(piece);

setTimeout(()=>{

piece.remove();

},5000);

}

}