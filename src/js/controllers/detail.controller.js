/**
 * @module detailController
 */

import externalCommunicator from '../external/communicator.service.js';
import {
    loaderTemplate
} from '../templates/loader.template';
import {
    detailTemplate
} from '../templates/detail.template';
import {
    downloadTab,
    downloadItem
} from '../templates/downloads.template';
import {
    region,
    country,
    worldWide
} from '../templates/regions.template';

import {
    propertiesTable,
    propertiesRow,
    propertiesTab
} from '../templates/tables.template';
import groupBy from 'lodash/groupBy';

import Siema from 'siema';
import images from '../templates/images.template';

let selected = {
    id: '',
    oldHTML: ''
};
let selectedElement = null;
let detailViewElement = null;
let inlineElement = null;
let elementToAppendTo = null;
let isAuthorized = false;
let authURL = '';
let inline = '';

/**
 * init - Initializes a new detail element and closes the old one (if there is one). Sets loaders and GETs the data needed.
 *
 * @param {Object} options Object with boolean property 'inline' to display the detail view either inline with the search results or as full view.
 *
 */
const init = (options) => {
    if (!window.bim.isLoading) {
        window.bim.isLoading = true;
        inline = options.inline;

        if (inlineElement) {
            close();
        }
        selected.id = getId();

        if (!options.inline) {
            setUpView();
        } else {
            setUpInline();
        }

        externalCommunicator.getProduct(selected.id, (response) => {
            showProduct(response.data);
            externalCommunicator.getProductPropertySets(selected.id, (response) => {
                addPropertiesTable(response.data);
                window.bim.isLoading = false;
            });
        });
        // Get the auth url directly on init
        let state = `#detail-view/${selected.id}`;
        externalCommunicator.authURL(state, (url) => {
            authURL = url;
        });
    }
};

const setUpView = () => {
    detailViewElement = document.getElementById('main');
    detailViewElement.innerHTML = loaderTemplate();
};

const setUpInline = () => {
    selectedElement = document.getElementById(selected.id);
    selectedElement.classList.add('selected');
    inlineElement = document.createElement('DIV');
    inlineElement.innerHTML = loaderTemplate();
    inlineElement.classList.add('inline-item');
    inlineElement.classList.add('detail-card');
    elementToAppendTo = document.getElementById(window.bim.referenceElementId);
    if (elementToAppendTo) {
        elementToAppendTo.insertAdjacentElement('afterend', inlineElement);
    };
};

/**
 * showProduct - Parses the response as HTML and adds CSS classes, eventListeners etc to the detailed product view.
 *
 * @param {Object} data The response data from the getProduct GET request.
 *
 */
const showProduct = (data) => {
    if (!inline) {
        detailViewElement.innerHTML = detailTemplate(data);
        detailViewElement.classList.add('showing');
    } else {
        inlineElement.classList.remove('detail-card');
        inlineElement.innerHTML = detailTemplate(data);
        inlineElement.classList.add('showing');
        scrollToMiddle();
    }

    parseDate(data.dateOfPublishing);
    addCloseClickListener();
    createDownloadsSection(data.files);
    createRegionsSection(data.regions);
    generateImages(data.imageUrls);

    if (!inline) {
        let detailCard = document.getElementById('detail');
        detailCard.classList.add('view');
    };
};

/**
 * scrollToMiddle - Focuses the view on the selected element.
 *
 */
const scrollToMiddle = () => {
    const elementRect = inlineElement.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle = absoluteElementTop - (window.innerHeight / 2);
    window.scrollTo(0, middle + 400);
};

/**
 * getId - Gets the product ID from the window.location.hash and returns it.
 *
 * @returns {string} The product ID.
 */
const getId = () => {
    let lastIndexOfSlash = window.location.hash.lastIndexOf('/');
    // A check for windows machines
    if (lastIndexOfSlash === -1) {
        lastIndexOfSlash = window.location.hash.lastIndexOf('\\');
    }
    let id = window.location.hash.substring(lastIndexOfSlash + 1);
    return id;
};

/**
 * parseDate - Parses the date string and removes the time part of it and inserts into the DOM.
 *
 * @param {string} dateString Date string
 *
 */
const parseDate = (dateString) => {
    let date = dateString.split('T');
    document.getElementById('date').innerHTML = date[0];
};

/**
 * addCloseClickListener - Adds event listener for closing the detail view.
 *
 */
const addCloseClickListener = () => {
    let element = document.getElementById('close-detail');
    element.addEventListener('click', (event) => {
        if (inline) {
            window.location.hash = '';
            event.stopPropagation();
            close();
        } else {
            window.location.hash = '#search';
            detailViewElement = null;
        }
    });
};

/**
 * close - Closes the view - plain and simple. Removes CSS-classes that are not needed anymore.
 *
 */
const close = () => {
    if (inline) {
        selectedElement.classList.remove('selected');
        if (inlineElement.parentNode) {
            inlineElement.parentNode.removeChild(inlineElement);
            inlineElement = null;
        }
    } else {
        selectedElement.classList.remove('selected');
    }
};

/**
 * createDownloadsSection - Loops through the various files associated with a product and creates the HTML for the downloads sections - grouped by platform.
 *
 * @param {Object} files An array of the files for the product.
 *
 */
const createDownloadsSection = (files) => {
    let downloadTabsSection = document.getElementById('download-tabs');
    let downloadTabs = [];
    let fileIds = [];

    let groupedFiles = groupBy(files, file => {
        return file.fileType.name;
    });
    let objectKeys = Object.keys(groupedFiles);

    for (let i = 0; i < objectKeys.length; i++) {
        let tabName = objectKeys[i];
        let items = [];

        for (let j = 0; j < groupedFiles[tabName].length; j++) {
            items.push(downloadItem(groupedFiles[tabName][j]));
            fileIds.push(groupedFiles[tabName][j].id);
        }
        downloadTabs.push(downloadTab(tabName, groupedFiles[tabName][0].fileType.imageUrl, items.join('')));
    }
    downloadTabsSection.innerHTML = downloadTabs.join('');
    addDownloadClickListeners(fileIds);
};

/**
 * addDownloadClickListeners - Adds event listeners to download the file when download button is clicked.
 *
 * @param {Object} fileIds Array of the fileIds for the product. Used as id for the HTML-element and as param in the GET request.
 *
 */
const addDownloadClickListeners = (fileIds) => {
    for (let i = 0; i < fileIds.length; i++) {
        let element = document.getElementById(fileIds[i].toString());
        element.addEventListener('click', () => {
            element.setAttribute('disabled', true);
            externalCommunicator.isAuthorized(authorized => {
                isAuthorized = authorized;

                if (isAuthorized) {
                    let fileName = element.getAttribute('fileName');
                    externalCommunicator.downloadProduct(getId(), fileIds[i], fileName);
                } else {
                    externalCommunicator.goToLoginPage(authURL);
                }
            });
        });
    }
};

/**
 * createRegionsSection - Loops through the regions associated with a product and creates the HTML for the regions tab in the accordion.
 *
 * @param {Object} regions Array of regions for the product. If no regions are passed in - the product is available world wide
 *
 */
const createRegionsSection = (regions) => {
    let regionsSection = document.getElementById('regions');
    if (regions.length === 0) {
        regionsSection.innerHTML = worldWide();
        return;
    }
    let regionsHTML = [];
    // Loop all regions
    for (let i = 0; i < regions.length; i++) {
        let countries = [];
        let currentRegion = regions[i];
        // Loop all countries in a region and create a country element for each.
        for (let j = 0; j < currentRegion.countries.length; j++) {
            countries.push(country(currentRegion.countries[j].name));
        }
        // Add country elements to region element.
        regionsHTML.push(region(currentRegion, countries.join('')));
    }
    // Add region elements to DOM.
    regionsSection.innerHTML = regionsHTML.join('');
};

/**
 * addPropertiesTable - Loops through the propertySets associated with a product and creates the HTML for the properties tab in the accordion.
 *
 * @param {Object} propertySets Array of propertySets for the product
 *
 */
const addPropertiesTable = (propertySets) => {
    if (propertySets.length > 0) {
        let lastTab = document.getElementById('region-tab');
        lastTab.insertAdjacentHTML('afterend', propertiesTab());
        let tables = [];
        // Loop all propertySets and set the propertySetName, ownerBrandName and properties for each set.
        for (let i = 0; i < propertySets.length; i++) {
            let rows = [];
            let propertySetName = propertySets[i].name;
            let ownerBrandName = propertySets[i].ownerBrand.name;
            let properties = propertySets[i].properties;
            // Loop properties and create a table row for each property name/value pair.
            for (let j = 0; j < properties.length; j++) {
                let propertyName = properties[j].definition.name;
                let parsedPropertyValue = parsePropertyValue(properties[j].value);
                rows.push(propertiesRow(propertyName, parsedPropertyValue));
            }
            // Add rows to a new table element.
            tables.push(propertiesTable(ownerBrandName, propertySetName, rows.join('')));
        }
        // Add all tables to DOM.
        document.getElementById('properties').innerHTML = tables.join('');
    }
};

/**
 * generateImages - The image carousel
 *
 * @param {type} imageUrls And array of image url's that should be presented
 *
 */
const generateImages = (imageUrls) => {
    let element = document.getElementById('siema');
    let imageSlideshow = [];
    // Create images
    for (let i = 0; i < imageUrls.length; i++) {
        imageSlideshow.push(images.image(imageUrls[i]));
    }
    // Add to div
    element.innerHTML = imageSlideshow.join('');
    // Create slideshow element, we think it's ok to have a slideshow with only one element
    const slidshow = new Siema();
    // If more then one picture, add click listeners to arrows
    if (imageUrls.length > 1) {
        document.querySelector('.control.prev').addEventListener('click', () => {
            slidshow.prev();
        });
        document.querySelector('.control.next').addEventListener('click', () => {
            slidshow.next();
        });
    };
};

/**
 * parsePropertyValue - Parses the property values to the proper format including the unit symbol.
 *
 * @param {Object} propertyValue Object containing the value and meta data on how the value should be parsed.
 *
 * @returns {string} The parsed value to be used.
 */
const parsePropertyValue = (propertyValue) => {
    let parsedValue = '';
    if (propertyValue.isRanged) { // If value is ranged add ' - ' and the measurementUnit if it exists.
        parsedValue = `${propertyValue.value.min} - ${propertyValue.value.max} ${propertyValue.measurementUnit ? propertyValue.measurementUnit.symbol : ''} `;
    } else if (propertyValue.isMultiValued) { // If value is isMultiValued, add the measurementUnit (if it exists) and ',' between each value.
        parsedValue = propertyValue.value.join(` ${propertyValue.measurementUnit ? propertyValue.measurementUnit.symbol : ''}, `);
        parsedValue = `${parsedValue} ${propertyValue.measurementUnit ? propertyValue.measurementUnit.symbol : ''}`;
    } else if (propertyValue.value != null) { // Add measurementUnit if it exists.
        parsedValue = `${propertyValue.value} ${propertyValue.measurementUnit ? propertyValue.measurementUnit.symbol : ''} `;
    } else if (propertyValue.hasRawValue && propertyValue.rawValue) { // Display rawValue if it has one
        parsedValue = propertyValue.rawValue;
    };
    return parsedValue;
};

export default {
    init: init
};
