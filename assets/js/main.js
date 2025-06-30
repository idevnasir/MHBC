/**
* Template Name: Consulting
* Template URL: https://bootstrapmade.com/bootstrap-consulting-website-template/
* Updated: May 01 2025 with Bootstrap v5.3.5
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /*
   * Pricing Toggle
   */

  const pricingContainers = document.querySelectorAll('.pricing-toggle-container');

  pricingContainers.forEach(function(container) {
    const pricingSwitch = container.querySelector('.pricing-toggle input[type="checkbox"]');
    const monthlyText = container.querySelector('.monthly');
    const yearlyText = container.querySelector('.yearly');

    pricingSwitch.addEventListener('change', function() {
      const pricingItems = container.querySelectorAll('.pricing-item');

      if (this.checked) {
        monthlyText.classList.remove('active');
        yearlyText.classList.add('active');
        pricingItems.forEach(item => {
          item.classList.add('yearly-active');
        });
      } else {
        monthlyText.classList.add('active');
        yearlyText.classList.remove('active');
        pricingItems.forEach(item => {
          item.classList.remove('yearly-active');
        });
      }
    });
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

const updatesData = [
  {
    tag: "Offer",
    title: "Quarter‑End Tax & Compliance Bundle – flat 25% off",
    description:
      "Save on our end‑to‑end compliance package covering VAT, corporate tax, and audit support for Q3.",
    date: "2025-06-20",
    link: "update.html",
    img: "assets/img/image copy 2.png",
  },
  {
    tag: "News",
    title: "We’re now an approved UAE Corporate Tax Register Agent",
    description:
      "MHBC has been officially listed with the Federal Tax Authority to facilitate corporate tax registration and filing.",
    date: "2025-06-15",
    link: "#",
    img: "assets/img/image copy 3.png",
  },
  {
    tag: "Update",
    title: "We’re now an approved UAE Corporate Tax Register Agent",
    description:
      "MHBC has been officially listed with the Federal Tax Authority to facilitate corporate tax registration and filing.",
    date: "2025-06-15",
    link: "#",
    img: "assets/img/image copy 4.png",
  },
];

function renderUpdates(updates) {
  const container = document.getElementById("updatesContainer");
  if (!container) return;
  container.innerHTML = "";

  updates.forEach((u) => {
    const card = document.createElement("article");
    card.className = "update-card";

    let inner = "";
    if (u.img) {
      inner += `<img src="${u.img}" alt="${u.title}" class="update-img">`;
      inner += `<div class="update-content">${buildCardContent(u)}</div>`;
    } else {
      inner += `<div class="update-content">${buildCardContent(u)}</div>`;
    }

    card.innerHTML = inner;
    container.appendChild(card);
  });
}

function buildCardContent(u) {
  return `
    <span class="update-tag">${u.tag}</span>
    <h3 class="update-title">${u.title}</h3>
    <p class="update-date">${formatDate(u.date)}</p>
    <p class="update-desc">${u.description}</p>
    <a href="${u.link}" class="update-btn" aria-label="Read more about ${u.title}">Read More</a>
  `;
}

function formatDate(isoDate) {
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

if (document.readyState !== "loading") {
  renderUpdates(updatesData);
} else {
  document.addEventListener("DOMContentLoaded", () => renderUpdates(updatesData));
}

window.MHBCUpdates = {
  add(update) {
    updatesData.unshift(update);
    renderUpdates(updatesData);
  },
  replace(newList) {
    updatesData.length = 0;
    updatesData.push(...newList);
    renderUpdates(updatesData);
  },
};


/* ===============  Get‑Callback Widget Logic =============== */
(() => {
  const fab = document.getElementById("callbackFab");
  const modal = document.getElementById("callbackModal");
  const closeBtn = modal.querySelector(".cb-close");
  const form = document.getElementById("callbackForm");
  const successMsg = modal.querySelector(".cb-success");

  const openModal = () => {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // prevent page scroll
    form.reset();
    successMsg.hidden = true;
  };

  const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  };

  fab.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();

    if (!name || !phone) {
      alert("Please fill in the required fields.");
      return;
    }

    /* 🔗 TODO: Replace with real POST /fetch call */
    console.log("Callback request", {
      name,
      phone,
      message: form.elements.message.value.trim(),
    });

    successMsg.hidden = false;
    setTimeout(closeModal, 2400);
  });
})();

