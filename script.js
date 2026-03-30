// Global Section Toggle
function showSection(id) {
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.remove("active-section");
  });
  document.getElementById(id).classList.add("active-section");
}

// Dropdown Logic
function toggleDropdown(button) {
  const content = button.nextElementSibling;
  content.style.display =
    content.style.display === "block" ? "none" : "block";
}

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}