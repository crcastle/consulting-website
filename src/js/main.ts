import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';

// import typescriptLogo from '../assets/images/typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

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
