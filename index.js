document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }

  // Theme toggle
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    
    const isDark = document.body.classList.contains("dark");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

// Contact form mailto submission
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const mailtoLink = `mailto:lesly.minaya19@outlook.com?subject=Message from ${name}&body=From: ${name}%0AEmail: ${email}%0A%0A${message}`;
  window.location.href = mailtoLink;
});
