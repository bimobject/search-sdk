import {html} from './templates.helper';

export const downloadItem = (file) => {
    return html`
      <div class="download-item" title="${file.description}">
      <!--<div class="icon">
          <img src="${file.fileType.imageUrl}"/>
      </div>-->
      <div class="text">
          <div class="file-name">${file.name}</div>
      </div>
      <div class="buttons">
        <button id="${file.id}" fileName="${file.name}" class="button download-button">Download</button>
      </div>
      </div>
  `;
};

export const downloadTab = (platform, platformIcon, item) => {
    return html`
    <div class="tab">
      <input id="${platform}" type="checkbox" name="tabs">
      <label for="${platform}">${platform}
      <div class="tab-icon">
        <img src="${platformIcon}">
      </div>
      </label>
      <div class="tab-content">
      ${item}
      </div>
    </div>`;
};
