// RENDER REVIEWS

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const data = await fetch("/api");
    const response = await data.json();
    renderReviews(response);
  } catch (error) {
    console.log(error);
  }
});

function renderReviews(reviewsData) {
  const reviewsContainer = document.querySelector(".reviews-container");
  let reviewsHTML = "";

  reviewsData.forEach((review, i) => {
    reviewsHTML += `
      <article class="review-card">
        <p class="meta-date">${review.timeStamp}, ${review.location}</p>
        <p class="meta-name">Reviewed by  <span>${review.author}</span></p>
        <h2>${review.title}</h2>
        <p class="review-text">
          ${review.text}
        </p>
        <button class="toggle-btn">Read full review</button>
      </article>
    `;
  });
  reviewsContainer.innerHTML = reviewsHTML;
}

const container = document.querySelector(".reviews-container");
if (container) {
  container.addEventListener("click", (e) => {
    if (!e.target.classList.contains("toggle-btn")) return;

    const card = e.target.closest(".review-card");
    if (!card) return;

    const text = card.querySelector(".review-text");
    if (!text) return;

    text.classList.toggle("expanded");

    e.target.textContent = text.classList.contains("expanded")
      ? "Show less"
      : "Read full review";
  });
}
// const cards = document.querySelectorAll(".review-card");

// cards.forEach((card) => {
//   const btn = card.querySelector(".toggle-btn");
//   const text = card.querySelector(".review-text");

//   btn.addEventListener("click", () => {
//     text.classList.toggle("expanded");

//     btn.textContent = text.classList.contains("expanded")
//       ? "Show less"
//       : "Read full review";
//   });
// });

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
