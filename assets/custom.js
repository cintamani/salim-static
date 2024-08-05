// vanilla JS


let hasBackground = false;

function transitionToNoBackground(navbar) {
  navbar.classList.remove('bg-primary');

  hasBackground = false;
}

function transitionToWhiteBackground(navbar) {
  navbar.classList.add('bg-primary');

  hasBackground = true;
}

function toggleNavbar(navbar) {
  const scrollY = window.scrollY;

  if (scrollY > 10 && !hasBackground) {
    transitionToWhiteBackground(navbar);
  }

  if (!scrollY) {
    transitionToNoBackground(navbar);
  }
}

const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', function () {
    toggleNavbar(navbar);
  });
}
