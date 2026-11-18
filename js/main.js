// ===== Portafolio · interacciones =====
(() => {
  const root = document.documentElement;

  // --- Tema claro / oscuro ---
  const themeBtn = document.getElementById('themeBtn');
  const isDark = () =>
    root.dataset.theme ? root.dataset.theme === 'dark'
                       : matchMedia('(prefers-color-scheme: dark)').matches;
  const paintIcon = () =>
    themeBtn.querySelector('use').setAttribute('href', isDark() ? '#i-sun' : '#i-moon');

  themeBtn.addEventListener('click', () => {
    root.dataset.theme = isDark() ? 'light' : 'dark';
    try { localStorage.setItem('tema', root.dataset.theme); } catch (e) {}
    paintIcon();
  });
  paintIcon();

  // --- Menú móvil ---
  const menuBtn = document.getElementById('menuBtn');
  const links = document.getElementById('navLinks');
  menuBtn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    })
  );

  // --- Borde del nav al hacer scroll ---
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 10);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Animación de aparición ---
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  // --- Enlace activo según la sección visible ---
  const navLinks = [...links.querySelectorAll('a')];
  const sections = navLinks.map(a => document.querySelector(a.getAttribute('href')));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => s && spy.observe(s));

  // --- Copiar correo ---
  const copyBtn = document.getElementById('copyBtn');
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.email);
      copyBtn.textContent = '¡Copiado!';
    } catch (e) {
      copyBtn.textContent = copyBtn.dataset.email;
    }
    setTimeout(() => (copyBtn.textContent = 'Copiar correo'), 2000);
  });

  // --- Año actual ---
  document.getElementById('year').textContent = new Date().getFullYear();
})();
