/* Script for cards */
const cardContainer = document.querySelector(".card-container");

// Create cards dynamically
const newCard = document.createElement("article");
newCard.classList.add("card");

// Create title element
const title = document.createElement("h2");
title.textContent = "Task 1";

// Create delete button
const deleteBtn = document.createElement("button");
deleteBtn.classList.add("delete-btn");
deleteBtn.textContent = "Delete";

// Append elements
newCard.appendChild(title);
newCard.appendChild(deleteBtn);
cardContainer.appendChild(newCard);

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
