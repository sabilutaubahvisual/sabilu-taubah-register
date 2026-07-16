/* ===========================================
   SABILU TAUBAH ESPORT
=========================================== */

/* ========= COUNTDOWN ========= */

const eventDate = new Date("2026-08-16T08:00:00").getTime();

const timer = document.getElementById("timer");

function countdown() {

    if (!timer) return;

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance < 0) {

        timer.innerHTML = "<h2>🔥 TOURNAMENT DIMULAI 🔥</h2>";

        return;

    }

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const second = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `

        <div class="time-box">
            <h1>${day}</h1>
            <p>Hari</p>
        </div>

        <div class="time-box">
            <h1>${hour}</h1>
            <p>Jam</p>
        </div>

        <div class="time-box">
            <h1>${minute}</h1>
            <p>Menit</p>
        </div>

        <div class="time-box">
            <h1>${second}</h1>
            <p>Detik</p>
        </div>

    `;

}

setInterval(countdown,1000);

countdown();


/* ========= NAVBAR ========= */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.style.background="rgba(0,8,30,.95)";

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

    }else{

        header.style.background="rgba(0,0,0,.30)";

        header.style.boxShadow="none";

    }

});


/* ========= FADE UP ========= */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card,.timeline-card,.prize-box,.hero-info,.info-box").forEach(item=>{

    item.classList.add("fade-up");

    observer.observe(item);

});


/* ========= BUTTON EFFECT ========= */

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow="0 0 25px #00BFFF";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="";

    });

});


/* ========= PARALLAX ========= */

const background = document.querySelector(".background");

window.addEventListener("mousemove",(e)=>{

    if(!background) return;

    const x = (e.clientX / window.innerWidth) * 15;

    const y = (e.clientY / window.innerHeight) * 15;

    background.style.transform =
    `translate(${-x}px,${-y}px)`;

});


/* ========= SMOOTH ========= */

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ========= LOADING ========= */

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});


/* ========= CONSOLE ========= */

console.clear();

console.log("%cSABILU TAUBAH ESPORT",
"color:#00bfff;font-size:24px;font-weight:bold;");

console.log("%cWebsite Ready 🚀",
"color:#00ff99;font-size:16px;");