
(function () {
  const doc = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  function setTheme(theme) {
    doc.setAttribute('data-bs-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    icon.classList.remove('bi-sun', 'bi-moon');
    icon.classList.add(theme === 'dark' ? 'bi-sun' : 'bi-moon');
    toggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  toggleBtn?.addEventListener('click', () => {
    const current = doc.getAttribute('data-bs-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  
  const current = doc.getAttribute('data-bs-theme') || 'light';
  icon?.classList.add(current === 'dark' ? 'bi-sun' : 'bi-moon');
})();


(function () {
  if (window.bootstrap) {
    new bootstrap.ScrollSpy(document.body, { target: '#navbarMain', offset: 90 });
  }
  const navbar = document.getElementById('navbarMain');
  const onScroll = () => {
    if (!navbar) return;
    const scrolled = window.scrollY > 10;
    navbar.classList.toggle('navbar-scrolled', scrolled);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();


(function () {
  const el = document.getElementById('typed-roles');
  if (!el) return;
  const roles = ['Front-End Developer', 'Data Analyst', 'Problem Solver', 'Orator'];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex % roles.length];
    const visible = deleting ? current.slice(0, charIndex--) : current.slice(0, charIndex++);
    el.textContent = visible;

    let delay = deleting ? 40 : 90;
    if (!deleting && visible === current) { delay = 1400; deleting = true; }
    if (deleting && visible === '') { deleting = false; roleIndex++; delay = 500; }
    setTimeout(tick, delay);
  }
  tick();
})();


(function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('#projectGrid .project-item');
  if (!buttons.length || !items.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      items.forEach(item => {
        const category = item.getAttribute('data-category');
        const show = filter === 'all' || category === filter;
        item.classList.toggle('d-none', !show);
      });
    });
  });
})();


(function () {
  const form = document.getElementById('contactForm');
  const toastEl = document.getElementById('formToast');
  const toast = toastEl ? new bootstrap.Toast(toastEl) : null;

  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('was-validated');
    if (!form.checkValidity()) return;

    
    setTimeout(() => {
      toast?.show();
      form.reset();
      form.classList.remove('was-validated');
    }, 300);
  });
})();


(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})(); 