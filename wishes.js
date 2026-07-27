/* ==========================================
   ELEMENTS
========================================== */

const giftBox = document.getElementById("giftBox");
const surpriseSection = document.getElementById("surpriseSection");
const replayButton = document.getElementById("replayButton");
const music = document.getElementById("endingMusic");
const fireworks = document.getElementById("fireworks");
const confetti = document.getElementById("confetti");

let opened = false;

/* ==========================================
   OPEN GIFT
========================================== */

giftBox.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    giftBox.classList.add("open");

    setTimeout(() => {

        surpriseSection.classList.add("show");

        surpriseSection.scrollIntoView({

            behavior: "smooth"

        });

    }, 900);

    music.play().catch(() => {});

    launchFireworks();

    launchConfetti();

});

/* ==========================================
   FIREWORKS
========================================== */

function launchFireworks() {

    for (let i = 0; i < 25; i++) {

        setTimeout(createFirework, i * 250);

    }

}

function createFirework() {

    const firework = document.createElement("div");

    firework.className = "firework";

    firework.style.left = Math.random() * window.innerWidth + "px";

    firework.style.top = Math.random() * window.innerHeight + "px";

    fireworks.appendChild(firework);

    setTimeout(() => {

        firework.remove();

    }, 1200);

}

/* ==========================================
   CONFETTI
========================================== */

function launchConfetti(){

    for(let i=0;i<250;i++){

        setTimeout(createConfetti,i*10);

    }

}

function createConfetti(){

    const piece=document.createElement("div");

    piece.className="confettiPiece";

    piece.style.left=Math.random()*window.innerWidth+"px";

    piece.style.backgroundColor=

    ["#ff4f93","#ffd166","#7bdff2","#cdb4db","#b8f2e6"]

    [Math.floor(Math.random()*5)];

    piece.style.animationDuration=

    (3+Math.random()*3)+"s";

    confetti.appendChild(piece);

    setTimeout(()=>{

        piece.remove();

    },6000);

}
/* ==========================================
   SPARKLE CURSOR
========================================== */

document.addEventListener("mousemove",(e)=>{

    if(Math.random()>0.35) return;

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=e.clientX+"px";

    sparkle.style.top=e.clientY+"px";

    sparkle.style.fontSize="14px";

    sparkle.style.pointerEvents="none";

    sparkle.style.zIndex="9999";

    sparkle.style.transition="all .8s linear";

    document.body.appendChild(sparkle);

    requestAnimationFrame(()=>{

        sparkle.style.transform="translateY(-25px) scale(0)";

        sparkle.style.opacity="0";

    });

    setTimeout(()=>{

        sparkle.remove();

    },800);

});

/* ==========================================
   HEART BURST
========================================== */

document.addEventListener("click",(e)=>{

    if(!opened) return;

    for(let i=0;i<8;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=e.clientX+"px";

        heart.style.top=e.clientY+"px";

        heart.style.fontSize=(18+Math.random()*18)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        heart.style.transition="all 1.5s ease-out";

        document.body.appendChild(heart);

        const x=(Math.random()-0.5)*250;

        const y=(Math.random()-0.5)*250;

        requestAnimationFrame(()=>{

            heart.style.transform=
                `translate(${x}px,${y}px)
                rotate(${Math.random()*720}deg)
                scale(.4)`;

            heart.style.opacity="0";

        });

        setTimeout(()=>{

            heart.remove();

        },1500);

    }

});

/* ==========================================
   RANDOM TWINKLE
========================================== */

setInterval(()=>{

    const star=document.createElement("div");

    star.innerHTML="⭐";

    star.style.position="fixed";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*window.innerHeight+"px";

    star.style.fontSize=(10+Math.random()*12)+"px";

    star.style.pointerEvents="none";

    star.style.opacity=".9";

    star.style.transition="all 1.5s ease";

    document.body.appendChild(star);

    requestAnimationFrame(()=>{

        star.style.transform="scale(2)";

        star.style.opacity="0";

    });

    setTimeout(()=>{

        star.remove();

    },1500);

},350);

/* ==========================================
   REPLAY BUTTON
========================================== */

replayButton.addEventListener("click",()=>{

    document.body.style.transition="opacity .8s";

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="index.html";

    },800);

});

/* ==========================================
   PRELOAD FINAL IMAGE
========================================== */

const preload=new Image();

preload.src="images/final.jpg";
/* ==========================================
   FIREWORK PARTICLES
========================================== */

function explode(x, y){

    for(let i = 0; i < 35; i++){

        const particle = document.createElement("div");

        particle.style.position = "fixed";
        particle.style.left = x + "px";
        particle.style.top = y + "px";
        particle.style.width = "8px";
        particle.style.height = "8px";
        particle.style.borderRadius = "50%";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "9999";

        particle.style.background =
        ["#ff4f93","#ffd166","#7bdff2","#cdb4db","#b8f2e6"]
        [Math.floor(Math.random()*5)];

        document.body.appendChild(particle);

        const angle = Math.random()*Math.PI*2;
        const distance = 80 + Math.random()*180;

        particle.animate([
            {
                transform:"translate(0,0) scale(1)",
                opacity:1
            },
            {
                transform:`translate(${Math.cos(angle)*distance}px,
                ${Math.sin(angle)*distance}px) scale(0)`,
                opacity:0
            }
        ],{
            duration:1200,
            easing:"ease-out",
            fill:"forwards"
        });

        setTimeout(()=>particle.remove(),1300);

    }

}

/* ==========================================
   RANDOM FIREWORKS
========================================== */

setInterval(()=>{

    if(!opened) return;

    explode(

        Math.random()*window.innerWidth,

        Math.random()*(window.innerHeight*0.6)

    );

},1500);

/* ==========================================
   HAPPY BIRTHDAY OVERLAY
========================================== */

function showBirthdayOverlay(){

    const overlay=document.createElement("div");

    overlay.style.position="fixed";
    overlay.style.inset="0";
    overlay.style.display="flex";
    overlay.style.flexDirection="column";
    overlay.style.justifyContent="center";
    overlay.style.alignItems="center";
    overlay.style.background="rgba(15,10,30,.72)";
    overlay.style.backdropFilter="blur(8px)";
    overlay.style.zIndex="10000";
    overlay.style.opacity="0";
    overlay.style.transition="opacity .8s";

    overlay.innerHTML=`
        <h1 style="
            font-family:'Great Vibes',cursive;
            font-size:76px;
            color:#ffd6f3;
            margin-bottom:20px;
            text-align:center;">
            🎂 Happy 15th Birthday
        </h1>

        <h2 style="
            color:white;
            font-size:42px;
            text-align:center;">
            Shayaali ❤️
        </h2>

        <p style="
            margin-top:25px;
            font-size:22px;
            color:#f8ecff;
            max-width:700px;
            text-align:center;
            line-height:1.8;">
            I hope this little surprise made you smile.<br>
            You deserve a birthday filled with happiness,
            laughter, love, and beautiful memories.
        </p>
    `;

    document.body.appendChild(overlay);

    requestAnimationFrame(()=>{
        overlay.style.opacity="1";
    });

    setTimeout(()=>{
        overlay.style.opacity="0";

        setTimeout(()=>{
            overlay.remove();
        },800);

    },5000);

}

/* ==========================================
   SHOW OVERLAY AFTER GIFT OPENS
========================================== */

giftBox.addEventListener("click",()=>{

    setTimeout(showBirthdayOverlay,1500);

});

/* ==========================================
   MUSIC FADE
========================================== */

if(music){

    music.volume = 0;

    giftBox.addEventListener("click",()=>{

        let volume = 0;

        const fade = setInterval(()=>{

            volume += 0.05;

            if(volume >= 1){

                volume = 1;

                clearInterval(fade);

            }

            music.volume = volume;

        },150);

    });

}

/* ==========================================
   FINAL MESSAGE
========================================== */

console.log("🎉 Happy Birthday Website Loaded Successfully!");

console.log("Made with ❤️ for Shayaali.");