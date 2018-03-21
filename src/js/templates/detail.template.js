import {html} from './templates.helper';
import tables from './tables.template';
import images from './images.template';

export const detailTemplate = (data) => {
    return html`
<div class="detail-card row" id="detail">
<span id="close-detail" class="close-detail">
  <svg width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ratio="1">
    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>
    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>
  </svg>
</span>
  <div class="col left">
    ${images.wrapper(data.imageUrls)}
    <div class="download">
        Download files
        <div class="accordion-download">
        <div id="download-tabs" class="full"></div>
        </div>
    </div>
  </div>
  <div class="col right">
    <div class="product-name">${data.name}</div>
    <div class="brand-name">${data.brand.name}</div>
    <div class="properties">

        <div><label>Product family:</label> <span>${data.productFamily.name}</span></div>
        <div><label>Product group: </label> <span>${data.productGroup.name}</span></div>
        <div>${data.width ? `<label>Width:</label> <span>${data.width} ${data.isImperial ? 'in' : 'mm'}</span>` : ''}</div>
        <div>${data.height ? `<label>Height:</label> <span>${data.height} ${data.isImperial ? 'in' : 'mm'}</span>` : ''}</div>
        <div>${data.depth ? `<label>Depth:</label> <span>${data.depth} ${data.isImperial ? 'in' : 'mm'}</span>` : ''}</div>
        <div>${data.weight ? `<label>Weight:</label> <span>${data.weight} ${data.isImperial ? 'lb' : 'kg'}</span>` : ''}</div>
        <div><label>Date of publishing: </label> <span id="date"></span></div>
        <div><label>Edition number: </label> <span>${data.editionNumber}</span></div>
        <div><label>Type:</label> <span>${data.contentType.name}</span></div>
    </div>

  <div class="accordion">
  <div class="full">
  ${data.descriptionHtml
        ? `<div class="tab">
      <input id="tab-one" type="checkbox" checked name="tabs">
      <label for="tab-one">Description</label>
      <div class="tab-content">
        <p>${data.descriptionHtml}</p>
      </div>
    </div>`
        : ''}
    ${data.specificationHtml
        ? `<div class="tab">
      <input id="tab-two" type="checkbox" name="tabs">
      <label for="tab-two">Specification text</label>
      <div class="tab-content">
        <p>${data.specificationHtml}</p>
      </div>
    </div>`
        : ''}
    ${Object.keys(data.links).length > 0
        ? `<div class="tab">
      <input id="tab-three" type="checkbox" name="tabs">
      <label for="tab-three">Links</label>
      <div class="tab-content">
        ${tables.links(data)}
      </div>
    </div>`
        : ''}
    ${data.ifc || data.materialMain || data.materialSecondary || data.designedIn
        ? `<div class="tab">
      <input id="tab-four" type="checkbox" name="tabs">
      <label for="tab-four">Related</label>
      <div class="tab-content">
        ${tables.related(data)}
      </div>
    </div>`
        : ''}
    ${data.classifications
        ? `<div class="tab">
      <input id="tab-five" type="checkbox" name="tabs">
      <label for="tab-five">Classification</label>
      <div class="tab-content">
        ${tables.classification(data)}
      </div>
    </div>`
        : ''}
    <div id="region-tab" class="tab">
      <input id="tab-six" type="checkbox" name="tabs">
      <label for="tab-six">Region</label>
      <div id="regions" class="tab-content">
      </div>
    </div>
  </div>
  </div>
    </div>
</div>`;
};
