// ======================================
// TYPING ANIMATION
// ======================================

const typingText = document.getElementById("typingText");

const message = "Heyyy Shayaali 💖";

let index = 0;

function typeText() {

    if (index < message.length) {

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeText, 120);

    }

}

window.addEventListener("load", () => {

    typeText();

});

// ======================================
// BACKGROUND MUSIC
// ======================================

const music = document.getElementById("bgMusic");

const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

function toggleMusic() {

    if (!musicPlaying) {

        music.play();

        musicButton.innerHTML = "🔇";

        musicPlaying = true;

    }

    else {

        music.pause();

        musicButton.innerHTML = "🔊";

        musicPlaying = false;

    }

}

musicButton.addEventListener("click", toggleMusic);

// ======================================
// OPEN BUTTON
// ======================================

const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    document.querySelector(".pageTransition").style.transform = "scaleY(1)";

    setTimeout(() => {

        window.location.href = "memories.html";

    }, 800);

});

// ======================================
// FADE-IN ANIMATION
// ======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".fadeIn").forEach((item) => {

    observer.observe(item);

});
// ======================================
// THEME TOGGLE
// ======================================

const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeButton.innerHTML="☀️";

    }

    else{

        themeButton.innerHTML="🌙";

    }

});

// ======================================
// GIFT POPUP
// ======================================

const popup=document.getElementById("giftPopup");

const giftButton=document.getElementById("openGift");

const closePopup=document.querySelector(".closePopup");

setTimeout(()=>{

    popup.style.display="flex";

},10000);

closePopup.addEventListener("click",()=>{

    popup.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});

giftButton.addEventListener("click",()=>{

    popup.innerHTML=`

    <div class="popupContent">

        <h1>💖</h1>

        <h2>I Love You, Shayaali</h2>

        <p>

        I hope every smile you smile today comes back to you a hundred times.

        Thank you for existing.

        Happy 15th Birthday ❤️

        </p>

    </div>

    `;

});

// ======================================
// SECRET MESSAGE
// ======================================

const secret=document.getElementById("secretMessage");

function showSecret(text){

    secret.innerHTML=text;

    secret.style.opacity="1";

    setTimeout(()=>{

        secret.style.opacity="0";

    },3500);

}

// ======================================
// RANDOM LOVE MESSAGES
// ======================================

const messages=[

"🌸 You're my favourite person.",

"💖 I love your smile.",

"🦋 You're beautiful.",

"✨ You're my comfort.",

"🌷 Thank you for being you.",

"💕 You make every day brighter.",

"🤍 Forever my favorite girl.",

"🌹 Happy Birthday Princess."

];

setInterval(()=>{

    const random=

    messages[Math.floor(Math.random()*messages.length)];

    showSecret(random);

},18000);

// ======================================
// KEYBOARD EASTER EGGS
// ======================================

document.addEventListener("keydown",(event)=>{

    switch(event.key.toLowerCase()){

        case "s":

            showSecret("🌸 S is for Shayaali.");

            break;

        case "l":

            showSecret("❤️ Love You Forever.");

            break;

        case "h":

            showSecret("🤗 Sending You A Huge Hug!");

            break;

        case "b":

            showSecret("🎂 Happy Birthday Pretty Girl!");

            break;

    }

});
// ======================================
// CONFETTI EFFECT
// ======================================

const confettiContainer = document.getElementById("confettiContainer");

function createConfetti() {

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";

    confetti.style.background =
        `hsl(${Math.random() * 360}, 100%, 75%)`;

    confetti.style.animationDuration =
        (Math.random() * 2 + 3) + "s";

    confettiContainer.appendChild(confetti);

    setTimeout(() => {

        confetti.remove();

    }, 5000);

}

setInterval(createConfetti, 300);

// ======================================
// HEARTS ON CLICK
// ======================================

document.addEventListener("click", function(e){

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.fontSize="28px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="9999";

    heart.style.transition="all 1.5s ease";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-80px) scale(1.6)";

        heart.style.opacity="0";

    },20);

    setTimeout(()=>{

        heart.remove();

    },1500);

});

// ======================================
// SPARKLE CURSOR
// ======================================

document.addEventListener("mousemove",(e)=>{

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=e.clientX+"px";

    sparkle.style.top=e.clientY+"px";

    sparkle.style.fontSize="12px";

    sparkle.style.pointerEvents="none";

    sparkle.style.opacity=".8";

    sparkle.style.transition="all .8s linear";

    sparkle.style.zIndex="9999";

    document.body.appendChild(sparkle);

    requestAnimationFrame(()=>{

        sparkle.style.transform="translateY(-25px) scale(0)";

        sparkle.style.opacity="0";

    });

    setTimeout(()=>{

        sparkle.remove();

    },800);

});

// ======================================
// ATTEMPT MUSIC AUTOPLAY
// ======================================

window.addEventListener("click",()=>{

    if(!musicPlaying){

        music.play().then(()=>{

            musicPlaying=true;

            musicButton.innerHTML="🔇";

        }).catch(()=>{});

    }

},{once:true});

// ======================================
// SMOOTH PAGE FADE
// ======================================

window.addEventListener("pageshow",()=>{

    document.body.style.opacity="0";

    document.body.style.transition="opacity .8s";

    requestAnimationFrame(()=>{

        document.body.style.opacity="1";

    });

});

// ======================================
// HAPPY BIRTHDAY CONSOLE MESSAGE
// ======================================

console.log(`
🎂 Happy Birthday Shayaali!

If you're reading this...

You're amazing.

Have the most wonderful 15th birthday! 💖
`);