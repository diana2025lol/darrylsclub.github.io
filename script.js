// Remove loading bar after animation ends
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const loader = document.getElementById('loading-bar');
    if(loader) loader.style.display = 'none';
  }, 1300);
});

// Section toggle
function showSection(id){
  document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active-section'));
  document.getElementById(id).classList.add('active-section');
}