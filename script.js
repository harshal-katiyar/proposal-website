// Jokes Data
const jokes = [
    "I Googled 'how to impress my girlfriend'... and you were the top result!",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Do you have a Band-Aid? I just scraped my knee falling for you!",
    "Are you a time traveler? Because I see you in my future!",
    "I must be a snowflake because I've fallen for you!",
    "Are you Wi-Fi? Because I'm feeling a connection!",
    "I was going to tell you a pizza joke... but it's too cheesy!",
    "If you were a fruit, you'd be a fine-apple!",
    "I'm not a photographer, but I can picture us together!",
    "We're not socks, but we'd make the perfect pair!"
];

// Compliments Data
const compliments = [
    "Your smile is my favorite thing in the world!",
    "You're more beautiful than a sunset!",
    "I fall in love with you more every day.",
    "How are you so perfect?",
    "Just thinking about you makes me smile.",
    "You're the reason I believe in love.",
    "Your laugh is my favorite sound.",
    "You make my heart skip a beat.",
    "I'm the luckiest person to have you.",
    "You're my dream come true."
];

// Love Meter
const loveMeter = document.getElementById('loveMeter');
const loveMessage = document.getElementById('loveMessage');
const lovePercentage = document.getElementById('lovePercentage');

const loveMessages = [
    "I kinda like you...",
    "Okay, I really like you!",
    "I think I'm falling for you!",
    "I'm definitely in love!",
    "I LOVE YOU SO MUCH!",
    "I'M OBSESSED WITH YOU!",
    "YOU'RE MY WHOLE WORLD!",
    "INFINITY × INFINITY! 💞"
];

loveMeter.addEventListener('input', function() {
    const value = parseInt(this.value);
    const messageIndex = Math.min(Math.floor(value / 15), loveMessages.length - 1);
    loveMessage.textContent = loveMessages[messageIndex];
    lovePercentage.textContent = `${value}%`;
    
    // Change color based on value
    const hue = value * 3.6; // Convert percentage to hue rotation
    lovePercentage.style.filter = `hue-rotate(${hue}deg)`;
});

// Jokes Interaction
function revealJoke(id) {
    const jokeElement = document.getElementById(`joke${id}`);
    jokeElement.classList.toggle('hidden');
    jokeElement.parentElement.classList.add('bg-pink-100');
}

document.getElementById('randomJokeBtn').addEventListener('click', function() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    
    // Create a notification bubble
    const bubble = document.createElement('div');
    bubble.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg animate-float-up';
    bubble.textContent = randomJoke;
    document.body.appendChild(bubble);
    
    // Remove after animation
    setTimeout(() => {
        bubble.remove();
    }, 3000);
});

// Promises
document.getElementById('addPromiseBtn').addEventListener('click', function() {
    const userPromise = prompt("Write your own promise to her:");
    if (userPromise) {
        const promisesContainer = document.querySelector('.promises-list');
        const newPromise = document.createElement('div');
        newPromise.className = 'promise-item animate-bounce';
        newPromise.innerHTML = `
            <span class="promise-emoji">💌</span>
            <p>"${userPromise}"</p>
        `;
        promisesContainer.appendChild(newPromise);
    }
});

// Proposal
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const secretMessage = document.getElementById('secretMessage');
const confettiContainer = document.getElementById('confettiContainer');
const proposalSection = document.getElementById('proposal');

yesBtn.addEventListener('click', function() {
    secretMessage.classList.remove('hidden');
    confettiContainer.style.display = 'block';
    createConfetti();
    
    // Change proposal box
    proposalSection.innerHTML = `
        <div class="ring-emoji animate-bounce">🎉</div>
        <h2>YES! YES! YES!</h2>
        <p class="proposal-question">This is the happiest moment of my life! 💖</p>
    `;
    proposalSection.style.background = 'linear-gradient(to right, #4ade80, #22d3ee)';
});

noBtn.addEventListener('mouseover', function() {
    // Move the NO button randomly
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    this.style.transform = `translate(${x}px, ${y}px)`;
});

// Confetti
function createConfetti() {
    const colors = ['#ff0000', '#ff00ff', '#00ffff', '#ffff00', '#00ff00'];
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.opacity = Math.random() + 0.5;
        
        // Create unique animation for each confetti
        const animationDuration = Math.random() * 3 + 2;
        const animationName = `fall-${i}`;
        
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes ${animationName} {
                to {
                    transform: translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        confetti.style.animation = `${animationName} ${animationDuration}s linear forwards`;
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
            style.remove();
        }, animationDuration * 1000);
    }
}

// Floating Compliment Button
document.getElementById('floatingComplimentBtn').addEventListener('click', function() {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    
    // Create a floating compliment bubble
    const bubble = document.createElement('div');
    bubble.className = 'fixed bottom-20 right-6 bg-white text-pink-600 px-4 py-2 rounded-lg shadow-lg animate-float-up';
    bubble.textContent = randomCompliment;
    document.body.appendChild(bubble);
    
    // Remove after animation
    setTimeout(() => {
        bubble.remove();
    }, 3000);
});