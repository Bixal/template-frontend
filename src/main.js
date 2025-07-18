import "./assets/css/style.css";
import "./assets/scss/index.scss";

import javascriptLogo from "./assets/images/javascript.svg";
import viteLogo from "/vite.svg";

// All USWDS component JS.
import "@uswds/uswds";
import { setupCounter } from "./components/counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello from Vite!</h1>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
