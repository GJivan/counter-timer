/**
 * Countdown Timer Logic
 * Target Date: Monday, April 27, 2026 (UTC)
 * Using Date.UTC for cross-browser consistency and global synchronization.
 */

const TARGET_DATE = Date.UTC(2026, 3, 27, 0, 0, 0); // April is month index 3

// Cache DOM elements for efficiency
const elements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    display: document.getElementById('countdown-display'),
    completion: document.getElementById('completion-message'),
    status: document.getElementById('status-live')
};

/**
 * Calculates the time remaining and updates the DOM.
 */
function updateCountdown() {
    const now = new Date().getTime();
    const distance = TARGET_DATE - now;

    // If the countdown is finished
    if (distance < 0) {
        if (typeof timerInterval !== 'undefined') clearInterval(timerInterval);
        elements.display.classList.add('hidden');
        elements.completion.classList.remove('hidden');
        elements.completion.setAttribute('aria-hidden', 'false');
        elements.status.innerText = "The countdown has finished. Going home now.";
        return;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM (Surgical updates only)
    if (elements.days.innerText !== String(days)) elements.days.innerText = days;
    if (elements.hours.innerText !== String(hours)) elements.hours.innerText = hours;
    if (elements.minutes.innerText !== String(minutes)) elements.minutes.innerText = minutes;
    if (elements.seconds.innerText !== String(seconds)) elements.seconds.innerText = seconds;

    // Accessibility: Update the live status region every minute (at the start of a minute)
    // This prevents screen reader noise while keeping users informed.
    if (seconds === 0) {
        const liveUpdate = `Countdown update: ${days} days, ${hours} hours, and ${minutes} minutes remaining.`;
        elements.status.innerText = liveUpdate;
    }
}

// Initial call and interval setup
updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);
