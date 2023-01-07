document.addEventListener("DOMContentLoaded", () => {
  console.log("test");
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
   alert("Task Added!");
  });
}); 