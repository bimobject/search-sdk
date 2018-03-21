import {html} from './templates.helper';

export const searchTemplate = () => {
    return html`
    <div class="search" id="search">
    <img class="logo" id="logo" src="assets/svg/logo.svg" alt="BIMobject Cloud Search" />
    <div class="search-input-wrapper">
        <span class="search-icon">
          <svg width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ratio="1">
            <circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"></circle>
            <path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path>
          </svg>
        </span>
        <input type="search" id="search-input" placeholder="Search..."  autofocus>
        <span id="clear-search" class="clear-search">
            <svg width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ratio="1">
                <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>
                <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>
            </svg>
        </span>
        <span id="search-time" class="search-time"></span>
    </div>
        <div class="product-list" id="results"></div>
        <div id="loading"></div>
    </div>
    <span class="to-top" id="to-top" title="Back to top">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" version="1.1" x="0px" y="0px">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill="#000000">
                <path d="M68.9393398,61.0606602 C69.5251263,61.6464466 70.4748737,61.6464466 71.0606602,61.0606602 C71.6464466,60.4748737 71.6464466,59.5251263 71.0606602,58.9393398 L51.0606602,38.9393398 C50.4748737,38.3535534 49.5251263,38.3535534 48.9393398,38.9393398 L28.9393398,58.9393398 C28.3535534,59.5251263 28.3535534,60.4748737 28.9393398,61.0606602 C29.5251263,61.6464466 30.4748737,61.6464466 31.0606602,61.0606602 L50.0115879,42.1097324 L68.9393398,61.0606602 Z"/>
            </g>
        </g>
      </svg>
    </span>
    `;
};
