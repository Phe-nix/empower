const track = document.querySelector('.carousel-track');
const items = Array.from(document.querySelectorAll('#watthai.wat'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const columnSelect = document.getElementById('columnSelect');
const autoplayToggle = document.getElementById('autoplayToggle');

let columns = parseInt(columnSelect.value);
let autoplay = autoplayToggle.checked;
let currentIndex = 0;
let intervalId = null;

function updateColumns() {
    columns = parseInt(columnSelect.value);
    track.setAttribute('data-columns', columns);
    showItems();
}

function showItems() {
    // Hide all
    items.forEach(item => item.style.display = 'none');
    // Show only the current set
    for (let i = 0; i < columns; i++) {
        let idx = (currentIndex + i) % items.length;
        items[idx].style.display = '';
    }
}

function next() {
    currentIndex = (currentIndex + columns) % items.length;
    showItems();
}

function prev() {
    currentIndex = (currentIndex - columns + items.length) % items.length;
    showItems();
}

function startAutoplay() {
    if (intervalId) clearInterval(intervalId);
    if (autoplay) {
        intervalId = setInterval(next, 2500);
    }
}

columnSelect.addEventListener('change', () => {
    updateColumns();
});

autoplayToggle.addEventListener('change', () => {
    autoplay = autoplayToggle.checked;
    startAutoplay();
});

prevBtn.addEventListener('click', () => {
    prev();
    startAutoplay();
});

nextBtn.addEventListener('click', () => {
    next();
    startAutoplay();
});

// Initial setup
updateColumns();
startAutoplay();

window.addEventListener('focus', startAutoplay);
window.addEventListener('blur', () => intervalId && clearInterval(intervalId));
