import {
    html
} from './templates.helper';

const wrapper = (imageUrls) => {
    return html`<div class="siema-wrapper">
    ${imageUrls.length > 1 ? `${controls()}` : ''}
                    <div id="siema" class="siema"></div>
                </div>`;
};

const image = (url) => {
    return html`<div><img src="${url}"></img></div>`;
};

const controls = () => {
    return html`<i class="control prev">&#8249;</i>
                <i class="control next">&#8250;</i>`;
};

export default {
    image: image,
    wrapper: wrapper,
    controls: controls
};
