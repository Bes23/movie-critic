document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#review-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const newReview = {
      location: document.getElementById("location").value.trim(),
      author: document.getElementById("username").value.trim(),
      title: document.getElementById("movie-title").value.trim(),
      text: document.getElementById("review-text").value.trim(),
    };

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });
      if (!res.ok) throw new Error("Failed to add review");
      if (typeof fetchReviews === "function") {
        await fetchReviews();
      } else {
        window.location.reload;
      }
      form.reset();
      alert("Review submitted!");
    } catch (error) {
      console.log(error);
      alert("Could not submit review. Try again");
    }
  });
});

