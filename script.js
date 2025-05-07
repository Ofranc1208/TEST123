
// Delay the video fade-in to allow black screen first
window.addEventListener('load', () => {
  const black = document.getElementById('black-screen');
  const video = document.getElementById('bg-video');
  setTimeout(() => {
    black.style.opacity = '0';
    video.style.opacity = '1';
  }, 2000);
});

// Mobile menu toggle
document.getElementById('menu-toggle')?.addEventListener('click', () => {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('active');
});
