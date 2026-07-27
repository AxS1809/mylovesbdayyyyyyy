/* ===================================
Confetti
=================================== */

function startConfetti(){

    for(let i=0;i<250;i++){

        const c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.animationDelay=Math.random()*3+"s";

        c.style.background=
        `hsl(${Math.random()*360},90%,75%)`;

        document.body.appendChild(c);

        setTimeout(()=>c.remove(),7000);

    }

}