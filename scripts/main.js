function loadTheme() {
  document
    .querySelector(".define-theme")
    .addEventListener("click", function () {
      document.body.classList.toggle("dark");

      const sunIcon = document.querySelector(".sun");
      const moonIcon = document.querySelector(".moon");
      sunIcon.style.display =
        sunIcon.style.display === "none" ? "inline" : "none";
      moonIcon.style.display =
        moonIcon.style.display === "none" ? "inline" : "none";

      const isDarkMode = document.body.classList.contains("dark");
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

  window.addEventListener("load", function () {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.querySelector(".sun").style.display = "none";
    } else {
      document.querySelector(".moon").style.display = "none";
    }
  });
}

function closeSideBar() {
  const navbar = document.getElementsByClassName("navbar-container-mobile");

  if (navbar.length > 0) {
    navbar[0].setAttribute("data-closed", "true");
  }
}

function toggleSideBar() {
  const navbar = document.getElementsByClassName("navbar-container-mobile");

  if (navbar.length > 0) {
    const isClosed = navbar[0].getAttribute("data-closed") === "true";

    navbar[0].setAttribute("data-closed", isClosed ? "false" : "true");
  }
}

const scrollItems = document.querySelectorAll(".scroll-item");

function handleScroll() {
  scrollItems.forEach((item) => {
    const itemPosition = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemPosition < windowHeight - 50) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

loadTheme();
