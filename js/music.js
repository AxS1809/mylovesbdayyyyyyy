const music=document.getElementById("bgMusic");

const button=document.getElementById("musicBtn");

music.volume=.35;

const saved=localStorage.getItem("musicTime");

if(saved){

music.currentTime=saved;

}

music.play().catch(()=>{});

setInterval(()=>{

localStorage.setItem(

"musicTime",

music.currentTime

);

},1000);

button.onclick=()=>{

if(music.paused){

music.play();

button.innerHTML="❚❚";

}else{

music.pause();

button.innerHTML="♫";

}

}