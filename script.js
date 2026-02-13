const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainContent = document.getElementById("main-content");
const responseContainer = document.getElementById("response-container");
const heartBg = document.getElementById("heartBg");
const bgMusic = document.getElementById("bgMusic");

let yesScale = 1;
let noScale = 1;
let noClickCount = 0;

const noTexts = [
    "Are you sure?", "Really sure??", "Think again!", 
    "Last chance!", "Surely not?", "Breaking my heart ;(", "Pweeese? 🥺"
];

const messages = [
    "❤️ I love you a lot baby! ❤️",
    "❤️ You are the love of my life darling ",
    "❤️ I am so lucky to have you in my life ",
    "❤️ I will always cherish and adore you ",
    "❤️ You are my everything, my love ",
    "❤️ I am grateful for every moment we share together ❤️",
    "❤️ I love you more than words can express ❤️",
    "❤️ You are the most amazing person I have ever met ❤️",
    "❤️ I am so blessed to call you mine ❤️"
];

const loveEmojis = ["❤️", "💖", "💝", "💕", "🌹", "✨"];

// 1. Background Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    const duration = Math.random() * 3 + 4;
    heart.style.animationDuration = duration + "s";
    heartBg.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 400);

// 2. Music Trigger
function startMusic() {
    bgMusic.volume = 0.5;
    bgMusic.play().catch(() => console.log("User interaction required for audio"));
}

// 3. No Button Logic
noBtn.addEventListener("click", () => {
    startMusic();
    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;
    
    noScale -= 0.15;
    noBtn.style.transform = `scale(${noScale})`;

    if (noClickCount < noTexts.length) {
        noBtn.innerText = noTexts[noClickCount];
        noClickCount++;
    }

    if (noScale < 0.3) {
        noBtn.style.display = "none";
    }
});

// 4. Yes Button Logic
yesBtn.addEventListener("click", () => {
    startMusic();
    mainContent.classList.add("hidden");
    responseContainer.classList.remove("hidden");

    messages.forEach((text, index) => {
        setTimeout(() => {
            const line = document.createElement("p");
            line.className = "love-line";
            line.innerHTML = text;
            responseContainer.appendChild(line);

            // Auto-scroll
            responseContainer.scrollTo({
                top: responseContainer.scrollHeight,
                behavior: 'smooth'
            });

            // Extra heart bursts
            for(let i=0; i<5; i++) createHeart();
        }, index * 1400);
    });
});
