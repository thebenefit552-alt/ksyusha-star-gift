const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i = 0; i < 500; i++){

    stars.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        size: Math.random()*2,

        speed: Math.random()*0.5+0.1,

        opacity: Math.random()

    });

}

function animateStars(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    stars.forEach(star=>{

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.size,
            0,
            Math.PI*2
        );

        ctx.fillStyle =
        `rgba(255,255,255,${star.opacity})`;

        ctx.fill();

        star.y += star.speed;

        if(star.y > canvas.height){

            star.y = 0;

            star.x = Math.random()*canvas.width;

        }

    });

    requestAnimationFrame(animateStars);

}

animateStars();

window.addEventListener("resize",()=>{

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

});

const startButton =
document.getElementById("start");

const intro =
document.querySelector(".intro");

const journey =
document.getElementById("journey");

const starScene =
document.getElementById("starScene");

const final =
document.getElementById("final");

startButton.addEventListener("click",()=>{

    intro.classList.add("hidden");

    journey.classList.remove("hidden");

    setTimeout(()=>{

        journey.classList.add("hidden");

        starScene.classList.remove("hidden");

    },4000);

    setTimeout(()=>{

        final.classList.remove("hidden");

    },9000);

});
