/* ==========================================
      LETTER PAGE
========================================== */

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typed = document.getElementById("typedLetter");
const signature = document.querySelector(".signature");
const nextBtn = document.getElementById("nextBtn");

/* ==========================================
   YOUR LETTER ❤️
   Replace this text with your own words.
========================================== */

const message = `

Happy Birthday, Shayaali ❤️

Today is your special day, and I just wanted to remind you how amazing you are.

Thank you for every smile, every laugh, every conversation, and every memory we've shared.

You make ordinary moments feel special without even trying.

I hope this year brings you endless happiness, beautiful surprises, and dreams coming true.

Never stop smiling, because your smile has a way of making everything brighter.

No matter where life takes us, I will always wish for your happiness, your success, and countless beautiful memories.

Thank you for simply being you.

Happy 15th Birthday once again.

I hope today becomes one of your favorite memories.

❤️
`;

/* ==========================================
      OPEN ENVELOPE
========================================== */

envelope.onclick = () => {

    envelope.style.pointerEvents = "none";

    document.querySelector(".top").style.transform =
    "rotateX(180deg)";

    envelope.style.transform =
    "translateY(120px) scale(.85)";

    setTimeout(() => {

        letter.style.opacity = "1";

        letter.style.transform =
        "translateY(0) scale(1)";

        startTyping();

    },900);

}

/* ==========================================
      TYPEWRITER
========================================== */

let i = 0;

function startTyping(){

    const speed = 28;

    function write(){

        if(i < message.length){

            typed.innerHTML += message.charAt(i);

            letter.scrollTop = letter.scrollHeight;

            i++;

            setTimeout(write,speed);

        }

        else{

            showEnding();

        }

    }

    write();

}

/* ==========================================
      ENDING
========================================== */

function showEnding(){

    signature.style.opacity = "1";

    setTimeout(()=>{

        nextBtn.classList.add("show");

    },1200);

}

/* ==========================================
      NEXT PAGE
========================================== */

nextBtn.onclick = () => {

    document.body.style.transition =
    "1s";

    document.body.style.opacity = "0";

    document.body.style.filter =
    "blur(10px)";

    setTimeout(()=>{

        window.location =
        "surprise.html";

    },1000);

}