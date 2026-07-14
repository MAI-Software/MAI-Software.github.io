/**
 * Sistema de motion: reveals al hacer scroll + parallax sutil.
 * Sin librerías. Respeta prefers-reduced-motion (spec §9.5).
 */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --- Stagger dentro de grupos --- */
document.querySelectorAll('[data-reveal-group]').forEach((group) => {
  const items = group.querySelectorAll<HTMLElement>('[data-reveal]');
  items.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 80, 480)}ms`;
  });
});

/* --- Reveals --- */
const revealEls = document.querySelectorAll('[data-reveal]');
if (reduced) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
  );
  revealEls.forEach((el) => io.observe(el));
}

/* --- Parallax (solo capas decorativas e imágenes, nunca texto) --- */
const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
if (!reduced && parallaxEls.length > 0) {
  let ticking = false;

  const update = () => {
    ticking = false;
    const mid = window.innerHeight / 2;
    for (const el of parallaxEls) {
      const speed = Number.parseFloat(el.dataset.parallax ?? '0.1');
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - mid) * -speed;
      el.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`);
    }
  };

  const request = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request, { passive: true });
  update();
}
