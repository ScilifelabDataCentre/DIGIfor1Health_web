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
    if (siteTitle) {
      const text = siteTitle.textContent || siteTitle.innerText || '';
      const trimmed = text.trim();
      if (trimmed === 'Both' || trimmed.includes('Both')) {
        // Replace all instances of "Both" with "Home"
        siteTitle.textContent = 'Home';
        // Also update innerHTML if it contains Both
        if (siteTitle.innerHTML && siteTitle.innerHTML.includes('Both')) {
          siteTitle.innerHTML = siteTitle.innerHTML.replace(/Both/g, 'Home');
        }
      }
    }
  }

  // Check immediately, after a delay, and periodically
  fixTranslation();
  setTimeout(fixTranslation, 100);
  setTimeout(fixTranslation, 500);
  setTimeout(fixTranslation, 1000);
  setTimeout(fixTranslation, 2000);
  setInterval(fixTranslation, 200);

  // Use MutationObserver to watch for changes made by browser translators
  const siteTitle = document.querySelector('.site-title');
  if (siteTitle) {
    const observer = new MutationObserver(function(mutations) {
      // Use requestAnimationFrame to ensure we check after DOM updates
      requestAnimationFrame(function() {
        fixTranslation();
      });
    });

    observer.observe(siteTitle, {
      childList: true,
      characterData: true,
      subtree: true,
      attributes: false
    });
  }

  // Also watch the entire document for translation changes
  const docObserver = new MutationObserver(function(mutations) {
    requestAnimationFrame(function() {
      fixTranslation();
    });
  });

  docObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
});
