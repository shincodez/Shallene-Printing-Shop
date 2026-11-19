/* ==========================================================================
   main.js — Site start-up
   --------------------------------------------------------------------------
   Runs once the page has loaded and starts each feature.
   navigation.js is loaded before this file, so initNavigation() exists.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initRentalCalculator();
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


/* ---------- Computer rental calculator ----------
   Estimated total = hours × price per hour.
   The price comes from data-rate="30" on the calculator in index.html,
   so the price is never typed in this file. */
function initRentalCalculator() {
  const calculator = document.querySelector("[data-rental-calculator]");

  if (!calculator) {
    return;
  }

  const ratePerHour = Number(calculator.dataset.rate);
  const minHours = 1;
  // Upper limit for the estimate only (the shop is open 14 hours a day,
  // 7 AM – 9 PM). This is NOT a confirmed rental policy.
  const maxHours = 14;
  let hours = minHours;

  const hoursOutput = calculator.querySelector("[data-rental-hours]");
  const totalOutput = calculator.querySelector("[data-rental-total]");
  const decreaseButton = calculator.querySelector("[data-rental-decrease]");
  const increaseButton = calculator.querySelector("[data-rental-increase]");

  // Shows the current hours and total, and greys out a button at its limit.
  function render() {
    const total = hours * ratePerHour;

    hoursOutput.textContent = hours === 1 ? "1 hour" : hours + " hours";
    totalOutput.textContent = "₱" + total.toLocaleString("en-PH");

    // aria-disabled (instead of disabled) keeps the button focusable for
    // keyboard users while telling screen readers it does nothing right now.
    decreaseButton.setAttribute("aria-disabled", String(hours <= minHours));
    increaseButton.setAttribute("aria-disabled", String(hours >= maxHours));
  }

  decreaseButton.addEventListener("click", function () {
    if (hours > minHours) {
      hours = hours - 1;
      render();
    }
  });

  increaseButton.addEventListener("click", function () {
    if (hours < maxHours) {
      hours = hours + 1;
      render();
    }
  });

  render();
}
