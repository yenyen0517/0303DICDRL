function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call
updateTime();

// Micro-interaction: Mouse parallax effect on background overlay
document.addEventListener('mousemove', (e) => {
    const overlay = document.querySelector('.background-overlay');
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    overlay.style.transform = `translateX(${x}px) translateY(${y}px)`;
});
