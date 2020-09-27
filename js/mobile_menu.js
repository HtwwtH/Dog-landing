$(document).ready(function () {
  const mMenuBtn = $(".about__m-menu-button");
  const mMenu = $(".mobile-menu");
  const tab = $(".tab");

  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
  });
});
