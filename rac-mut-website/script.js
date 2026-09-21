/* =========================
   MOBILE NAV TOGGLE
========================= */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}

/* =========================
   STICKY HEADER + SCROLL TOP
========================= */
const header = document.getElementById("header");
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header?.classList.add("scrolled");
    scrollTopBtn?.classList.add("show");
  } else {
    header?.classList.remove("scrolled");
    scrollTopBtn?.classList.remove("show");
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* =========================
   ACTIVE NAV LINK BY PAGE
========================= */
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-link").forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});

/* =========================
   SCROLL REVEAL
========================= */
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================
   ANIMATED COUNTERS
========================= */
const counters = document.querySelectorAll(".counter");
let countersStarted = false;

function runCounters() {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;
    const increment = Math.ceil(target / 60);

    const updateCounter = () => {
      count += increment;
      if (count >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = count;
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  });
}

function handleCounterTrigger() {
  const statsSection = document.querySelector(".impact-section");
  if (!statsSection || countersStarted) return;

  const rect = statsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 80) {
    runCounters();
    countersStarted = true;
  }
}

window.addEventListener("scroll", handleCounterTrigger);
window.addEventListener("load", handleCounterTrigger);

/* =========================
   PROJECT FILTER
========================= */
const filterButtons = document.querySelectorAll(".filter-btn");
const filterItems = document.querySelectorAll(".filter-item");

if (filterButtons.length && filterItems.length) {
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      filterItems.forEach(item => {
        const category = item.dataset.category;

        if (filter === "all" || category === filter) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
    });
  });
}

/* =========================
   TESTIMONIAL SLIDER
========================= */
const testimonials = document.querySelectorAll(".testimonial-slider .testimonial");
const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");

let currentTestimonial = 0;

function showTestimonial(index) {
  if (!testimonials.length) return;

  testimonials.forEach(item => item.classList.remove("active"));
  testimonials[index].classList.add("active");
}

if (testimonials.length) {
  showTestimonial(currentTestimonial);

  prevBtn?.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  });

  nextBtn?.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  });

  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 6000);
}

/* =========================
   FAQ TOGGLE
========================= */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question?.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

/* =========================
   STATIC CONTACT FORM
========================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out. This is a static demo form for presentation purposes.");
    contactForm.reset();
  });
}

/* =========================
   OPTIONAL SIMPLE GALLERY CLICK
========================= */
const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    window.open(img.src, "_blank");
  });
});