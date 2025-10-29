document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  if (!header) return;
  const toggle = header.querySelector('.menu-toggle');
  const nav = header.querySelector('nav');
  const main = document.querySelector('main');

  if (!toggle || !nav || !main) return;

  // update main margin-top to match header height on small screens
  function updateMainMargin() {
    if (window.innerWidth <= 768) {
      const h = header.getBoundingClientRect().height;
      main.style.marginTop = h + 'px';
    } else {
      main.style.marginTop = '';
    }
  }

  toggle.addEventListener('click', function () {
    const isOpen = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    // allow layout to update and then set margin
    requestAnimationFrame(updateMainMargin);
  });

  // close menu when a nav link is clicked (mobile)
  header.querySelectorAll('nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        requestAnimationFrame(updateMainMargin);
      }
    });
  });

  window.addEventListener('resize', function () {
    // if resizing to desktop, ensure nav is visible and no inline margins remain
    if (window.innerWidth > 768) {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      main.style.marginTop = '';
    }
    updateMainMargin();
  });

  // initial adjustment
  updateMainMargin();
});