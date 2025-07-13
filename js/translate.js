// Ganti Bahasa English
document.addEventListener("DOMContentLoaded", function () {
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
  // expose fungsi ke global agar bisa akses onclick
  window.toggleBahasa = toggleBahasa;
});
