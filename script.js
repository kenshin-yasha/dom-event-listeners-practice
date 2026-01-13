/* Script for cards */
const cardContainer = document.querySelector(".card-container");

cardContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".card");

    if(!card) return;

    const cards = document.querySelectorAll(".card");
    cards.forEach((c) => c.classList.remove("active"));

    card.classList.add("active");
});

/* script for delete buttons */
const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        const card = button.closest(".card");
        card.remove();
    });
});