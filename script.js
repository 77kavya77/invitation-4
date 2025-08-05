// Flip book effect
document.getElementById('cover').addEventListener('click', function () {
    this.classList.add('open');
    document.getElementById('pages').classList.add('show');

    // Show pages after flip animation completes
    setTimeout(() => {
        document.getElementById('pages').classList.add('show');
    }, 1500);
});

// Countdown timer
function updateCountdown() {
    const weddingDate = new Date('December 10, 2025 16:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Display results
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // If countdown is over
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = '<h3>We are happily married!</h3>';
    }
}

// Update countdown every second
updateCountdown();
const countdownTimer = setInterval(updateCountdown, 1000);

// Smooth scrolling for inner pages
document.getElementById('pages').addEventListener('wheel', function (e) {
    e.preventDefault();
    this.scrollTop += e.deltaY;
});

// Touch support for mobile devices
let startY = 0;
document.getElementById('pages').addEventListener('touchstart', function (e) {
    startY = e.touches[0].clientY;
}, { passive: false });

document.getElementById('pages').addEventListener('touchmove', function (e) {
    e.preventDefault();
    const y = e.touches[0].clientY;
    this.scrollTop += (startY - y);
    startY = y;
}, { passive: false });
