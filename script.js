const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i = 0; i < 700; i++){

stars.push({

x:(Math.random()-0.5)*2000,

y:(Math.random()-0.5)*2000,

z:Math.random()*2000

});

}

let speed = 4;

function space(){

ctx.fillStyle="#000";

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

if(star.z < 1){

star.z = 2000;

}

let x =
star.x / star.z * 500;

let y =
star.y / star.z * 500;

let size =
(1-star.z/2000)*4;

ctx.beginPath();

ctx.arc(
x,
y,
size,
0,
Math.PI*2
);

ctx.fillStyle="white";

ctx.fill();

});

ctx.restore();

requestAnimationFrame(space);

}

space();

window.addEventListener(
"resize",
()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});

const start =
document.getElementById("start");

const intro =
document.querySelector(".intro");

const flight =
document.getElementById("flight");

const discovery =
document.getElementById("discovery");

const starScene =
document.getElementById("starScene");

const finalScene = document.getElementById("final");
start.onclick = ()=>{
    
const music = document.getElementById("music");

music.volume = 0.25;

music.play();
    
    intro.classList.add("hidden");

    flight.classList.remove("hidden");

    setTimeout(()=>{

        flight.classList.add("hidden");

        discovery.classList.remove("hidden");

    },4000);

    setTimeout(()=>{

        discovery.classList.add("hidden");

        starScene.classList.remove("hidden");

    },8000);

   setTimeout(()=>{

starScene.classList.add("hidden");

finalScene.classList.remove("hidden");

},12000);

};
