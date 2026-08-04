const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i = 0; i < 800; i++){

    stars.push({

        x: Math.random()*canvas.width - canvas.width/2,

        y: Math.random()*canvas.height - canvas.height/2,

        z: Math.random()*canvas.width

    });

}

let speed = 2;

function drawSpace(){

    ctx.fillStyle = "#020617";
    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.save();

    ctx.translate(
        canvas.width/2,
        canvas.height/2
    );

    stars.forEach(star=>{

        star.z -= speed;

        if(star.z <= 0){

            star.z = canvas.width;

        }

        let x =
        star.x / star.z * canvas.width;

        let y =
        star.y / star.z * canvas.width;

        let size =
        (1 - star.z/canvas.width)*4;

        ctx.beginPath();

        ctx.arc(
            x,
            y,
            size,
            0,
            Math.PI*2
        );

        ctx.fillStyle =
        "white";

        ctx.fill();

    });

    ctx.restore();

    requestAnimationFrame(drawSpace);

}

drawSpace();

window.addEventListener(
"resize",
()=>{

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

});

const start =
document.getElementById("start");

const intro =
document.querySelector(".intro");

const journey =
document.getElementById("journey");

const starScene =
document.getElementById("starScene");

const final =
document.getElementById("final");

start.onclick = ()=>{

    intro.classList.add("hidden");

    journey.classList.remove("hidden");

    setTimeout(()=>{

        journey.classList.add("hidden");

        starScene.classList.remove("hidden");

    },5000);

    setTimeout(()=>{

        final.classList.remove("hidden");

    },10000);

};
