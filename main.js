// TYPEWRITING EFFECT
var typed = new Typed(".auto-type", {
  strings: ["BCA Student", "Frontend Intern @ Malaris (May-June 2025)"],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
})

//INTERNSHIP TOGGLE EFFECT
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