/* ==========================================
   MEMORY SECTIONS
========================================== */

const memories = document.querySelectorAll(".memory");

const progressFill = document.getElementById("progressFill");

const progressText = document.getElementById("progressText");

/* ==========================================
   UPDATE ACTIVE MEMORY
========================================== */

function updateActiveMemory(){

    let activeIndex = 0;

    memories.forEach((memory,index)=>{

        const rect = memory.getBoundingClientRect();

        const middle = window.innerHeight / 2;

        if(rect.top <= middle && rect.bottom >= middle){

            memory.classList.add("active");

            activeIndex = index;

        }

        else{

            memory.classList.remove("active");

        }

    });

    const percent=((activeIndex+1)/memories.length)*100;

    progressFill.style.width=percent+"%";

    progressText.innerHTML=(activeIndex+1)+" / "+memories.length;

}

window.addEventListener("scroll",updateActiveMemory);

window.addEventListener("load",updateActiveMemory);

/* ==========================================
   PARALLAX HERO
========================================== */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const y=window.scrollY;

    hero.style.transform=`translateY(${y*0.25}px)`;

});

/* ==========================================
   IMAGE ZOOM
========================================== */

window.addEventListener("scroll",()=>{

    memories.forEach(memory=>{

        const img=memory.querySelector("img");

        const rect=memory.getBoundingClientRect();

        const center=window.innerHeight/2;

        const distance=Math.abs(rect.top-center);

        const scale=Math.max(1,1.08-distance/2500);

        img.style.transform=`scale(${scale})`;

    });

});
/* ==========================================
   TYPEWRITER CAPTIONS
========================================== */

const captions=document.querySelectorAll(".caption h2");

const captionObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const element=entry.target;

        if(element.dataset.done==="true") return;

        const text=element.textContent;

        element.textContent="";

        element.dataset.done="true";

        let i=0;

        function type(){

            if(i<text.length){

                element.textContent+=text.charAt(i);

                i++;

                setTimeout(type,40);

            }

        }

        type();

    });

},{
    threshold:.6
});

captions.forEach(caption=>{

    captionObserver.observe(caption);

});

/* ==========================================
   HEARTS ON SCROLL
========================================== */

let lastHeart=0;

window.addEventListener("scroll",()=>{

    const now=Date.now();

    if(now-lastHeart<180) return;

    lastHeart=now;

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";

    heart.style.left=(Math.random()*window.innerWidth)+"px";

    heart.style.top=window.innerHeight+"px";

    heart.style.fontSize=(20+Math.random()*18)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="9999";

    heart.style.transition="all 4s linear";

    document.body.appendChild(heart);

    requestAnimationFrame(()=>{

        heart.style.transform=`translateY(-${window.innerHeight+200}px)
        rotate(${360+Math.random()*360}deg)`;

        heart.style.opacity="0";

    });

    setTimeout(()=>{

        heart.remove();

    },4000);

});

/* ==========================================
   PETALS ON CLICK
========================================== */

document.addEventListener("click",(e)=>{

    for(let i=0;i<10;i++){

        const petal=document.createElement("div");

        petal.innerHTML="🌸";

        petal.style.position="fixed";

        petal.style.left=e.clientX+"px";

        petal.style.top=e.clientY+"px";

        petal.style.fontSize=(16+Math.random()*12)+"px";

        petal.style.pointerEvents="none";

        petal.style.transition="all 1.8s ease-out";

        petal.style.zIndex="9999";

        document.body.appendChild(petal);

        const x=(Math.random()-0.5)*220;

        const y=(Math.random()-0.5)*220;

        requestAnimationFrame(()=>{

            petal.style.transform=
            `translate(${x}px,${y}px)
            rotate(${Math.random()*720}deg)
            scale(.4)`;

            petal.style.opacity="0";

        });

        setTimeout(()=>{

            petal.remove();

        },1800);

    }

});

/* ==========================================
   IMAGE FADE EFFECT
========================================== */

const imageObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        const img=entry.target.querySelector("img");

        if(entry.isIntersecting){

            img.style.opacity="1";

            img.style.filter="blur(0px)";

        }

        else{

            img.style.opacity=".55";

            img.style.filter="blur(3px)";

        }

    });

},{
    threshold:.5
});

memories.forEach(memory=>{

    imageObserver.observe(memory);

});
/* ==========================================
   END CELEBRATION
========================================== */

const finalMessage = document.querySelector(".finalMessage");

let celebrationPlayed = false;

const endObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting && !celebrationPlayed){

            celebrationPlayed = true;

            launchCelebration();

        }

    });

},{
    threshold:.6
});

if(finalMessage){

    endObserver.observe(finalMessage);

}

/* ==========================================
   CONFETTI
========================================== */

function launchCelebration(){

    for(let i=0;i<180;i++){

        setTimeout(createConfetti,i*15);

    }

    birthdayOverlay();

}

/* ==========================================
   CREATE CONFETTI
========================================== */

function createConfetti(){

    const confetti=document.createElement("div");

    confetti.className="memoryConfetti";

    confetti.style.left=Math.random()*window.innerWidth+"px";

    confetti.style.backgroundColor=

        ["#ff5b98","#ffd166","#7bdff2","#b8f2e6","#cdb4db"][Math.floor(Math.random()*5)];

    confetti.style.animationDuration=

        (3+Math.random()*3)+"s";

    document.body.appendChild(confetti);

    setTimeout(()=>{

        confetti.remove();

    },6000);

}

/* ==========================================
   BIRTHDAY OVERLAY
========================================== */

function birthdayOverlay(){

    const overlay=document.createElement("div");

    overlay.className="birthdayOverlay";

    overlay.innerHTML=`

        <div class="overlayContent">

            <h1>🎂 Happy 15th Birthday</h1>

            <h2>Shayaali ❤️</h2>

            <p>

            I hope today is filled with happiness,

            laughter,

            and lots of beautiful memories.

            </p>

        </div>

    `;

    document.body.appendChild(overlay);

    setTimeout(()=>{

        overlay.style.opacity="1";

    },50);

    setTimeout(()=>{

        overlay.style.opacity="0";

    },4500);

    setTimeout(()=>{

        overlay.remove();

    },5500);

}

/* ==========================================
   SPARKLE CURSOR
========================================== */

document.addEventListener("mousemove",(e)=>{

    if(Math.random()>.35) return;

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=e.clientX+"px";

    sparkle.style.top=e.clientY+"px";

    sparkle.style.pointerEvents="none";

    sparkle.style.fontSize="14px";

    sparkle.style.zIndex="9999";

    sparkle.style.transition=".8s";

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
   CONTINUE BUTTON TRANSITION
========================================== */

const continueButton=document.querySelector(".continueButton");

if(continueButton){

    continueButton.addEventListener("click",(e)=>{

        e.preventDefault();

        document.body.style.transition="opacity .8s";

        document.body.style.opacity="0";

        setTimeout(()=>{

            window.location.href="story.html";

        },800);

    });

}

/* ==========================================
   PRELOAD IMAGES
========================================== */

for(let i=1;i<=20;i++){

    const img=new Image();

    img.src=`images/photo${i}.jpg`;

}

/* ==========================================
   FINISH
========================================== */

console.log("✨ Memories page loaded successfully ❤️");