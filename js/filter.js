const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    // reset semua tombol
    filterButtons.forEach((btn) => {
      btn.classList.remove("bg-blue-600", "text-white", "active");
      btn.classList.add("bg-gray-200", "dark:bg-gray-700", "text-gray-800", "dark:text-white");
    });
    //Tambahkan kelas aktif ke tombol yang diklik
    button.classList.remove("bg-gray-200", "dark:bg-gray-700", "text-gray-800", "dark:text-white");
    button.classList.add("bg-blue-600", "text-white", "active");

    // Filter kartu proyek
    projectCards.forEach((card) => {
      const categories = card.dataset.category;
      if (filter === "all" || categories.includes(filter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});
