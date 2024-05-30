let clicks = 0;
let energy = 100;

const clicksDisplay = document.getElementById('clicks');
const energyDisplay = document.getElementById('energy');
const clickBtn = document.getElementById('clickBtn');
const upgradeBtn = document.getElementById('upgradeBtn');

clickBtn.addEventListener('click', () => {
    if (energy > 0) {
        clicks++;
        energy--;
        updateDisplays();
    }
});

upgradeBtn.addEventListener('click', () => {
    if (energy >= 10) {
        clicks += 5;
        energy -= 10;
        updateDisplays();
    }
});

function updateDisplays() {
    clicksDisplay.textContent = clicks;
    energyDisplay.textContent = energy;
}

setInterval(() => {
    if (energy < 100) {
        energy++;
        updateDisplays();
    }
}, 3600000); // 1 hour = 3600000 ms
