// js/filter.js
function initFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("bg-blue-600", "text-white", "active"));
      button.classList.add("bg-blue-600", "text-white", "active");

      const filter = button.dataset.filter;

      projectCards.forEach((card) => {
        const categories = card.dataset.category.trim().split(" ");
        if (filter === "all" || categories.includes(filter)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}
