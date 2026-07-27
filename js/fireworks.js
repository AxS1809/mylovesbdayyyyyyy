/* ===================================
Simple Fireworks
=================================== */

function startFireworks(){

    for(let i=0;i<8;i++){

        setTimeout(()=>{

            firework();

        },i*450);

    }

}

function firework(){

    const x=Math.random()*window.innerWidth;
    const y=Math.random()*window.innerHeight*0.6;

    for(let i=0;i<50;i++){

        const p=document.createElement("span");

        p.className="magic";

        p.style.left=x+"px";
        p.style.top=y+"px";

        p.style.setProperty("--x",(Math.random()-0.5)*500+"px");
        p.style.setProperty("--y",(Math.random()-0.5)*500+"px");

        document.body.appendChild(p);

        setTimeout(()=>p.remove(),2200);

    }

}