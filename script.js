// Select necessary elements
const btnNavElm = document.querySelector(".btn-mobile-nav");
const headerElm = document.querySelector(".header");

// Toggle nav open class on button click
btnNavElm.addEventListener("click", function () {
  headerElm.classList.toggle("nav-open");
});

// Smooth scrolling for anchor links
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile nav after clicking a link
    if (link.classList.contains("main-nav-link"))
      headerElm.classList.toggle("nav-open");
  });
});

// Sticky Header for Hero Section
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Check if Flexbox Gap is supported
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// Display the current year
const yearElm = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearElm.textContent = currentYear;
