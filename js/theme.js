// 🌙 Sinkronisasi dark mode dari localStorage atau preferensi sistem
// js/theme.js (sudah kamu buat)
(function () {
  const theme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (theme === "dark" || (!theme && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

// 🌗 Fungsi untuk toggle tema (bisa dipanggil dari tombol)
function gantiTema() {
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");

  html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
}
