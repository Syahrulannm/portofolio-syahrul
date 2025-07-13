// 🌐 Validasi Form Kontak
//Notifikasi Visual(Ganti alert)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formKontak");

  function tampilkanNotif(pesan, tipe = "success") {
    const notif = document.getElementById("notif");
    notif.textContent = pesan;
    notif.classList.remove("hidden", "bg-green-500", "bg-red-500");
    notif.classList.add(tipe === "success" ? "bg-green-500" : "bg-red-500");

    setTimeout(() => {
      notif.classList.add("hidden");
    }, 4000);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
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
  });
});
