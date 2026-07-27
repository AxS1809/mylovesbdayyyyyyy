/* ==========================================
   FINAL SURPRISE
========================================== */

const gift = document.getElementById("giftBox");
const lid = document.querySelector(".lid");
const hero = document.querySelector(".hero");
const finalContent = document.getElementById("finalContent");
const replay = document.getElementById("replay");

let opened = false;

gift.addEventListener("click", () => {

    if(opened) return;
    opened = true;

    /* Open Lid */

    lid.style.transform =
    "rotateX(-170deg) translateY(-30px)";

    gift.style.transform =
    "translateY(-40px) scale(.95)";

    /* Spark Burst */

    burst();

    /* Fireworks */

    if(typeof startFireworks==="function"){
        startFireworks();
    }

    /* Confetti */

    if(typeof startConfetti==="function"){
        startConfetti();
    }

    /* Reveal */

    setTimeout(()=>{

        hero.style.opacity="0";

        hero.style.pointerEvents="none";

        finalContent.style.opacity="1";
        finalContent.style.pointerEvents="auto";

    },2200);

});

/* =====================================
SPARK BURST
===================================== */

function burst(){

    for(let i=0;i<80;i++){

        const s=document.createElement("span");

        s.className="magic";

        s.style.left="50%";
        s.style.top="50%";

        const x=(Math.random()-0.5)*900;
        const y=(Math.random()-0.5)*900;

        s.style.setProperty("--x",x+"px");
        s.style.setProperty("--y",y+"px");

        document.body.appendChild(s);

        setTimeout(()=>{

            s.remove();

        },2200);

    }

}

/* =====================================
REPLAY
===================================== */

replay.onclick=()=>{

    window.location="index.html";

}