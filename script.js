const cardContainer = document.querySelector(".card-container");

cardContainer.addEventListener("click", (event) => {
    const card = event.target.closest("card");

    if(!card) return;

    const cards = document.querySelectorAll("card");
    cards.forEach((c) => c.classList.remove("active"));

    c.classList.add("active");
});