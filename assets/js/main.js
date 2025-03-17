//  NAVIGATION TOGGLE FUNCTION
function toggleMenu() {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("responsive");

  const menuLinks = document.querySelectorAll(".nav-menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("responsive");
    });
  });
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 3px 1px rgba(184, 178, 170, 0.4)";
  } else {
    navHeader.style.boxShadow = "none";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("loader-container").classList.add("fade-out");

    setTimeout(() => {
      document.getElementById("loader-container").style.display = "none";
      document.getElementById("main-content").classList.remove("hidden");
      document.getElementById("main-content").classList.add("fade-in");

      const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 600,
        reset: false,
      });

      sr.reveal(".fb-title", {});
      sr.reveal(".fb-intro", { delay: 50 });
      sr.reveal(".top-title", { delay: 100 });
      sr.reveal(".pj-item", { interval: 100 });
      sr.reveal(".jn-sentence", { delay: 100 });
      sr.reveal(".contacts", { delay: 100 });

      const srLeft = ScrollReveal({
        origin: "left",
        distance: "60px",
        duration: 600,
        reset: false,
      });

      srLeft.reveal(".jn-img", { delay: 100 });
      srLeft.reveal(".jn-table", { delay: 100 });
      srLeft.reveal(".jn-exp-table", { delay: 100 });

      const srRight = ScrollReveal({
        origin: "right",
        distance: "60px",
        duration: 600,
        reset: false,
      });

      srRight.reveal(".jn-text", { delay: 100 });
      srRight.reveal(".jn-edu-table", { delay: 100 });
    }, 300);
  }, 600);
});


