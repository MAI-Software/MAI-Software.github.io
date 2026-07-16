/**
 * Sistema de motion: reveals, parallax de scroll, parallax de ratón,
 * tilt 3D, barra de progreso y sombra de cabecera.
 * Sin librerías. Respeta prefers-reduced-motion (spec §9.5).
 */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

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

/* --- Parallax de scroll + barra de progreso + cabecera --- */
const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
const progressFill = document.querySelector<HTMLElement>('.progress-fill');
const header = document.querySelector<HTMLElement>('.site-header');

let ticking = false;

const update = () => {
  ticking = false;
  const doc = document.documentElement;

  if (progressFill) {
    const max = doc.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    progressFill.style.width = `${pct.toFixed(2)}%`;
  }

  header?.classList.toggle('is-scrolled', window.scrollY > 8);

  if (!reduced) {
    const mid = window.innerHeight / 2;
    for (const el of parallaxEls) {
      const speed = Number.parseFloat(el.dataset.parallax ?? '0.1');
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - mid) * -speed;
      el.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`);
    }
  }
};

const requestUpdate = () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
};

window.addEventListener('scroll', requestUpdate, { passive: true });
window.addEventListener('resize', requestUpdate, { passive: true });
update();

/* --- Parallax de ratón (capas del hero, solo puntero fino) --- */
if (!reduced && finePointer) {
  document.querySelectorAll<HTMLElement>('[data-mouse-parallax]').forEach((scene) => {
    const layers = Array.from(scene.querySelectorAll<HTMLElement>('[data-mouse-depth]'));
    if (layers.length === 0) return;

    scene.addEventListener('pointermove', (ev) => {
      const rect = scene.getBoundingClientRect();
      const nx = (ev.clientX - rect.left) / rect.width - 0.5;
      const ny = (ev.clientY - rect.top) / rect.height - 0.5;
      for (const layer of layers) {
        const depth = Number.parseFloat(layer.dataset.mouseDepth ?? '10');
        layer.style.translate = `${(-nx * depth).toFixed(1)}px ${(-ny * depth).toFixed(1)}px`;
      }
    });

    scene.addEventListener('pointerleave', () => {
      for (const layer of layers) layer.style.translate = '0px 0px';
    });
  });
}

/* --- Tilt 3D en tarjetas (solo puntero fino) --- */
if (!reduced && finePointer) {
  const MAX_DEG = 5;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (ev) => {
      const rect = card.getBoundingClientRect();
      const nx = (ev.clientX - rect.left) / rect.width - 0.5;
      const ny = (ev.clientY - rect.top) / rect.height - 0.5;
      card.classList.add('is-tilting');
      card.style.setProperty('--tilt-x', `${(-ny * MAX_DEG).toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${(nx * MAX_DEG).toFixed(2)}deg`);
      card.style.setProperty('--tilt-lift', '-4px');
    });

    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-tilting');
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--tilt-lift', '0px');
    });
  });
}
