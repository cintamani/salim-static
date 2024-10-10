// let hasBackground = false;

// function transitionToNoBackground(navbar) {
//   navbar.classList.remove('custom-bg-colour');

//   hasBackground = false;
// }

// function transitionToColouredBackground(navbar) {
//   navbar.classList.add('custom-bg-colour');

//   hasBackground = true;
// }

// function toggleNavbar(navbar) {
//   const scrollY = window.scrollY;

//   const clientWidth = document.documentElement.clientWidth;

//   if (clientWidth < 768 || (scrollY > 10 && !hasBackground)) {
//     return transitionToColouredBackground(navbar);
//   }

//   if (!scrollY) {
//     transitionToNoBackground(navbar);
//   }
// }

// document.addEventListener('DOMContentLoaded', function () {
//   const navbar = document.querySelector('.navbar');

//   if (navbar) {
//     toggleNavbar(navbar);

//     window.addEventListener('scroll', function () {
//       toggleNavbar(navbar);
//     });

//     window.addEventListener('resize', function () {
//       toggleNavbar(navbar);
//     });
//   }
// });
