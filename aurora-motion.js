/* Aurora Motion: local progressive enhancement, no network or storage. */
(() => {
  'use strict';
  const art = document.querySelector('.hero-art');
  const orb = art?.querySelector('.orb');
  const toggle = document.querySelector('#motion-toggle');
  if (!art || !orb || !toggle || !window.matchMedia) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  let paused = false, visible = true, frame = 0, point = null;
  const reset = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    point = null;
    orb.style.removeProperty('--light-x');
    orb.style.removeProperty('--light-y');
    orb.style.removeProperty('--tilt-x');
    orb.style.removeProperty('--tilt-y');
  };
  const sync = () => {
    const stopped = paused || reduced.matches || document.hidden || !visible;
    art.classList.toggle('motion-running', !stopped);
    art.classList.toggle('motion-paused', paused || reduced.matches);
    toggle.setAttribute('aria-pressed', String(paused || reduced.matches));
    toggle.textContent = reduced.matches ? toggle.dataset.reduced : paused ? toggle.dataset.resume : toggle.dataset.pause;
    toggle.disabled = reduced.matches;
    if (stopped || !fine.matches) reset();
  };
  toggle.hidden = false;
  toggle.addEventListener('click', () => { paused = !paused; sync(); });
  reduced.addEventListener?.('change', sync);
  fine.addEventListener?.('change', sync);
  document.addEventListener('visibilitychange', sync);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    }, { threshold: 0.05 });
    observer.observe(art);
  }
  art.addEventListener('pointermove', event => {
    if (!fine.matches || event.pointerType !== 'mouse' || !art.classList.contains('motion-running')) return;
    point = { x: event.clientX, y: event.clientY };
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      if (!point) return;
      const rect = art.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const clamp = value => Math.max(0, Math.min(1, value));
      const x = clamp((point.x - rect.left) / rect.width);
      const y = clamp((point.y - rect.top) / rect.height);
      orb.style.setProperty('--light-x', (15 + 55 * x).toFixed(1) + '%');
      orb.style.setProperty('--light-y', (12 + 50 * y).toFixed(1) + '%');
      orb.style.setProperty('--tilt-x', ((0.5 - y) * 9).toFixed(1) + 'deg');
      orb.style.setProperty('--tilt-y', ((x - 0.5) * 9).toFixed(1) + 'deg');
    });
  }, { passive: true });
  art.addEventListener('pointerleave', reset);
  art.addEventListener('pointercancel', reset);
  sync();
})();
