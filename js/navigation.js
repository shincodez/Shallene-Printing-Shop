/* ==========================================================================
   navigation.js — Header and menu behavior
   --------------------------------------------------------------------------
   1. Mobile menu: open/close the slide-out drawer.
   2. Active link: highlight the menu link for the section you are viewing,
      and show its name in the phone header strip.

   Smooth scrolling itself needs no JavaScript: the links point to section
   ids (href="#services") and CSS "scroll-behavior: smooth" does the rest.
   ========================================================================== */

function initNavigation() {
  initMobileMenu();
  initActiveSectionHighlight();
}


/* ---------- 1. Mobile menu ---------- */
function initMobileMenu() {
  const toggleButton = document.querySelector("[data-menu-toggle]");
  const menu = document.getElementById("mobile-menu");

  // Stop quietly if the menu is not on the page.
  if (!toggleButton || !menu) {
    return;
  }

  const closeButton = menu.querySelector("[data-menu-close]");
  const menuLinks = menu.querySelectorAll("a");
  const desktopScreen = window.matchMedia("(min-width: 1024px)");

  let closeTimer = null;

  function openMenu() {
    // If the menu was still playing its closing animation, cancel it.
    clearTimeout(closeTimer);
    menu.classList.remove("is-closing");

    menu.hidden = false; // showing it starts the slide-in animation (style.css)
    toggleButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("is-menu-open");
    closeButton.focus(); // move keyboard focus into the menu
  }

  // returnFocus: put keyboard focus back on the ☰ button after closing.
  function closeMenu(returnFocus) {
    toggleButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("is-menu-open");

    if (returnFocus) {
      toggleButton.focus();
    }

    // Play the slide-out animation first, then hide the menu.
    menu.classList.add("is-closing");
    closeTimer = setTimeout(hideMenu, 200); // 200ms = closing animation length
  }

  function hideMenu() {
    menu.hidden = true;
    menu.classList.remove("is-closing");
  }

  function isOpen() {
    return !menu.hidden && !menu.classList.contains("is-closing");
  }

  toggleButton.addEventListener("click", openMenu);

  closeButton.addEventListener("click", function () {
    closeMenu(true);
  });

  // Clicking the dark area outside the white panel closes the menu.
  menu.addEventListener("click", function (event) {
    if (event.target === menu) {
      closeMenu(true);
    }
  });

  // Choosing a link closes the menu, then the page scrolls to that section.
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (!isOpen()) {
      return;
    }

    // The Escape key closes the menu.
    if (event.key === "Escape") {
      closeMenu(true);
    }

    // Keep the Tab key cycling inside the open menu.
    if (event.key === "Tab") {
      keepFocusInside(menu, event);
    }
  });

  // If the window is widened to desktop size while the menu is open, close it.
  desktopScreen.addEventListener("change", function (event) {
    if (event.matches && isOpen()) {
      closeMenu(false);
      hideMenu(); // no animation needed — the menu is not visible on desktop
    }
  });
}

// Moves focus from the last item back to the first (and the reverse with Shift+Tab).
function keepFocusInside(container, event) {
  const focusable = container.querySelectorAll("a[href], button:not([disabled])");
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}


/* ---------- 2. Active section highlight ---------- */
function initActiveSectionHighlight() {
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const sectionLabel = document.querySelector("[data-current-section]");
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  if (!header || sections.length === 0) {
    return;
  }

  function setActiveSection(sectionId) {
    navLinks.forEach(function (link) {
      const isMatch = link.getAttribute("href") === "#" + sectionId;
      link.classList.toggle("is-active", isMatch);

      if (isMatch) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    // Update the small "current section" text in the phone header.
    if (sectionLabel) {
      const section = document.getElementById(sectionId);
      sectionLabel.textContent = section.dataset.navLabel || "";
    }
  }

  // Finds the last section whose top has scrolled past the header.
  function findCurrentSection() {
    const headerBottom = header.offsetHeight + 24;
    const reachedPageEnd =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    if (reachedPageEnd) {
      return sections[sections.length - 1].id;
    }

    let currentId = sections[0].id;

    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= headerBottom) {
        currentId = section.id;
      }
    });

    return currentId;
  }

  function update() {
    setActiveSection(findCurrentSection());
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}
