const stars = document.getElementById("stars");
const sparkles = document.getElementById("sparkles");
const hearts = document.getElementById("hearts");
const petals = document.getElementById("petals");
const fireflies = document.getElementById("fireflies");
const butterflies = document.getElementById("butterflies");

if (!stars || !sparkles || !hearts || !petals || !fireflies || !butterflies) {
    console.warn("Particle containers not found.");
} else {

    // EVERYTHING ELSE IN THIS FILE GOES HERE

}
/* ===========================================
   PREMIUM PARTICLE ENGINE
=========================================== */

const stars = document.getElementById("stars");
const sparkles = document.getElementById("sparkles");
const hearts = document.getElementById("hearts");
const petals = document.getElementById("petals");
const fireflies = document.getElementById("fireflies");
const butterflies = document.getElementById("butterflies");

/* -----------------------------
STARS
------------------------------ */

for(let i=0;i<180;i++){

    const star=document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*8+"s";

    star.style.animationDuration=(4+Math.random()*8)+"s";

    star.style.transform=`scale(${Math.random()+0.3})`;

    stars.appendChild(star);

}

/* -----------------------------
SPARKLES
------------------------------ */

for(let i=0;i<70;i++){

    const sparkle=document.createElement("span");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.animationDelay=Math.random()*5+"s";

    sparkle.style.animationDuration=(5+Math.random()*6)+"s";

    sparkles.appendChild(sparkle);

}

/* -----------------------------
HEARTS
------------------------------ */

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(14+Math.random()*20)+"px";

    heart.style.animationDuration=(8+Math.random()*6)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },14000);

},600);

/* -----------------------------
PETALS
------------------------------ */

setInterval(()=>{

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=(18+Math.random()*16)+"px";

    petal.style.animationDuration=(10+Math.random()*6)+"s";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },18000);

},500);

/* -----------------------------
FIREFLIES
------------------------------ */

for(let i=0;i<35;i++){

    const fly=document.createElement("span");

    fly.className="firefly";

    fly.style.left=Math.random()*100+"vw";

    fly.style.top=Math.random()*100+"vh";

    fly.style.animationDelay=Math.random()*8+"s";

    fly.style.animationDuration=(6+Math.random()*5)+"s";

    fireflies.appendChild(fly);

}

/* -----------------------------
BUTTERFLIES
------------------------------ */

const butterflySVG = `
<svg width="38" height="38" viewBox="0 0 64 64">
<path fill="#ffd5f0"
d="M32 28
C22 10 5 10 9 30
C11 40 20 45 30 34
C25 50 15 60 32 60
C49 60 39 50 34 34
C44 45 53 40 55 30
C59 10 42 10 32 28Z"/>
</svg>`;

function createButterfly(){

    const b=document.createElement("div");

    b.className="butterfly";

    b.innerHTML=butterflySVG;

    b.style.left="-80px";

    b.style.top=Math.random()*80+"vh";

    b.style.animationDuration=(16+Math.random()*10)+"s";

    butterflies.appendChild(b);

    setTimeout(()=>{

        b.remove();

    },26000);

}

setInterval(createButterfly,3500);

createButterfly();