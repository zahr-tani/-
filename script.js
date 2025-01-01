document.addEventListener('DOMContentLoaded', () => {
    const screens = document.querySelectorAll('.screen');
    const showScreen = (id) => {
        screens.forEach((screen) => screen.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    };

    // Start the hunt
    document.getElementById('start-button').addEventListener('click', () => {
        showScreen('screen-question');
    });

    // Validate answer and show the clue button
    document.getElementById('submit-answer').addEventListener('click', () => {
        const answerBox = document.getElementById('answer-box');
        const answer = answerBox.value.trim();
        if (answer === '1995') {
            alert('Correct answer! Moving to the first clue.');
            document.getElementById('show-clue').disabled = false;
        } else {
            alert('Incorrect! Try again.');
        }
    });

    // Show the first clue
    document.getElementById('show-clue').addEventListener('click', () => {
        showScreen('screen-clue1');
    });

    // Move to the second clue
    document.getElementById('next-to-clue2').addEventListener('click', () => {
        showScreen('screen-clue2');
    });

    // Show the map
    document.getElementById('show-map').addEventListener('click', () => {
        showScreen('screen-map');
    });

    // Show the congratulations screen
    document.getElementById('finish').addEventListener('click', () => {
        showScreen('screen-congratulations');
    });
});
