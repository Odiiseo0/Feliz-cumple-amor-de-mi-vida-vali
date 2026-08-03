// ============================
// ELEMENTOS
// ============================

const startBtn = document.getElementById("start");
const music = document.getElementById("music");
const letter = document.querySelector(".letter");
const closeBtn = document.getElementById("close");
const typing = document.getElementById("typing");

// ============================
// MENSAJE QUE SE ESCRIBE SOLO
// ============================

const message = "En cualquier universo... siempre habría elegido encontrarte. ❤️";
let index = 0;

function typeWriter() {
    if (index < message.length) {
        typing.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 70);
    }
}
typeWriter();

// ============================
// CREAR ESTRELLAS
// ============================

function createStars() {
    for (let i = 0; i < 350; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        if (Math.random() > 0.9) {
            star.classList.add("big");
        }
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.animationDuration = (Math.random() * 3 + 1) + "s";
        document.body.appendChild(star);
    }
}
createStars();

// ============================
// CORAZONES
// ============================

const hearts = ["❤️","💖","💕","💗","💘","💝"];

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];
    heart.style.left = Math.random()*window.innerWidth+"px";
    heart.style.fontSize = (20+Math.random()*30)+"px";
    heart.style.animationDuration = (4+Math.random()*5)+"s";
    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);
}
setInterval(createHeart, 350);

// ============================
// FLORES
// ============================

const flowers = ["🌹","🌸","🌺","🌷","💐","🌼"];

function createFlower(){
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];
    flower.style.left = Math.random()*window.innerWidth+"px";
    flower.style.fontSize = (25+Math.random()*25)+"px";
    flower.style.animationDuration = (6+Math.random()*3)+"s";
    document.body.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },9000);
}
setInterval(createFlower, 700);

// ============================
// LLUVIA DE SUSHI (Nuevo)
// ============================

const sushiItems = ["🍣", "🍱", "🍙", "🍥", "🍘", "🥢"];

function createSushi() {
    const sushi = document.createElement("div");
    sushi.classList.add("flower"); // Reutilizamos el movimiento de caída fluido
    sushi.innerHTML = sushiItems[Math.floor(Math.random() * sushiItems.length)];
    sushi.style.left = Math.random() * window.innerWidth + "px";
    sushi.style.fontSize = (22 + Math.random() * 25) + "px";
    sushi.style.animationDuration = (5 + Math.random() * 4) + "s";
    
    document.body.appendChild(sushi);

    setTimeout(() => {
        sushi.remove();
    }, 9000);
}
setInterval(createSushi, 600);

// ============================
// ESTRELLA FUGAZ
// ============================

function shootingStar(){
    const star = document.createElement("div");
    star.classList.add("shooting-star");
    star.style.top = Math.random()*300+"px";
    star.style.left = window.innerWidth+"px";
    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },3000);
}
setInterval(shootingStar, 5000);

// ============================
// BOTÓN & CARTA
// ============================

startBtn.addEventListener("click",()=>{
    music.play();
    letter.classList.remove("hidden");
});

closeBtn.addEventListener("click",()=>{
    letter.classList.add("hidden");
});

// ============================
// EFECTO PARALLAX
// ============================

document.addEventListener("mousemove",(e)=>{
    const x = (e.clientX/window.innerWidth)-0.5;
    const y = (e.clientY/window.innerHeight)-0.5;

    document.querySelector(".moon").style.transform = `translate(${x*20}px,${y*20}px)`;
    document.querySelector(".planet1").style.transform = `translate(${x*40}px,${y*40}px)`;
    document.querySelector(".planet2").style.transform = `translate(${-x*30}px,${-y*30}px)`;
});

// ============================
// PARTÍCULAS MÁGICAS
// ============================

function createParticle(){
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random()*window.innerWidth+"px";
    particle.style.top = Math.random()*window.innerHeight+"px";

    const colors = ["#ffffff", "#ff8bd4", "#ffe082", "#7df9ff"];
    particle.style.background = colors[Math.floor(Math.random()*colors.length)];

    document.body.appendChild(particle);

    setTimeout(()=>{
        particle.remove();
    },5000);
}
setInterval(createParticle, 150);

// ============================
// NEBULOSAS
// ============================

function createNebulas(){
    const nebula1 = document.createElement("div");
    nebula1.classList.add("nebula", "one");

    const nebula2 = document.createElement("div");
    nebula2.classList.add("nebula", "two");

    document.body.appendChild(nebula1);
    document.body.appendChild(nebula2);
}
createNebulas();

// ============================
// MARIPOSAS
// ============================

const butterflies = ["🦋", "🦋", "✨"];

function createButterfly(){
    const butterfly = document.createElement("div");
    butterfly.innerHTML = butterflies[Math.floor(Math.random()*butterflies.length)];
    butterfly.style.position = "fixed";
    butterfly.style.left = Math.random()*window.innerWidth+"px";
    butterfly.style.top = Math.random()*window.innerHeight+"px";
    butterfly.style.fontSize = (25+Math.random()*30)+"px";
    butterfly.style.zIndex = "30";
    butterfly.style.animation = "flyButterfly 10s linear forwards";

    document.body.appendChild(butterfly);

    setTimeout(()=>{
        butterfly.remove();
    },10000);
}
setInterval(createButterfly, 2500);

// ============================
// FUEGOS ARTIFICIALES
// ============================

function fireworks(x,y){
    for(let i=0; i<60; i++){
        const spark = document.createElement("div");
        spark.style.position = "fixed";
        spark.style.left = x+"px";
        spark.style.top = y+"px";
        spark.style.width = "5px";
        spark.style.height = "5px";
        spark.style.borderRadius = "50%";
        spark.style.background = randomColor();
        spark.style.boxShadow = "0 0 15px white";
        spark.style.zIndex = "50";

        let angle = Math.random()*Math.PI*2;
        let distance = 50+Math.random()*150;

        spark.animate([
            { transform:"translate(0,0)", opacity:1 },
            { transform:`translate(${Math.cos(angle)*distance}px, ${Math.sin(angle)*distance}px)`, opacity:0 }
        ],{
            duration: 1200,
            easing: "ease-out"
        });

        document.body.appendChild(spark);

        setTimeout(()=>{
            spark.remove();
        },1200);
    }
}

function randomColor(){
    const colors = ["#ff4fa0", "#ffffff", "#ffe082", "#00ffff", "#ff0000", "#9d4edd"];
    return colors[Math.floor(Math.random()*colors.length)];
}

setInterval(()=>{
    fireworks(Math.random()*window.innerWidth, Math.random()*window.innerHeight*.6);
}, 4000);

// ============================
// GRAN CORAZÓN FINAL
// ============================

function loveExplosion(){
    const text = document.createElement("div");
    text.innerHTML = "❤️ FELIZ CUMPLEAÑOS ❤️";
    text.style.position = "fixed";
    text.style.top = "50%";
    text.style.left = "50%";
    text.style.transform = "translate(-50%,-50%)";
    text.style.fontSize = "60px";
    text.style.color = "white";
    text.style.textAlign = "center";
    text.style.zIndex = "200";
    text.style.textShadow = "0 0 20px pink, 0 0 50px red";
    text.style.animation = "finalMessage 5s forwards";

    document.body.appendChild(text);

    for(let i=0; i<100; i++){
        createHeart();
    }

    setTimeout(()=>{
        text.remove();
    },5000);
}

setTimeout(()=>{
    loveExplosion();
}, 20000);

// ============================
// ANIMACIONES EXTRA
// ============================

const extraStyle = document.createElement("style");
extraStyle.innerHTML = `
@keyframes flyButterfly{
    0%{ transform: translate(0,0) rotate(0deg); opacity:0; }
    20%{ opacity:1; }
    50%{ transform: translate(200px,-150px) rotate(20deg); }
    100%{ transform: translate(500px,-300px) rotate(-20deg); opacity:0; }
}
@keyframes finalMessage{
    0%{ opacity:0; transform: translate(-50%,-50%) scale(.2); }
    50%{ opacity:1; transform: translate(-50%,-50%) scale(1.2); }
    100%{ opacity:0; transform: translate(-50%,-50%) scale(1); }
}
`;
document.head.appendChild(extraStyle);
