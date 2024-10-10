
// document.addEventListener('DOMContentLoaded', function () {
//   const sections = document.querySelectorAll('[data-target-section]');
//   const menuItems = document.querySelectorAll('[data-target]');

//   function reachedBottomOfDocument() {
//     return ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight)
//   }

//   menuItems.forEach(item => {
//     item.addEventListener('click', function (event) {
//       document.getElementById("navbarSalimOdv").classList.remove('show');
//     });
//   });

//   function setActiveMenuItem() {
//     let currentSection = '';

//     sections.forEach(section => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;
//       if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
//         currentSection = section.getAttribute('id');
//       }
//     });

//     if (reachedBottomOfDocument()) {
//       currentSection = "footer"
//     }

//     menuItems.forEach(item => {
//       item.classList.remove('active');

//       if (item.getAttribute('data-target') === currentSection) {
//         item.classList.add('active');
//       }
//     });
//   }

//   window.addEventListener('scroll', setActiveMenuItem);
//   setActiveMenuItem();
// });
