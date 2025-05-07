// Fade in video only when it's ready to play
window.addEventListener('load', () => {
  const black = document.getElementById('black-screen');
  const video = document.getElementById('bg-video');

  if (video) {
    // Wait for the video to be ready before fading in
    video.addEventListener('canplaythrough', () => {
      black.style.transition = 'opacity 1s ease-in-out';
      video.style.transition = 'opacity 1.5s ease-in';
      
      black.style.opacity = '0';
      video.style.opacity = '1';
    });

    // Fallback: in case 'canplaythrough' doesn't fire (older mobile browsers)
    setTimeout(() => {
      black.style.opacity = '0.3'; // dim instead of full black just in case
      video.style.opacity = '1';
    }, 4000);
  }
});

// Mobile menu toggle (if present)
document.getElementById('menu-toggle')?.addEventListener('click', () => {
  const nav = document.getElementById('nav-links');
  nav?.classList.toggle('active');
});
