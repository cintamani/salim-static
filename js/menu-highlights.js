
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('[data-target-section]');
  const menuItems = document.querySelectorAll('[data-target]');

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
  setActiveMenuItem(); // Call once to set initial state
});
