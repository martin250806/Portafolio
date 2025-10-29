document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('header');

  toggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });
});