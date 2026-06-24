const startBtn = document.getElementById('startBtn');
const startValue = document.getElementById('startValue');
const display = document.getElementById('display');

startBtn.addEventListener('click', () => {
    const value = Number(startValue.value);

    if (value < 1) {
        display.textContent = 'Please enter a number greater than 0';
        return;
    }

    display.textContent = '';

    for (let i = value; i >= 1; i--) {
        setTimeout(() => {
            display.textContent = i;
        }, (value - i) * 600);
    }
});