import {html} from './templates.helper';

const links = (data) => {
    return html`
  <table class="detail-table">
  ${data.links.externalProductUrl ? `<tr>
      <th class="header">Product url: </th>
      <td class="data"><a href="${data.links.externalProductUrl}" target="_blank">${data.links.externalProductUrl}</a></td>
    </tr>` : ''}
    ${data.links.installInstructionsUrl ? `<tr>
      <th class="header">Installation instructions: </th>
      <td class="data"><a href="${data.links.installInstructionsUrl}" target="_blank">${data.links.installInstructionsUrl}</a></td>
    </tr>` : ''}
    ${data.links.cobieProductDataSheetUrl ? `<tr>
      <th class="header">COBie Product Data Sheet: </th>
      <td class="data"><a href="${data.links.cobieProductDataSheetUrl}" target="_blank">${data.links.cobieProductDataSheetUrl}</a></td>
    </tr>` : ''}
    ${data.links.productCertificationUrl ? `<tr>
      <th class="header">Product certification: </th>
      <td class="data"><a href="${data.links.productCertificationUrl}" target="_blank">${data.links.productCertificationUrl}</a></td>
    </tr>` : ''}
    ${data.links.technicalDescriptionUrl ? `<tr>
      <th class="header">Technical description: </th>
      <td class="data"><a href="${data.links.technicalDescriptionUrl}" target="_blank">${data.links.technicalDescriptionUrl}</a></td>
    </tr>` : ''}
    ${data.links.instructionVideoUrl ? `<tr>
      <th class="header">Instruction video: </th>
      <td class="data"><a href="${data.links.instructionVideoUrl}" target="_blank">${data.links.instructionVideoUrl}</a></td>
    </tr>` : ''}
    ${data.eanCode ? `<tr>
      <th class="header">EAN code: </th>
      <td class="data">${data.eanCode}</td>
    </tr>` : ''}
  </table>
  `;
};

const related = (data) => {
    return html`
  <table class="detail-table">
  ${data.materialMain ? `<tr>
    <th class="header">Material main: </th>
    <td class="data">${data.materialMain.name} </td>
  </tr>` : ''}
  ${data.materialSecondary ? `<tr>
    <th class="header">Material secondary: </th>
    <td class="data">${data.materialSecondary.name}</td>
  </tr>` : ''}
  ${data.designedIn ? `<tr>
    <th class="header">Designed in: </th>
    <td class="data">${data.designedIn.name}</td>
  </tr>` : ''}
  ${data.manufacturedIn ? `<tr>
    <th class="header">Manufactured in: </th>
    <td class="data">${data.manufacturedIn.name}</td>
  </tr>` : ''}
</table>  `;
};

const classification = (data) => { // Check names of properties
    return html`
  <table class="detail-table">
  ${data.classifications.bimObjectCategory ? `<tr>
    <th class="header">BIMobject Category: </th>
    <td class="data">${data.classifications.bimObjectCategory.name}</td>
  </tr>` : ''}
  ${data.ifc ? `<tr>
    <th class="header">IFC Classification: </th>
    <td class="data">${data.ifc.name}</td>
  </tr>` : ''}
  ${data.classifications.unspsc ? `<tr>
        <th class="header">UNSPSC Name: </th>
        <td class="data">${data.classifications.unspsc.name}</td>
    </tr>
      <tr>
        <th class="header">UNSPSC Code: </th>
        <td class="data">${data.classifications.unspsc ? data.classifications.unspsc.code : ''}</td>
      </tr> ` : ''}
 ${data.classifications.uniClass14 ? `<tr>
    <th class="header">Uniclass 1.4 Description: </th>
    <td class="data">${data.classifications.uniClass14.name}</td>
  </tr>
  <tr>
    <th class="header">Uniclass 1.4 Code: </th>
    <td class="data">${data.classifications.uniClass14.code}</td>
  </tr>` : ''}
  ${data.classifications.uniClass20 ? `<tr>
  <th class="header">Uniclass 2.0 Description: </th>
  <td class="data">${data.classifications.uniClass20.name}</td>
  </tr>
  <tr>
  <th class="header">Uniclass 2.0 Code: </th>
  <td class="data">${data.classifications.uniClass20.code}</td>
  </tr>` : ''}
  ${data.classifications.uniClass2015 ? `<tr>
    <th class="header">Uniclass 2015 Description: </th>
    <td class="data">${data.classifications.uniClass2015.name}</td>
  </tr>
  <tr>
    <th class="header">Uniclass 2015 Code: </th>
    <td class="data">${data.classifications.uniClass2015.code}</td>
  </tr>` : ''}
  ${data.classifications.nbsReference ? `<tr>
    <th class="header">NBS Reference Code: </th>
    <td class="data">${data.classifications.nbsReference.code}</td>
  </tr>
  <tr>
    <th class="header">NBS Reference Description: </th>
    <td class="data">${data.classifications.nbsReference.name}</td>
  </tr>` : ''}
  ${data.classifications.masterFormat2014 ? `<tr>
    <th class="header">CSI MasterFormat 2014 Code: </th>
    <td class="data">${data.classifications.masterFormat2014.code}</td>
  </tr>
  <tr>
    <th class="header">CSI MasterFormat 2014 Title: </th>
    <td class="data">${data.classifications.masterFormat2014.name}</td>
  </tr>` : ''}
  ${data.classifications.omniClass ? `<tr>
    <th class="header">OmniClass Number: </th>
    <td class="data">${data.classifications.omniClass.code}</td>
  </tr>
  <tr>
    <th class="header">OmniClass Title: </th>
    <td class="data">${data.classifications.omniClass.name}</td>
  </tr>` : ''}
  ${data.classifications.uniFormat2 ? `<tr>
    <th class="header">CSI UniFormat II Code: </th>
    <td class="data">${data.classifications.uniFormat2.code}</td>
  </tr>
  <tr>
    <th class="header">CSI UniFormat II Title: </th>
    <td class="data">${data.classifications.uniFormat2.name}</td>
  </tr>` : ''}
  </table>  `;
};

export const propertiesTable = (ownerBrandName, propertySetName, rows) => {
    return html`
    <div class="property-table-wrapper">
    <h3>${ownerBrandName}</h3>
    <hr>
      <h4>${propertySetName}</h4>
      <table class="detail-table">
      ${rows}
    </table>
    </div>`;
};

export const propertiesRow = (name, value) => {
    return html`
    <tr>
      <th class="header">${name}: </th>
      <td class="data">${value}</td>
    </tr>
    `;
};

export const propertiesTab = () => {
    return html`
    <div id="properties-tab" class="tab">
        <input id="tab-seven" type="checkbox" name="tabs">
          <label for="tab-seven">Properties</label>
          <div id="properties" class="tab-content">
          </div>
        </div>`;
};

export default {
    links: links,
    related: related,
    classification: classification
};
