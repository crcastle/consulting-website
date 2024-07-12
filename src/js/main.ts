import 'the-new-css-reset/css/reset.css';

import './contactForm.ts';
import './swiper.ts';

import '../styles/style.css';

// Keep copyright year up-to-date
const copyEl = document.querySelector("#copyright");
if (copyEl) {
  copyEl.innerHTML = "© " + (new Date()).getFullYear() + " Christopher Castle";
}
