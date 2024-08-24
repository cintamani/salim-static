// vanilla JS


let hasBackground = false;

function transitionToNoBackground(navbar) {
  navbar.classList.remove('bg-white');

  navbar.querySelectorAll('.text-dark').forEach(function (element) {
    element.classList.replace('text-dark', 'text-white');
  });

  hasBackground = false;
}

function transitionToWhiteBackground(navbar) {
  navbar.classList.add('bg-white');

  navbar.querySelectorAll('.text-white').forEach(function (element) {
    element.classList.replace('text-white', 'text-dark');
  });

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

// if (navbar) {
//   window.addEventListener('scroll', function () {
//     toggleNavbar(navbar);
//   });
// }
