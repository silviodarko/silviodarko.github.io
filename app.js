/* SilvOS landing page: progressive enhancement only. No cookies, analytics or network calls. */
(() => {
  'use strict';
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const header = document.getElementById('site-header');
  const menuButton = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-nav');
  const navigationLinks = Array.from(document.querySelectorAll('.desktop-nav a, .mobile-nav a'));

  function updateHeader() {
    header?.classList.toggle('scrolled', window.scrollY > 16);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, {passive:true});

  function setMenu(open) {
    if (!menu || !menuButton) return;
    menu.classList.toggle('open', open);
    menu.inert = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  if (menu && menuButton) {
    setMenu(false);
    menuButton.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        setMenu(false);
        menuButton.focus();
      }
    });
    document.addEventListener('click', e => {
      if (menu.classList.contains('open') && !header.contains(e.target)) setMenu(false);
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 850 && menu.classList.contains('open')) setMenu(false);
    });
  }

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = Array.from(document.querySelectorAll('.reveal'));
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible'));
  } else {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      });
    }, {threshold:0.07, rootMargin:'0px 0px -22px 0px'});
    reveals.forEach(el => revealObserver.observe(el));
  }

  if ('IntersectionObserver' in window) {
    const anchors = Array.from(document.querySelectorAll('main section[id]'));
    const sectionsObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (!visible.length) return;
      const active = '#' + visible[0].target.id;
      navigationLinks.forEach(a => {
        if (a.getAttribute('href') === active) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    }, {rootMargin:'-25% 0px -55% 0px',threshold:0});
    anchors.forEach(s => sectionsObserver.observe(s));
  }
})();
