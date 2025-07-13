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
function loadComponent(id, url, callback) {
  const target = document.getElementById(id);
  if (!target) {
    console.warn(`Element with ID #${id} tidak ditemukan.`);
    return;
  }

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`Gagal fetch: ${res.status}`);
      return res.text();
    })
    .then((html) => {
      target.innerHTML = html;
      if (typeof callback === "function") callback();
    })
    .catch((err) => {
      console.error(`Gagal load komponen:`, err);
    });
}

// Contoh penggunaan
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "components/header.html", () => {
    console.log("Header dimuat");
    initThemeToggle(); // setelah header siap
  });
});

//Menu humberger
function initMobileNav() {
  const toggleBtn = document.getElementById("toggleBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!toggleBtn || !mobileMenu) {
    console.warn("Tombol atau menu mobile tidak ditemukan");
    return;
  }

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// Load header dan footer setelah halaman siap
window.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "components/header.html", () => {
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
