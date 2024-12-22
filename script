const startButton = document.getElementById('start-button');
const progressBar = document.getElementById('progress-bar');

startButton.addEventListener('click', () => {
    document.getElementById('clue1').classList.add('show');
    startButton.style.display = 'none';
    updateProgressBar(25);
});

function nextClue(nextId, progress) {
    document.querySelectorAll('.clue').forEach(clue => clue.classList.remove('show'));
    document.getElementById(nextId).classList.add('show');
    updateProgressBar(progress);
}

function showSuccess() {
    document.querySelectorAll('.clue').forEach(clue => clue.classList.remove('show'));
    document.getElementById('success').classList.add('show');
    updateProgressBar(100);
    launchConfetti();
}

function updateProgressBar(progress) {
    progressBar.style.width = `${progress}%`;
}

function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
