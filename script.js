const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainContent = document.getElementById("main-content");
const responseContainer = document.getElementById("response-container");
const heartBg = document.getElementById("heartBg");

let yesScale = 1;
let noScale = 1;
let noClickCount = 0;

const noTexts = [
  "Are you sure?",
  "Really sure??",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You're breaking my heart ;(",
  "Pweeese? 🥺"
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

// --- BACKGROUND HEARTS FUNCTION ---
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];

  // Random position and size
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  // Random animation duration
  const duration = Math.random() * 3 + 3; // between 3s and 6s
  heart.style.animationDuration = duration + "s";

  heartBg.appendChild(heart);

  // Remove heart after animation finishes
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Start the background hearts immediately
setInterval(createHeart, 400);


// --- NO BUTTON LOGIC ---
noBtn.addEventListener("click", () => {
  // Increase Yes Size
  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Decrease No Size
  noScale -= 0.1;
  noBtn.style.transform = `scale(${noScale})`;

  // Change No Text
  if (noClickCount < noTexts.length) {
    noBtn.innerText = noTexts[noClickCount];
    noClickCount++;
  }

  // If No button gets too small, hide it
  if (noScale < 0.2) {
    noBtn.style.display = "none";
  }
});


// --- YES BUTTON LOGIC ---
yesBtn.addEventListener("click", () => {
  // Hide the question, show the letter container
  mainContent.classList.add("hidden");
  responseContainer.classList.remove("hidden");

  // Loop through messages with a delay
  messages.forEach((text, index) => {
    setTimeout(() => {
      const line = document.createElement("p");
      line.className = "love-line";
      line.innerHTML = text;

      // Special style for the last message
      if (index === messages.length - 1) {
        line.style.fontSize = "3.5rem";
        line.style.textShadow = "0 0 20px #ff4d6d";
      }

      responseContainer.appendChild(line);

      // Auto-scroll to bottom
      responseContainer.scrollTo({
        top: responseContainer.scrollHeight,
        behavior: 'smooth'
      });

      // Burst of hearts
      for (let i = 0; i < 5; i++) createHeart();

    }, index * 1200); // 1.2s delay between lines
  });
});
