/**
 * @module resultController
 */

import {
    resultTemplate
} from '../templates/result.template';
import {
    loaderTemplate
} from '../templates/loader.template';

let results = {};
let allElements;

/**
 * init - Initializes the result view and inserts into the DOM.
 *
 * @param {Object} data The response data from the search GET request.
 *
 */
const init = (data) => {
    results = document.getElementById('results');
    if (data) {
        let resultsItems = [];
        for (var i = 0; i < data.length; i++) {
            let item = resultTemplate(data[i]);
            resultsItems.push(item);
        }
        if (resultsItems.length === 0) {
            results.innerHTML = `<p class="no-results">Sorry, no results...</p>`;
        } else {
            results.innerHTML = resultsItems.join('');
            addClickListeners(data);
        }
    }
};

/**
 * appendResults - Appends more results to the results view when the bottom of the page is reached.
 *
 * @param {type} data The response data from the search GET request
 *
 */
const appendResults = (data) => {
    let resultsItems = [];
    for (var i = 0; i < data.length; i++) {
        let item = resultTemplate(data[i]);
        resultsItems.push(item);
    }
    let nodes = document.createRange().createContextualFragment(resultsItems.join(''));

    results.appendChild(nodes);
    addClickListeners(data);
};

/**
 * addClickListeners - Add eventListeners to open up the detail view for a product.
 *
 * @param {Object} data The response data from the search GET request
 *
 */
const addClickListeners = (data) => {
    allElements = Array.from(document.getElementsByClassName('result-item'));
    let newElements = allElements.filter(el => el.getAttribute('has-listener') === null);
    for (let i = 0; i < newElements.length; i++) {
        newElements[i].setAttribute('has-listener', true);
        newElements[i].addEventListener('click', () => {
            let itemsPerRow = Math.round(results.getBoundingClientRect().width / (newElements[i].clientWidth + 40)); // Check to see how many items that will fit in a row in the results div. +40 is to include margins
            setReferenceElementId(itemsPerRow, newElements[i]);
            if (!window.bim.isLoading) {
                window.location.hash = '#detail-inline/' + data[i].id;
            }
        });
    }
};

/**
 * setReferenceElementId - Calculate which is the LAST ELEMENT ON THE ROW to have as reference when appending the detail view to the HTML
 * Adds the ID of that element to window.bim.firstElementOnNextRowId or window.bim.lastElementInArrayId
 *
 * @param {type} itemsPerRow    Number of items that will fit in a row with current screen size
 * @param {type} currentElement The clicked element that will be opened/selected
 *
 */
const setReferenceElementId = (itemsPerRow, currentElement) => {
    // Element is on the last row that could contain fewer items then the rest of the rows - get the ID of the last element of the result array which will also be the last element on the last row
    if (isOnLastRow(itemsPerRow)) {
        let element = allElements[allElements.length - 1];
        if (element) {
            window.bim.referenceElementId = element.getAttribute('id');
        };
        // Get the index of the current element, calculate its position on the current row and how many elements are left on that row. Use currentElementIndex + the number of elements left to get the last element on that row.
    } else {
        let currentElementIndex = allElements.findIndex(el => el === currentElement);
        let currentRowPosition = (currentElementIndex % itemsPerRow) + 1;
        let itemsLeftOnRow = itemsPerRow - currentRowPosition;
        let element = allElements[currentElementIndex + itemsLeftOnRow];
        if (element) {
            window.bim.referenceElementId = element.getAttribute('id');
        };
    }
};

/**
 * isOnLastRow - Checks to see if the element is this row an 'odd row' e.g the last row of results. Compares the number of items on the current row with the number of items on the first row.
 *
 * @param {type} itemsOnCurrentRow The number of items on the row of the selected element
 *
 * @returns {boolean} Is this row an 'odd row' e.g the last row of results
 */
const isOnLastRow = (itemsOnCurrentRow) => {
    let itemsOnFirstRow = Math.round(results.getBoundingClientRect().width / (allElements[0].clientWidth + 40));
    return itemsOnCurrentRow !== itemsOnFirstRow;
};

/**
 * clear - Clears the results element.
 *
 */
const clear = () => {
    results.innerHTML = '';
};

/**
 * loading - Adds or remove a loader spinner from the bottom of the results view.
 *
 * @param {boolean} loading Bool to set loader on or off.
 *
 */
const loading = (loading) => {
    if (loading) {
        window.bim.isLoading = true;
        let element = document.getElementById('loading');
        if (element) {
            element.innerHTML = loaderTemplate();
        }
    } else {
        window.bim.isLoading = false;
        let element = document.getElementById('loading');
        if (element) {
            element.innerHTML = '';
        }
    }
};

export default {
    init: init,
    clear: clear,
    loading: loading,
    appendResults: appendResults
};
