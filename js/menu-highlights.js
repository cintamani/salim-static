
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('[data-target-section]');
  const menuItems = document.querySelectorAll('[data-target]');

  menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const target = item.getAttribute('data-target');
      const section = document.querySelector(`[id="${target}"]`);

      if (section) {
        window.scrollTo({
          top: section.offsetTop - document.getElementById("menu-bar").clientHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  function setActiveMenuItem() {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    menuItems.forEach(item => {
      item.classList.remove('active');

      if (item.getAttribute('data-target') === currentSection) {
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveMenuItem);
  setActiveMenuItem();
});
