/* =========================================================
   WELCOME PAGE
   Premium Cinematic Experience
========================================================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const typing = document.getElementById("typing");
const subTyping = document.getElementById("subTyping");

const openBtn = document.getElementById("openBtn");

const transition = document.querySelector(".transition");

/* ----------------------------------------
        CONTINUE MUSIC
----------------------------------------- */

music.volume = 0;

const savedTime = localStorage.getItem("musicTime");

if(savedTime){

    music.currentTime = savedTime;

}

music.play().catch(()=>{

    console.log("Autoplay blocked.");

});

/* Smooth Fade In */

let volume = 0;

const fadeMusic = setInterval(()=>{

    if(volume < .35){

        volume += .01;

        music.volume = volume;

    }

    else{

        clearInterval(fadeMusic);

    }

},100);

/* Save Position */

setInterval(()=>{

    localStorage.setItem("musicTime",music.currentTime);

},1000);

/* Button */

musicBtn.onclick=()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="❚❚";

    }

    else{

        music.pause();

        musicBtn.innerHTML="♫";

    }

}

/* ----------------------------------------
        CINEMATIC TYPING
----------------------------------------- */

const scenes=[

{

title:"Heyyy Babeee 💖",

subtitle:""

},

{

title:"Happy 15th Birthday Shayaali ✨",

subtitle:"Today is all about celebrating you."

},

{

title:"I made something just for you...",

subtitle:"Every page holds a little surprise."

}

];

let scene=0;

function typeWriter(text,element,speed){

return new Promise(resolve=>{

element.innerHTML="";

let i=0;

const timer=setInterval(()=>{

if(i<text.length){

element.innerHTML+=text.charAt(i);

i++;

}

else{

clearInterval(timer);

resolve();

}

},speed);

});

}

/* ----------------------------------------
        GLOW EFFECT
----------------------------------------- */

function glow(){

typing.animate(

[

{

opacity:.6,

transform:"scale(.98)"

},

{

opacity:1,

transform:"scale(1)"

}

],

{

duration:700,

easing:"ease-out"

}

);

}

/* ----------------------------------------
        SCENE PLAYER
----------------------------------------- */

async function playScenes(){

while(scene<scenes.length){

await typeWriter(

scenes[scene].title,

typing,

70

);

await typeWriter(

scenes[scene].subtitle,

subTyping,

35

);

glow();

await wait(2200);

await dissolve();

scene++;

}

showButton();

}

function wait(ms){

return new Promise(r=>setTimeout(r,ms));

}

/* ----------------------------------------
        DISSOLVE
----------------------------------------- */

async function dissolve(){

typing.classList.add("fadeText");

subTyping.classList.add("fadeText");

await wait(900);

typing.innerHTML="";

subTyping.innerHTML="";

typing.classList.remove("fadeText");

subTyping.classList.remove("fadeText");

}

/* ----------------------------------------
        BUTTON
----------------------------------------- */

function showButton(){

openBtn.classList.add("show");

openBtn.animate(

[

{

transform:"translateY(40px)",

opacity:0

},

{

transform:"translateY(0)",

opacity:1

}

],

{

duration:1000,

easing:"ease"

}

);

}

/* ----------------------------------------
        TRANSITION
----------------------------------------- */

openBtn.onclick=()=>{

transition.classList.add("show");

music.volume=.25;

let fade=setInterval(()=>{

music.volume-=0.02;

if(music.volume<=0){

clearInterval(fade);

}

},70);

setTimeout(()=>{

window.location="memories.html";

},1200);

}

/* ----------------------------------------
        START
----------------------------------------- */

playScenes();