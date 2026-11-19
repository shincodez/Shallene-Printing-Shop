/* ==========================================================================
   main.js — Site start-up
   --------------------------------------------------------------------------
   Runs once the page has loaded and starts each feature.
   navigation.js is loaded before this file, so initNavigation() exists.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  setCurrentYear();
});

// Fills any element marked data-current-year with this year (used in the footer).
function setCurrentYear() {
  const yearElements = document.querySelectorAll("[data-current-year]");
  const year = new Date().getFullYear();

  yearElements.forEach(function (element) {
    element.textContent = year;
  });
}
