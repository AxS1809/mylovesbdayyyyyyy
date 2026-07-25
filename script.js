// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 800);

    }, 1800);

});

// =========================
// TYPING EFFECT
// =========================

const text1 = "Heyyy Babeee 💖";
const text2 = "It's your day today!! ✨🎉";

let i = 0;
let j = 0;

const typing1 = document.getElementById("typing");
const typing2 = document.getElementById("typing2");

function typeFirst(){

    if(i < text1.length){

        typing1.innerHTML += text1.charAt(i);

        i++;

        setTimeout(typeFirst,90);

    }

    else{

        setTimeout(typeSecond,500);

    }

}

function typeSecond(){

    if(j < text2.length){

        typing2.innerHTML += text2.charAt(j);

        j++;

        setTimeout(typeSecond,60);

    }

}

setTimeout(typeFirst,2200);

// =========================
// MUSIC
// =========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = () => {

    if(playing){

        music.pause();

        musicBtn.innerHTML = "🔇";

    }

    else{

        music.play();

        musicBtn.innerHTML = "🔊";

    }

    playing = !playing;

};

// =========================
// OPEN SURPRISE
// =========================

document.getElementById("openBtn").onclick = () => {

    document.getElementById("gallery").scrollIntoView({

        behavior:"smooth"

    });

};

// =========================
// LIGHTBOX
// =========================

const photos = document.querySelectorAll(".photo img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.getElementById("closeLightbox");

photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=photo.src;

    });

});

closeBtn.onclick=()=>{

    lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

};
// =========================
// FADE-IN ON SCROLL
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade-in");

    observer.observe(section);

});

// =========================
// SCROLL TO TOP
// =========================

const scrollBtn=document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// =========================
// CONFETTI
// =========================

const confetti=document.getElementById("confetti");

const confettiColors=[
"#ff4f9d",
"#ffd166",
"#7bdff2",
"#b8f2e6",
"#ffffff",
"#d89cff"
];

function createConfetti(){

    const piece=document.createElement("div");

    piece.className="confetti-piece";

    piece.style.left=Math.random()*100+"vw";

    piece.style.background=
    confettiColors[Math.floor(Math.random()*confettiColors.length)];

    piece.style.animationDuration=
    (Math.random()*3+3)+"s";

    piece.style.transform=
    `rotate(${Math.random()*360}deg)`;

    confetti.appendChild(piece);

    setTimeout(()=>{

        piece.remove();

    },6000);

}

setInterval(createConfetti,120);

// =========================
// HEART EXPLOSION
// =========================

function heartExplosion(){

    for(let i=0;i<80;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top=Math.random()*100+"vh";

        heart.style.fontSize=(Math.random()*25+18)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="99999";

        heart.style.transition="2s";

        document.body.appendChild(heart);

        requestAnimationFrame(()=>{

            heart.style.transform=
            `translateY(${-250-Math.random()*300}px)
             rotate(${Math.random()*720}deg)
             scale(${Math.random()*2+0.5})`;

            heart.style.opacity="0";

        });

        setTimeout(()=>{

            heart.remove();

        },2000);

    }

}

// =========================
// FINAL SURPRISE BUTTON
// =========================

const surpriseBtn=document.getElementById("surpriseBtn");

surpriseBtn.onclick=()=>{

    heartExplosion();

    document.getElementById("finalScreen").scrollIntoView({

        behavior:"smooth"

    });

};
// =========================
// FIREWORKS
// =========================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let fireworks = [];

class Firework{

    constructor(){

        this.x = Math.random() * canvas.width;
        this.y = canvas.height;

        this.targetY = Math.random() * canvas.height * 0.5;

        this.color = `hsl(${Math.random()*360},100%,65%)`;

        this.speed = Math.random()*5 + 5;

        this.exploded = false;

        this.particles = [];

    }

    update(){

        if(!this.exploded){

            this.y -= this.speed;

            if(this.y <= this.targetY){

                this.exploded = true;

                for(let i=0;i<40;i++){

                    this.particles.push({

                        x:this.x,

                        y:this.y,

                        dx:(Math.random()-0.5)*8,

                        dy:(Math.random()-0.5)*8,

                        alpha:1

                    });

                }

            }

        }else{

            this.particles.forEach(p=>{

                p.x += p.dx;

                p.y += p.dy;

                p.dy += 0.05;

                p.alpha -= 0.02;

            });

        }

    }

    draw(){

        if(!this.exploded){

            ctx.beginPath();

            ctx.arc(this.x,this.y,3,0,Math.PI*2);

            ctx.fillStyle=this.color;

            ctx.fill();

        }else{

            this.particles.forEach(p=>{

                ctx.globalAlpha=Math.max(p.alpha,0);

                ctx.beginPath();

                ctx.arc(p.x,p.y,2,0,Math.PI*2);

                ctx.fillStyle=this.color;

                ctx.fill();

            });

            ctx.globalAlpha=1;

        }

    }

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(Math.random()<0.05){

        fireworks.push(new Firework());

    }

    fireworks.forEach((fw,index)=>{

        fw.update();

        fw.draw();

        if(fw.exploded && fw.particles.every(p=>p.alpha<=0)){

            fireworks.splice(index,1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

// =========================
// FLOATING SPARKLES
// =========================

setInterval(()=>{

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.fontSize=(Math.random()*18+14)+"px";

    sparkle.style.pointerEvents="none";

    sparkle.style.zIndex="9998";

    sparkle.style.transition="2s linear";

    document.body.appendChild(sparkle);

    requestAnimationFrame(()=>{

        sparkle.style.transform="translateY(-120px) scale(1.5)";

        sparkle.style.opacity="0";

    });

    setTimeout(()=>{

        sparkle.remove();

    },2000);

},700);
// =========================
// AUTO FLOATING HEARTS
// =========================

function createHeart(){

    const heart=document.createElement("div");

    const hearts=["❤️","💖","💕","💗","💞"];

    heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="110vh";

    heart.style.fontSize=(Math.random()*20+20)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    heart.style.transition="8s linear";

    document.body.appendChild(heart);

    requestAnimationFrame(()=>{

        heart.style.transform=
        `translateY(-130vh) rotate(${Math.random()*720}deg)`;

        heart.style.opacity="0";

    });

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,500);

// =========================
// RANDOM BUTTERFLIES
// =========================

setInterval(()=>{

    const butterfly=document.createElement("div");

    butterfly.innerHTML="🦋";

    butterfly.style.position="fixed";

    butterfly.style.left="-50px";

    butterfly.style.top=Math.random()*90+"vh";

    butterfly.style.fontSize="34px";

    butterfly.style.pointerEvents="none";

    butterfly.style.zIndex="999";

    butterfly.style.transition="12s linear";

    document.body.appendChild(butterfly);

    requestAnimationFrame(()=>{

        butterfly.style.left="110vw";

        butterfly.style.transform=
        `translateY(${Math.random()*200-100}px)
        rotate(${Math.random()*360}deg)`;

    });

    setTimeout(()=>{

        butterfly.remove();

    },12000);

},4000);

// =========================
// CELEBRATION MESSAGE
// =========================

window.addEventListener("load",()=>{

    console.log("❤️ Happy Birthday Babee ❤️");

});

// =========================
// KEYBOARD SHORTCUT
// Press H for Hearts
// =========================

document.addEventListener("keydown",(e)=>{

    if(e.key==="h"||e.key==="H"){

        heartExplosion();

    }

});

// =========================
// CLICK ANYWHERE = SPARKLE
// =========================

document.addEventListener("click",(e)=>{

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=e.clientX+"px";

    sparkle.style.top=e.clientY+"px";

    sparkle.style.fontSize="24px";

    sparkle.style.pointerEvents="none";

    sparkle.style.transition="1s ease";

    sparkle.style.zIndex="99999";

    document.body.appendChild(sparkle);

    requestAnimationFrame(()=>{

        sparkle.style.transform="translateY(-60px) scale(2)";

        sparkle.style.opacity="0";

    });

    setTimeout(()=>{

        sparkle.remove();

    },1000);

});

// =========================
// THE END ❤️
// =========================

console.log("Website loaded successfully 💖");