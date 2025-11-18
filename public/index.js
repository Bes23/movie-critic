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

// auto-generate date

const dateInput = document.querySelector("#review-date");

const now = new Date();
const formattedDate = now.toLocaleString("en-US", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

dateInput.value = formattedDate;
