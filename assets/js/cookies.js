document.addEventListener('DOMContentLoaded', function() {
  const cookieConsentModal = new bootstrap.Modal(document.getElementById('cookieConsentModal'));
  const openCookieConsentButtons = document.querySelectorAll('[data-open-cookie-consent]');
  const cookieConsentMinimized = document.getElementById('cookieConsentMinimized');
  const savePreferencesButton = document.getElementById('savePreferences');
  const marketingCookiesToggle = document.getElementById('marketingCookies');

  savePreferencesButton.addEventListener('click', saveCookiePreferences);

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  }

  function showCookieConsent() {
    const consentStatus = getCookie('cookieConsent');
    if (!consentStatus) {
      cookieConsentModal.show();
    } else if (consentStatus === 'minimized') {
      cookieConsentMinimized.style.display = 'block';
    }

    const marketingConsent = getCookie('marketingCookies');
    if(!marketingConsent) {
      marketingCookiesToggle.checked = true;
    } else {
      marketingCookiesToggle.checked = marketingConsent === 'true';
    }
  }

  function saveCookiePreferences() {
    setCookie('cookieConsent', 'minimized', 180);
    setCookie('marketingCookies', marketingCookiesToggle.checked, 180);
    cookieConsentModal.hide();
    cookieConsentMinimized.style.display = 'block';
  }

  savePreferencesButton.addEventListener('click', saveCookiePreferences);
  document.getElementById('cookieConsentModal').addEventListener('hidden.bs.modal', function() {
    cookieConsentMinimized.style.display = 'block';
  });

  cookieConsentMinimized.addEventListener('click', function() {
    cookieConsentModal.show();
    cookieConsentMinimized.style.display = 'none';
  });

  openCookieConsentButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      cookieConsentModal.show();
      cookieConsentMinimized.style.display = 'none';
    });
  });

  cookieConsentMinimized.addEventListener('mouseenter', function() {
    this.style.marginRight = '0px';
  });

  cookieConsentMinimized.addEventListener('mouseleave', function() {
    this.style.marginRight = '-110px';
  });

  showCookieConsent();
});
