// Show loader for a fixed duration, then hide
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById('loading-screen');
  
  // Delay in ms (1.2 seconds)
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500); // fade out
  }, 1200);
});

// Section toggle
function showSection(id){
  document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active-section'));
  document.getElementById(id).classList.add('active-section');
}