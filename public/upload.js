// document.addEventListener("DOMContentLoaded", () => {
// //   const dateInput = document.getElementById("review-date");
// //   if (dateInput) {
// //     dateInput.value = new Date().toLocaleString();
// //   }
//   const form = document.querySelector("#review-form");
//   if (!form) return;
//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const newReview = {
//       timeStamp: document.getElementById("review-date").value,
//       location: document.getElementById("location").value.trim(),
//       author: document.getElementById("username").value.trim(),
//       title: document.getElementById("movie-title").value.trim(),
//       text: document.getElementById("review-text").value.trim(),
//     };

//     try {
//       const res = await fetch("/api", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newReview),
//       });
//       if (!res.ok) throw new Error("Failed to add review");
//       if (typeof fetchReviews === "function") {
//         await fetchReviews();
//       } else {
//         window.location.reload;
//       }
//       form.reset();
//       alert("Review submitted!");
//     } catch (error) {
//       console.log(error);
//       alert("Could not submit review. Try again");
//     }
//   });
// });

// // auto-generate date

// const dateInput = document.querySelector("#review-date");

// const now = new Date();
// const formattedDate = now.toLocaleString("en-US", {
//   day: "2-digit",
//   month: "short",
//   year: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   hour12: false,
// });

// dateInput.value = formattedDate;
