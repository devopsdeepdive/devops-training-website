const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll("#mainNav > a:not(.nav-register)")];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));
      const active = navLinks.find(link => link.getAttribute("href") === `#${entry.target.id}`);
      if (active) active.classList.add("active");
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("enquiryForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent("DevOps + AWS Course Enquiry");
  const body = encodeURIComponent(
`Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}
Experience: ${data.get("experience")}

Message:
${data.get("message") || "No message provided."}`
  );

  const email = "info@devopsdeepdive.com";
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

  document.getElementById("formStatus").textContent =
    "Opening your email client with the enquiry details...";
});
