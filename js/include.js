// include.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("components/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // Setelah header dimuat, pasang event untuk dark mode
      initThemeToggle(); // Panggil fungsi dari theme.js
    });
});
