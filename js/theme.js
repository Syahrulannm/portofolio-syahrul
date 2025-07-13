// theme.js
function initThemeToggle() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme");

  // Terapkan tema awal
  if (savedTheme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  // Cari tombol toggle
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      html.classList.toggle("dark");

      if (html.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }
}
