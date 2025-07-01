const sections = document.querySelectorAll("section[id].content");
const navLinks = document.querySelectorAll(".menu-link");

function scrollTracker() {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const id = section.getAttribute("id");

    const currentNavLink = document.querySelector(`.menu-link[href="#${id}"]`);

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      currentNavLink.classList.add("active");
    } else {
      currentNavLink.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollTracker);



// TYPEWRITING EFFECT
var typed = new Typed(".auto-type", {
    strings : [ "BCA Student", "Frontend Intern @ Malaris (May-June 2025)" ],
    typeSpeed : 70,
    backSpeed : 50,
    backDelay : 1500,
    loop : true
})

function toggleText() {
    const moreText = document.getElementById("more-text");
    const btn = document.getElementById("read-more-btn");

    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      btn.textContent = "Read more";
    } else {
      moreText.style.display = "inline";
      btn.textContent = "Read less";
    }
  }