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
    const titleText = document.querySelector('.site-title .title-text');
    
    // Check both the link and the span inside
    const elementsToCheck = [siteTitle, titleText].filter(el => el !== null);
    
    elementsToCheck.forEach(function(element) {
      if (element) {
        let currentText = element.textContent || element.innerText || '';
        const trimmed = currentText.trim();
        
        // Check for "Both" in any case or as part of the text
        if (trimmed.toLowerCase() === 'both' || trimmed.includes('Both') || trimmed.includes('both') || trimmed.includes('BOTH')) {
          // Force replace with "Home"
          element.textContent = 'Home';
          element.innerText = 'Home';
          
          // Also check and replace in innerHTML if needed
          if (element.innerHTML) {
            element.innerHTML = element.innerHTML.replace(/Both/gi, 'Home');
          }
          
          // Force update all child nodes
          if (element.firstChild && element.firstChild.nodeType === Node.TEXT_NODE) {
            element.firstChild.textContent = 'Home';
          }
          
          // Update all text nodes
          const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
          let node;
          while (node = walker.nextNode()) {
            if (node.textContent && (node.textContent.includes('Both') || node.textContent.includes('both') || node.textContent.includes('BOTH'))) {
              node.textContent = node.textContent.replace(/Both/gi, 'Home');
            }
          }
        }
      }
    });
  }

  // Check immediately, after a delay, and very frequently
  fixTranslation();
  setTimeout(fixTranslation, 50);
  setTimeout(fixTranslation, 100);
  setTimeout(fixTranslation, 200);
  setTimeout(fixTranslation, 500);
  setTimeout(fixTranslation, 1000);
  setTimeout(fixTranslation, 2000);
  setInterval(fixTranslation, 50); // Check every 50ms

  // Use MutationObserver to watch for changes made by browser translators
  const siteTitle = document.querySelector('.site-title');
  if (siteTitle) {
    const observer = new MutationObserver(function(mutations) {
      // Check immediately and also after animation frame
      fixTranslation();
      requestAnimationFrame(function() {
        fixTranslation();
        // Double check after a tiny delay
        setTimeout(fixTranslation, 10);
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
    // Check if any mutation affects the site title
    let shouldCheck = false;
    mutations.forEach(function(mutation) {
      if (mutation.target && (mutation.target.classList && mutation.target.classList.contains('site-title') || 
          mutation.target.closest && mutation.target.closest('.site-title'))) {
        shouldCheck = true;
      }
    });
    if (shouldCheck) {
      fixTranslation();
      requestAnimationFrame(function() {
        fixTranslation();
        setTimeout(fixTranslation, 10);
      });
    }
  });

  bodyObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
});
