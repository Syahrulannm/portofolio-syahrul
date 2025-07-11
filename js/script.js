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

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

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

// <!-- ✅ Akhir AOS index.html -->

AOS.init({
  once: false,
  duration: 700,
  easing: "ease-in-out",
});
