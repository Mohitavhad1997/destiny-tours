/* ==========================================================================
   Destiny Tours — gallery.js
   Masonry filter + lightbox viewer
   ========================================================================== */
(function () {
  "use strict";

  var items = Array.prototype.slice.call(document.querySelectorAll(".masonry-item"));
  var filterButtons = document.querySelectorAll(".gallery-filters button");
  var lightbox = document.querySelector(".lightbox");
  if (!items.length && !lightbox) return;

  /* ---------------- Filtering ---------------- */
  if (filterButtons.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) {
          b.classList.remove("is-active");
        });
        btn.classList.add("is-active");
        var filter = btn.getAttribute("data-filter");
        items.forEach(function (item) {
          var cat = item.getAttribute("data-category");
          if (filter === "all" || cat === filter) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  /* ---------------- Lightbox ---------------- */
  if (!lightbox) return;
  var lbImage = lightbox.querySelector("img");
  var closeBtn = lightbox.querySelector(".lightbox-close");
  var prevBtn = lightbox.querySelector(".lightbox-prev");
  var nextBtn = lightbox.querySelector(".lightbox-next");
  var visibleItems = [];
  var activeIndex = 0;

  function getVisible() {
    return items.filter(function (item) {
      return item.style.display !== "none";
    });
  }

  function openLightbox(index) {
    visibleItems = getVisible();
    activeIndex = index;
    var img = visibleItems[activeIndex].querySelector("img");
    lbImage.src = img.getAttribute("src");
    lbImage.alt = img.getAttribute("alt") || "Destiny Tours travel photo";
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function showRelative(step) {
    if (!visibleItems.length) return;
    activeIndex = (activeIndex + step + visibleItems.length) % visibleItems.length;
    var img = visibleItems[activeIndex].querySelector("img");
    lbImage.src = img.getAttribute("src");
    lbImage.alt = img.getAttribute("alt") || "Destiny Tours travel photo";
  }

  items.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      var visNow = getVisible();
      openLightbox(visNow.indexOf(item));
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", function () { showRelative(-1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { showRelative(1); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showRelative(-1);
    if (e.key === "ArrowRight") showRelative(1);
  });
})();
