(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#site-menu');

  if (navToggle && menu) {
    navToggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  function sendAnalyticsEvent(eventName, eventLabel) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      page_name: 'About RezLive',
      event_label: eventLabel || '',
      page_location: window.location.href
    });

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        event_category: 'About Page Engagement',
        event_label: eventLabel || '',
        page_location: window.location.href
      });
    }
  }

  document.addEventListener('click', (event) => {
    const tracked = event.target.closest('.track-click');
    if (!tracked) return;
    const eventName = tracked.dataset.event || 'tracked_click';
    const eventLabel = tracked.dataset.label || tracked.textContent.trim();
    sendAnalyticsEvent(eventName, eventLabel);
  });

  const newsletter = document.querySelector('.newsletter');
  if (newsletter) {
    newsletter.addEventListener('submit', (event) => {
      event.preventDefault();
      sendAnalyticsEvent('newsletter_submit_attempt', 'Footer newsletter form');
      const input = newsletter.querySelector('input[type="email"]');
      if (input) input.value = '';
      alert('Demo only: connect this form to your email provider before production use.');
    });
  }

  const scrollMarks = [25, 50, 75, 90];
  const sentMarks = new Set();
  window.addEventListener('scroll', () => {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (documentHeight <= 0) return;
    const progress = Math.round((window.scrollY / documentHeight) * 100);
    scrollMarks.forEach((mark) => {
      if (progress >= mark && !sentMarks.has(mark)) {
        sentMarks.add(mark);
        sendAnalyticsEvent('about_scroll_depth', mark + '%');
      }
    });
  }, { passive: true });
})();
