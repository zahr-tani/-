// Start Button Functionality
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
    document.getElementById('clue1').style.display = 'block';
    startButton.style.display = 'none';
});

// Navigate to Next Clue
function nextClue(nextId) {
    document.querySelectorAll('.clue').forEach(clue => clue.style.display = 'none');
    document.getElementById(nextId).style.display = 'block';
}

// Show Success Page
function showSuccess() {
    document.querySelectorAll('.clue').forEach(clue => clue.style.display = 'none');
    document.getElementById('success').style.display = 'block';
    startConfetti();
}

// Confetti Animation
function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiCount = 150;
    const confetti = Array.from({ length: confettiCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 5 + 2,
        color: `hsl(${Math.random() * 360}, 70%, 70%)`,
        speed: Math.random() * 5 + 2
    }));

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(p => {
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.w, p.h);
        });
    }

    function updateConfetti() {
        confetti.forEach(p => {
            p.y += p.speed;
            if (p.y > canvas.height) p.y = -p.h;
        });
    }

    function animateConfetti() {
        drawConfetti();
        updateConfetti();
        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();
}
const enContent = document.getElementById('content-en');
const arContent = document.getElementById('content-ar');
const switchToEnglish = document.getElementById('switch-en');
const switchToArabic = document.getElementById('switch-ar');

switchToEnglish.addEventListener('click', () => {
    enContent.style.display = 'block';
    arContent.style.display = 'none';
});

switchToArabic.addEventListener('click', () => {
    enContent.style.display = 'none';
    arContent.style.display = 'block';
});

function nextClue(nextId) {
    document.querySelectorAll('.clue').forEach(clue => clue.style.display = 'none');
    document.getElementById(nextId).style.display = 'block';
}

function showSuccess() {
    document.querySelectorAll('.clue').forEach(clue => clue.style.display = 'none');
    document.querySelectorAll('.success').forEach(success => success.style.display = 'block');
}

