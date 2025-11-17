const cards = document.querySelectorAll(".review-card");

cards.forEach((card) => {
  const btn = card.querySelector(".toggle-btn");
  const text = card.querySelector(".review-text");

  btn.addEventListener("click", () => {
    text.classList.toggle("expanded");

    btn.textContent = text.classList.contains("expanded")
      ? "Show less"
      : "Read full review";
  });
});
