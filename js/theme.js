// theme.js
document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme");

  //Terapkan tema tersimpan saat halaman dimuat
  if (savedTheme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  //Tombol toggle
  const toggleBtn = document.getElementById("theme-toggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      html.classList.toggle("dark");

      // Simpan preferensi pengguna
      if (html.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }
});
