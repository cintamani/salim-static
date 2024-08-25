let hasBackground = false;

function transitionToNoBackground(navbar) {
  navbar.classList.remove('custom-bg-colour');

  // navbar.querySelectorAll('.text-dark').forEach(function (element) {
  //   element.classList.replace('text-dark', 'text-white');
  // });

  hasBackground = false;
}

function transitionToColouredBackground(navbar) {
  navbar.classList.add('custom-bg-colour');

  // navbar.querySelectorAll('.text-white').forEach(function (element) {
  //   element.classList.replace('text-white', 'text-dark');
  // });

  hasBackground = true;
}

function toggleNavbar(navbar) {
  const scrollY = window.scrollY;

  const clientWidth = document.documentElement.clientWidth;

  if (clientWidth < 768 || (scrollY > 10 && !hasBackground)) {
    return transitionToColouredBackground(navbar);
  }

  if (!scrollY) {
    transitionToNoBackground(navbar);
  }
}

const navbar = document.querySelector('.navbar');

if (navbar) {
  toggleNavbar(navbar);

  window.addEventListener('scroll', function () {
    toggleNavbar(navbar);
  });

  window.addEventListener('resize', function () {
    toggleNavbar(navbar);
  });
}
