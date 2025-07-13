// <!-- 🌓 Toggle Mode Script -->
// function gantiTema() {
//   const isDark = document.documentElement.classList.contains("dark"); //Untuk manggil classlist dari "dark"
//   if (isDark) {
//     document.documentElement.classList.remove("dark"); //Hapus mode gelap
//     localStorage.setItem("mode", "light"); //Ganti ke mode terang
//   } else {
//     document.documentElement.classList.add("dark"); //Tambahkan mode gelap
//     localStorage.setItem("mode", "dark"); //Aktifkan mode gelap
//   }
// }

// //Aktifkan mode dari localStorage saat saat halaman dibuka
// window.onload = () => {
//   if (localStorage.getItem("mode") === "dark") {
//     document.documentElement.classList.add("dark");
//   }
// };

// Fungsi umum untuk load komponen
function loadComponent(id, filePath, callback) {
  fetch(filePath)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    })
    .catch((err) => console.error("Gagal load komponen:", err));
}

// Load header dan footer setelah halaman siap
window.addEventListener("DOMContentLoaded", () => {
  loadComponent("navContainer", "components/header.html", () => {
    const toggleBtn = document.getElementById("toggleBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (toggleBtn && mobileMenu) {
      toggleBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  });

  // loadComponent("footerContainer", "components/footer.html");
});

// <!-- ✅ Akhir AOS index.html -->
document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: false,
      duration: 700,
      easing: "ease-in-out",
    });
  }
});
