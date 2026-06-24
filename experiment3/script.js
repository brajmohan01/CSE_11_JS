const paragraph = document.getElementById('paragraph');
const btnBg = document.getElementById('bgcolor');
const btnFont = document.getElementById('color');
const btnToggle = document.getElementById('font');
const btnReset = document.getElementById('reset');

const defaults = {
    headingText: heading.textContent,
    bodyBg: '#f0f2f5',
    fontSize: window.getComputedStyle(paragraph).fontSize,
    paragraphVisible: true
};

btnHeading.addEventListener('click', () => {
    const value = input.value.trim();
    heading.textContent = value === '' ? 'Welcome to JavaScript Lab' : value;
});

btnBg.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    document.body.style.backgroundColor = randomColor;
});

btnFont.addEventListener('click', () => {
    const style = window.getComputedStyle(paragraph);
    const currentSize = parseFloat(style.fontSize);
    paragraph.style.fontSize = (currentSize + 2) + 'px';
});

btnToggle.addEventListener('click', () => {
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
        btnToggle.textContent = 'Show/Hide Paragraph';
    } else {
        paragraph.style.display = 'none';
    }
});

btnReset.addEventListener('click', () => {
    heading.textContent = defaults.headingText;
    document.body.style.backgroundColor = defaults.bodyBg;
    paragraph.style.fontSize = defaults.fontSize;
    paragraph.style.display = 'block';
    input.value = '';
});