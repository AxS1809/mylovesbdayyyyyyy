/* ==========================================
   STORY PAGE
   Premium Interactive Experience
========================================== */

const sections = document.querySelectorAll(".story");

/* =====================================
   SCROLL REVEAL
===================================== */

const reveal = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

particleBurst(entry.target);

}

});

},{

threshold:.25

});

sections.forEach(section=>{

reveal.observe(section);

});

/* =====================================
   IMAGE PARALLAX
===================================== */

sections.forEach(section=>{

const image = section.querySelector(".image");

const photo = image.querySelector("img");

image.addEventListener("mousemove",(e)=>{

const rect=image.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=-(y-rect.height/2)/18;

photo.style.transform=

`perspective(1000px)
rotateY(${rotateY}deg)
rotateX(${rotateX}deg)
scale(1.05)`;

});

image.addEventListener("mouseleave",()=>{

photo.style.transform="";

});

});

/* =====================================
   PARTICLE BURST
===================================== */

function particleBurst(parent){

for(let i=0;i<18;i++){

const p=document.createElement("span");

p.className="storySpark";

p.style.left=(Math.random()*100)+"%";

p.style.top=(Math.random()*100)+"%";

p.style.animationDelay=(Math.random()*.4)+"s";

parent.appendChild(p);

setTimeout(()=>{

p.remove();

},1800);

}

}

/* =====================================
   BUTTERFLY VISIT
===================================== */

const butterflySVG=`

<svg width="42" height="42" viewBox="0 0 64 64">

<path fill="#ffd4ef"

d="M32 28
C22 10 6 12 10 30
C12 41 22 44 30 34
C25 49 16 59 32 60
C48 59 39 49 34 34
C42 44 52 41 54 30
C58 12 42 10 32 28Z"/>

</svg>

`;

function butterfly(){

const b=document.createElement("div");

b.className="storyButterfly";

b.innerHTML=butterflySVG;

b.style.top=(15+Math.random()*70)+"vh";

document.body.appendChild(b);

setTimeout(()=>{

b.remove();

},18000);

}

setInterval(butterfly,12000);

/* =====================================
   SMOOTH NEXT PAGE
===================================== */

const next=document.querySelector(".nextPage a");

next.addEventListener("click",(e)=>{

e.preventDefault();

document.body.classList.add("pageFade");

setTimeout(()=>{

window.location=next.href;

},900);

});