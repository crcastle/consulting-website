import 'the-new-css-reset/css/reset.css';

import './contactForm.ts';
import './swiper.ts';

import '../styles/style.css';

// Keep copyright year up-to-date
const copyEl = document.querySelector("#copyright");
if (copyEl) {
  const updatedFooterText = copyEl.innerHTML.replace("2004", (new Date()).getFullYear().toString());
  copyEl.innerHTML = updatedFooterText;
}
