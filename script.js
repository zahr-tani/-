document.addEventListener('DOMContentLoaded', () => {
    const screens = document.querySelectorAll('.screen');
    const showScreen = (id) => {
        screens.forEach((screen) => screen.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    };

    document.getElementById('start-button').addEventListener('click', () => {
        showScreen('screen-question');
    });

    document.getElementById('next-to-clue1').addEventListener('click', () => {
        showScreen('screen-clue1');
    });

    document.getElementById('next-to-clue2').addEventListener('click', () => {
        showScreen('screen-clue2');
    });

    document.getElementById('show-map').addEventListener('click', () => {
        showScreen('screen-map');
    });

    document.getElementById('finish').addEventListener('click', () => {
        showScreen('screen-congratulations');
    });
});
