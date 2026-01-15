/* Script for cards */
const cardContainer = document.querySelector(".card-container");

cardContainer.addEventListener("click", (event) => {

    /* Delete button handling */
    const deleteBtn = event.target.closest(".delete-btn");
    if (deleteBtn) {
        const card = deleteBtn.closest(".card");
        card.remove();
        return;
    }

    // Card activation handling
    const card = event.target.closest(".card");
    if (!card) return;

    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));

    card.classList.add("active");
});
