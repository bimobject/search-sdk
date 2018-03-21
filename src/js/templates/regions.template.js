import {html} from './templates.helper';

export const region = (region, countries) => {
    return html`
    <div class="region">
      <h4>${region.name}</h4>
      ${countries}
    </div>`;
};

export const country = (country) => {
    return html`
    <div class="country-name">${country}</div>`;
};

export const worldWide = () => {
    return html`
  <div class="world-wide">This product is available world-wide.</div>
  `;
};
