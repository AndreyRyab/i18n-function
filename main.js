import './style.css';
import { setupOutputText } from './text-generator';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>I18n output:</h1>
    <p class="output" id="text-output"></p>
  </div>
`;

setupOutputText(document.querySelector('#text-output'));
