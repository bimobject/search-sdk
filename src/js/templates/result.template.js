import {html} from './templates.helper';

export const resultTemplate = (data) => {
    return html`
    <div id="${data.id}" class="result-item">
        <div class="image brand">
            <img src="${data.brand.imageUrl}"/>
        </div>

        <div class="image product">
            <img src="${data.imageUrl}"/>
        </div>
            <div class="product-name">${data.name}</div>
            <div class="brand-name">${data.brand.name}</div>
        </div>
    </div>`;
};
