/* ─── MOBILE NAV TOGGLE ─────────────────────────────── */
const mobileToggle = document.querySelector('.nav-mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.hidden;
    mobileMenu.hidden = isOpen;
    mobileToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.hidden = true;
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ─── FAQ ACCORDION ─────────────────────────────────── */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    const answerId = btn.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);

    // Close all others
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.faq-answer').forEach(a => {
      a.hidden = true;
    });

    // Toggle this one
    if (!isOpen && answer) {
      btn.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
    }
  });
});

/* ─── SMOOTH SCROLL for anchor links ────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── ACTIVE NAV LINK on scroll ─────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 80 && rect.bottom >= 80) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--text-1)';
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

/* ─── OBSERVER: subtle fade-in on scroll ────────────── */
const observerOptions = {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply to cards and feature rows
document.querySelectorAll('.benefit-card, .feature-row, .trust-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});


/* ─── RATING BADGE — unhide once real Play Store data is verified ── */
/* ASSUMPTION: PLAY_RATING in CONFIG.js must be verified real data before enabling.
   Do NOT enable with fabricated numbers. Remove this block or set PLAY_RATING
   in CONFIG.js once Google Play Console provides real rating data. */
(function initRatingBadge() {
  var cfg = window.LUNYRA_CONFIG || {};
  var rating = cfg.PLAY_RATING;
  if (rating && typeof rating === 'string' && rating.length > 0) {
    var badge = document.getElementById('hero-rating');
    var valueEl = document.getElementById('hero-rating-value');
    var dot = document.getElementById('hero-rating-dot');
    if (badge) {
      badge.style.display = '';
      badge.setAttribute('aria-label', 'Rated ' + rating + ' out of 5 stars on Google Play');
    }
    if (valueEl) valueEl.textContent = rating;
    if (dot) dot.style.display = '';
  }
})();
