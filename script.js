// Add current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
