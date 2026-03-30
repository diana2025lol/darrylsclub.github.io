// Hide loading screen
window.addEventListener('load', () => {
  document.getElementById('loading-screen').style.display = 'none';
});

// Section toggle
function showSection(id){
  document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active-section'));
  document.getElementById(id).classList.add('active-section');
}