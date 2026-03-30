// Loading bar hides after animation
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('loading-bar').style.display = 'none';
  }, 1300);
});

// Switch sections
function showSection(id){
  document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active-section'));
  document.getElementById(id).classList.add('active-section');
}

// Staff dropdown toggle
function toggleDropdown(button){
  const content = button.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
}