import 'the-new-css-reset/css/reset.css';

const contactPath = '/consulting-website/contact';

const contactBtn = document.querySelector<HTMLButtonElement>('#contact-btn');
if (contactBtn) {
  contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.location.pathname !== contactPath) {
      showContactForm();
      history.pushState({ url: contactPath }, '', contactPath)
    }

    e.stopPropagation();
  }, false);
}

window.addEventListener('popstate', (e) => {
  toggle(e.state);
});

function showContactForm() {
  const contactForm = document.getElementById('contact-form');
  const mainContent = document.getElementById('main-content');

  if (contactForm && mainContent) {
    contactForm.classList.remove('inactive');
    mainContent.classList.add('inactive');
  }
}

function hideContactForm() {
  const contactForm = document.getElementById('contact-form');
  const mainContent = document.getElementById('main-content');

  if (contactForm && mainContent) {
    contactForm.classList.add('inactive');
    mainContent.classList.remove('inactive');
  }
}

function toggle(state: PopStateEvent["state"]) {
  if (state && state.url === contactPath) {
    showContactForm();
  } else {
    hideContactForm();
  }
}
