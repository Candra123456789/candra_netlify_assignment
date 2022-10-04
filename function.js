window.onload = function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const btnToggleNav = document.getElementById("btn-toggle");

  btnToggleNav.addEventListener("click", (event) => {
    mobileMenu.classList.toggle("hidden");
  });
};
