document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: "slide",
    once: true,
  });

  const teamMembers = document.querySelectorAll(".team-member");

  teamMembers.forEach(function (member) {
    member.addEventListener("mouseenter", function () {
      member.classList.add("hovered");
    });

    member.addEventListener("mouseleave", function () {
      member.classList.remove("hovered");
    });
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Toggle class on click for interactivity
  document.querySelectorAll(".facility-item").forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });

  // Scroll-to-top button
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.classList.add("scroll-to-top");
  scrollToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
  document.body.appendChild(scrollToTopButton);

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  });
});
