/* MAGIC CURSOR */

const trail = document.getElementById("cursorTrail");

if (trail) {

    document.addEventListener("mousemove", (e) => {

        const star = document.createElement("span");

        star.className = "cursorStar";

        star.style.left = e.clientX + "px";
        star.style.top = e.clientY + "px";

        star.style.animationDuration = (0.8 + Math.random()) + "s";

        star.style.transform =
            `scale(${Math.random() + 0.4}) rotate(${Math.random() * 360}deg)`;

        trail.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 1200);

    });

}

const card = document.querySelector(".glass-card");

if (card) {

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 25;
        const y = (window.innerHeight / 2 - e.clientY) / 25;

        card.style.transform =
            `rotateY(${x}deg) rotateX(${-y}deg)`;

    });

    document.addEventListener("mouseleave", () => {

        card.style.transform =
            "rotateY(0deg) rotateX(0deg)";

    });

}