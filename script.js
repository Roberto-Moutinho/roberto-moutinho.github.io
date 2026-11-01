/* =========================================================
   ROBERTO MOUTINHO — PORTFOLIO INTERACTIONS
   No framework or runtime dependency required.
   ========================================================= */
(() => {
  "use strict";

  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const filterButtons = [...document.querySelectorAll(".filter-button")];
  const projectCards = [...document.querySelectorAll(".project-card")];
  const projectCount = document.querySelector(".project-count");
  const year = document.getElementById("year");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Current year
  if (year) year.textContent = new Date().getFullYear();

  // Theme: remember the visitor's choice when browser storage is available.
  const savedTheme = (() => {
    try { return localStorage.getItem("portfolio-theme"); }
    catch { return null; }
  })();
  if (savedTheme === "light" || savedTheme === "dark") root.dataset.theme = savedTheme;

  const updateThemeButton = () => {
    if (!themeToggle) return;
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    themeToggle.setAttribute("title", `Switch to ${nextTheme} theme`);
  };
  updateThemeButton();

  themeToggle?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("portfolio-theme", root.dataset.theme); } catch { /* Storage may be disabled. */ }
    updateThemeButton();
  });

  // Mobile navigation
  const closeMenu = () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
    navLinks?.classList.remove("is-open");
  };
  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navLinks?.classList.toggle("is-open", !isOpen);
  });
  navAnchors.forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
  document.addEventListener("click", event => {
    if (navLinks?.classList.contains("is-open") &&
        !navLinks.contains(event.target) && !menuToggle?.contains(event.target)) closeMenu();
  });

  // Project filtering
  const updateProjectCount = visible => {
    if (projectCount) projectCount.textContent = `${String(visible).padStart(2, "0")} PROJECT${visible === 1 ? "" : "S"}`;
  };
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      let visible = 0;
      projectCards.forEach(card => {
        const categories = (card.dataset.category || "").split(/\s+/);
        const show = filter === "all" || categories.includes(filter);
        card.hidden = !show;
        if (show) visible += 1;
      });
      updateProjectCount(visible);
    });
  });
  updateProjectCount(projectCards.length);

  // Reveal sections on scroll; show all content if IntersectionObserver is unavailable.
  const revealItems = document.querySelectorAll(".reveal");
  if (!reducedMotion && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  // Highlight the navigation item corresponding to the visible section.
  const sections = [...document.querySelectorAll("main section[id]")];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach(link => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }
})();
