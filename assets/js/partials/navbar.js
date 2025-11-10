/* @preserve Navbar */
document.addEventListener("DOMContentLoaded", function (event) {

  /*
   * Display the menu items on smaller screens
   */
  const pull = document.getElementById('pull');
  const menu = document.querySelector('nav ul');

  ['click', 'touch'].forEach(function (e) {
    pull?.addEventListener(e, function () {
      menu.classList.toggle('hide')
    }, false);
  });

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

  /*
   * Fix browser translation: Replace "Both" with "Home" when "Hem" is incorrectly translated
   */
  function fixTranslation() {
    const siteTitle = document.querySelector('.site-title');
    if (siteTitle && siteTitle.textContent.trim() === 'Both') {
      siteTitle.textContent = 'Home';
    }
  }

  // Check immediately and periodically
  fixTranslation();
  setInterval(fixTranslation, 500);

  // Use MutationObserver to watch for changes made by browser translators
  const siteTitle = document.querySelector('.site-title');
  if (siteTitle) {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          if (siteTitle.textContent.trim() === 'Both') {
            siteTitle.textContent = 'Home';
          }
        }
      });
    });

    observer.observe(siteTitle, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }
});
