/* @preserve Navbar */
document.addEventListener("DOMContentLoaded", function (event) {

  /*
   * Display the menu items on smaller screens
   */
  const pull = document.getElementById('pull');
  const menu = document.querySelector('nav ul');

  const toggleMenu = function (ev) {
    if (ev) ev.preventDefault();
    if (menu) menu.classList.toggle('hide');
  };
  if (pull) {
    pull.addEventListener('click', toggleMenu, false);
  }

  /*
   * Make the header images move on scroll
   */
  window.addEventListener('scroll', function () {
    const offset = -(window.scrollY || window.pageYOffset || document.body.scrollTop) / 3;
    const main = document.getElementById('main');
    if (main) {
      main.style.backgroundPosition = '100% ' + (offset - 50) + 'px' + ', 0%, center top';
    }
  });
});
