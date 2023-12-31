document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("modePreference") === null) {
    localStorage.setItem("modePreference", "true");
  }
  let modePreference = localStorage.getItem("modePreference") === "false";
  const toggle = document.getElementById("toggle-mode");
  if (modePreference) {
    toggle.src = ".././img/moon.svg";
    toggleMode();
  } else {
    toggle.src = ".././img/sun.svg";
  }
  toggle.addEventListener("click", function (event) {
    event.preventDefault();
    let darkMode = localStorage.getItem("modePreference") === "true";
    if (darkMode) {
      toggle.src = ".././img/moon.svg";
      localStorage.setItem("modePreference", "false");
    } else {
      toggle.src = ".././img/sun.svg";
      localStorage.setItem("modePreference", "true");
    }
    toggleMode();
  });
  function toggleMode() {
    const footerItems = document.querySelectorAll(".footer-mode");
    footerItems.forEach((item) => {
      const isLight = item.classList.contains("footer-light");
      if (isLight) {
        item.classList.remove("footer-light");
        item.classList.add("footer-dark");
      } else {
        item.classList.remove("footer-dark");
        item.classList.add("footer-light");
      }
    });
    const backgroundItems = document.querySelectorAll(".background-mode");
    backgroundItems.forEach((item) => {
      const isLight = item.classList.contains("background-light");
      if (isLight) {
        item.classList.remove("background-light");
        item.classList.add("background-dark");
      } else {
        item.classList.remove("background-dark");
        item.classList.add("background-light");
      }
    });
    const colorItems = document.querySelectorAll(".color-mode");
    colorItems.forEach((item) => {
      const isLight = item.classList.contains("color-light");
      if (isLight) {
        item.classList.remove("color-light");
        item.classList.add("color-dark");
      } else {
        item.classList.remove("color-dark");
        item.classList.add("color-light");
      }
    });
    const paraItems = document.querySelectorAll(".para-mode");
    paraItems.forEach((item) => {
      const isLight = item.classList.contains("para-light");
      if (isLight) {
        item.classList.remove("para-light");
        item.classList.add("para-dark");
      } else {
        item.classList.remove("para-dark");
        item.classList.add("para-light");
      }
    });
    const borderItems = document.querySelectorAll(".border-mode");
    borderItems.forEach((item) => {
      const isLight = item.classList.contains("border-light");
      if (isLight) {
        item.classList.remove("border-light");
        item.classList.add("border-dark");
      } else {
        item.classList.remove("border-dark");
        item.classList.add("border-light");
      }
    });
  }

  const menu = document.querySelector("#menu");
  const menuOverlay = document.getElementById("menu-overlay");
  menu.addEventListener("click", () => {
    menuOverlay.style.left = "0";
  });

  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    menuOverlay.style.left = "100%";
  });
});
