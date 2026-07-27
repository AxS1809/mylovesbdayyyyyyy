/* =========================================
        PREMIUM MEMORIES
========================================= */

const photos=document.querySelectorAll(".photo");

const preview=document.getElementById("preview");

const previewImg=document.getElementById("previewImg");

const previewText=document.getElementById("previewText");

const close=document.getElementById("close");

/* ===========================
LIGHTBOX
=========================== */

photos.forEach(card=>{

card.onclick=()=>{

preview.classList.add("active");

previewImg.src=

card.querySelector("img").src;

previewText.innerHTML=

card.querySelector("span").innerHTML;

}

});

/* Close */

close.onclick=()=>{

preview.classList.remove("active");

}

preview.onclick=(e)=>{

if(e.target===preview){

preview.classList.remove("active");

}

}

/* ===========================
SCROLL REVEAL
=========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

});

photos.forEach(card=>{

observer.observe(card);

});

/* ===========================
SPOTLIGHT
=========================== */

const light=document.createElement("div");

light.className="spotlight";

document.body.appendChild(light);

document.addEventListener("mousemove",(e)=>{

light.style.left=e.clientX+"px";

light.style.top=e.clientY+"px";

});

/* ===========================
3D TILT
=========================== */

photos.forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=-(y-rect.height/2)/18;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.04)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});