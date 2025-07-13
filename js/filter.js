document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Hilangkan class active di semua tombol
      filterButtons.forEach((btn) => btn.classList.remove("bg-blue-600", "text-white", "active"));
      // Tambahkan class active pada tombol yang diklik
      button.classList.add("bg-blue-600", "text-white", "active");

      const filter = button.dataset.filter;

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
});
