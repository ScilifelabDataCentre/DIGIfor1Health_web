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
   * Fix browser translation: Show English text when page is translated
   */
  function fixTranslation() {
    const siteTitle = document.querySelector('.site-title');
    if (siteTitle) {
      const swedishText = siteTitle.querySelector('.swedish-text');
      const englishText = siteTitle.querySelector('.english-text');
      const currentText = siteTitle.textContent || siteTitle.innerText || '';
      const trimmed = currentText.trim();
      
      // If the text is "Both" (incorrect translation) or page is being translated, show English
      if (trimmed === 'Both' || trimmed.includes('Both') || document.documentElement.lang === 'en' || document.documentElement.getAttribute('translated') === 'yes') {
        if (swedishText) swedishText.style.display = 'none';
        if (englishText) englishText.style.display = 'inline';
        siteTitle.textContent = 'Home';
      } else if (trimmed === 'Hem' || trimmed.includes('Hem')) {
        // If it's still Swedish, show Swedish text
        if (swedishText) swedishText.style.display = 'inline';
        if (englishText) englishText.style.display = 'none';
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
      attributes: true,
      attributeFilter: ['lang', 'translated']
    });
  }

  // Also watch the entire document for translation changes
  const docObserver = new MutationObserver(function(mutations) {
    requestAnimationFrame(function() {
      fixTranslation();
    });
  });

  docObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang', 'translated'],
    subtree: true
  });

  // Watch for changes in the document body
  const bodyObserver = new MutationObserver(function(mutations) {
    requestAnimationFrame(function() {
      fixTranslation();
    });
  });

  bodyObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
});
