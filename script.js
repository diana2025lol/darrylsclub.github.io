// Hide loading screen on window load
window.addEventListener('load', hideLoadingScreen);

// Fail-safe: hide after 3 seconds max
setTimeout(hideLoadingScreen, 3000);

function hideLoadingScreen() {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500); // fade-out
  }
}

// Section toggle
function showSection(id){
  document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active-section'));
  document.getElementById(id).classList.add('active-section');
}