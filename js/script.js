// <!-- 🌓 Toggle Mode Script -->
function gantiTema() {
  const isDark = document.documentElement.classList.contains("dark"); //Untuk manggil classlist dari "dark"
  if (isDark) {
    document.documentElement.classList.remove("dark"); //Hapus mode gelap
    localStorage.setItem("mode", "light"); //Ganti ke mode terang
  } else {
    document.documentElement.classList.add("dark"); //Tambahkan mode gelap
    localStorage.setItem("mode", "dark"); //Aktifkan mode gelap
  }
}

//Aktifkan mode dari localStorage saat saat halaman dibuka
window.onload = () => {
  if (localStorage.getItem("mode") === "dark") {
    document.documentElement.classList.add("dark");
  }
};

//Tombol Humbleger Responsive HP
const toggleBtn = document.getElementById("toggleBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (toggleBtn && mobileMenu) {
  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
// 🌐 Validasi Form Kontak
//Notifikasi Visual(Ganti alert)
function tampilkanNotif(pesan, tipe = "success") {
  const notif = document.getElementById("notif");
  notif.textContent = pesan;
  notif.classList.remove("hidden", "bg-green-500", "bg-red-500");
  notif.classList.add(tipe === "success" ? "bg-green-500" : "bg-red-500");

  setTimeout(() => {
    notif.classList.add("hidden");
  }, 4000);
}

function validasiForm() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !email || !pesan) {
    tampilkanNotif("❌ Semua kolom wajib diisi", "error");
    return false; // cegah kirim
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    tampilkanNotif("❌ Masukkan email yang valid", "error");
    return false;
  }

  tampilkanNotif(`✔️ Terima kasih ${nama}, pesanmu akan segera diproses!`);
  return true; // lanjutkan kirim ke Netlify
}

// Ganti Bahasa English
let isIndo = true;
function toggleBahasa() {
  const p1 = document.getElementById("paragraf1");
  const p2 = document.getElementById("paragraf2");
  const h3 = document.getElementById("h3");

  if (isIndo) {
    h3.innerHTML = "About Me";
    p1.innerHTML =
      "I’m a <strong>Front-End Developer</strong> currently focused on developing real-world skills through hands-on projects. I graduated with a Diploma in Informatics Engineering (2023), and I’m fully committed to continuous growth and confident in tackling modern web development — from HTML, CSS, Tailwind CSS, to JavaScript.";
    p2.innerHTML =
      "With a structured and consistent learning approach, I’ve built several mini-projects showcased on this portfolio. I believe in growing through practice and staying open to collaboration, freelance opportunities, and real-world challenges.";
  } else {
    h3.innerHTML = "Tentang Saya";
    p1.innerHTML =
      "Saya adalah seorang <strong>Front-End Developer</strong> yang sedang fokus membangun keahlian melalui praktik langsung dan proyek nyata. Lulusan D3 Teknik Informatika tahun 2023, kini saya berkomitmen untuk terus berkembang dan siap menghadapi tantangan di dunia pengembangan web modern — dari HTML, CSS, Tailwind CSS hingga JavaScript.";
    p2.innerHTML =
      " Dengan pendekatan belajar yang terstruktur dan konsisten, saya telah mengerjakan beberapa mini project yang bisa Anda lihat di halaman portofolio ini. Saya percaya bahwa kunci utama adalah terus berproses, siap beradaptasi, dan terbuka terhadap kolaborasi maupun peluang kerja freelance.";
  }
  isIndo = !isIndo;
}

// <!-- ✅ Akhir AOS index.html -->

AOS.init({
  once: false,
  duration: 700,
  easing: "ease-in-out",
});
