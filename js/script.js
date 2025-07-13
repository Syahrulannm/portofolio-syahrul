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

// script.js

// Fungsi untuk toggle dark mode
function initThemeToggle() {
  const html = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "dark") html.classList.add("dark");
  else html.classList.remove("dark");

  const toggle = document.querySelectorAll("#theme-toggle");
  toggle.forEach((btn) => {
    btn.addEventListener("click", () => {
      html.classList.toggle("dark");
      localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
    });
  });
}

// Fungsi untuk toggle mobile nav
function initMobileNav() {
  const toggleBtn = document.getElementById("toggleBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // opsional: tutup menu jika link diklik
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// 🟡 INI bagian pentingnya
// Jalankan setelah DOM siap
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("header");

  if (!nav) {
    console.warn("Element #header tidak ditemukan");
    return;
  }

  fetch("components/header.html")
    .then((res) => {
      if (!res.ok) throw new Error(`Gagal fetch: ${res.status}`);
      return res.text();
    })
    .then((html) => {
      nav.innerHTML = html;

      // 🟢 TARUH DI SINI SETELAH HEADER DIMUAT
      initThemeToggle();
      initMobileNav();
    })
    .catch((err) => {
      console.error("Gagal load header:", err);
    });
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
