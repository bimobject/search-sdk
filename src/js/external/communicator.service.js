/**
 * @module communicatorService
 */

import {
    saveAs
} from 'file-saver';
let host = {};
if (HOST === 'electron') {
    const electron = window.require('electron');
    host = electron.remote.getCurrentWindow().external;
} else if (HOST === 'WebBrowserControl') {
    host = window.external;
}

export default {

    /**
     * Login Page - Redirects the user to the login page (not needed to implement on host)
     *
     * @param {type} authURL The URL to where the user should be redirected to login
     *
     */
    goToLoginPage: (authURL) => {
        let body = document.getElementById('body');
        body.innerHTML = `<webview src="${authURL}"></webview>`;
        // window.location.href = authURL; // This will maybe work for your environment
    },

    /**
     * Search - The search function, will be called when user types into the search field.
     *
     * @param {type} param    The params object used in the API, for example: filter.fullText, page etc.
     * @param {type} callback The products object - { meta: {}, data: [] }
     *
     */
    search: (params, callback) => {
        host.search(params, (response) => {
            callback(response);
        });
    },

    /**
     * Authentication URL - Returns the authentication url so the user can be
     * redirected to a login page to download products.
     *
     * @param {type} location The current location of the user so it can be redirected back to that location
     * @param {type} callback The authentication url
     *
     */
    abortSearch: () => {
        host.abortSearch();
    },
    /**
     * Product - The detailed product function, retrieves the product information.
     *
     * @param {type} id       The id of the product you want to get
     * @param {type} callback The product
     *
     */
    getProduct: (id, callback) => {
        host.product(id, (response) => {
            callback(response);
        });
    },

    /**
     * Authentication URL - Returns the authentication url so the user can be
     * redirected to a login page to download products.
     *
     * @param {type} location The current location of the user so it can be redirected back to that location
     * @param {type} callback The authentication url
     *
     */
    authURL: (location, callback) => {
        host.authURL(location, (response) => {
            callback(response);
        });
    },

    /**
     * Download - Downloads the selected product with a specific file format
     *
     * @param {type} productId The id of the product
     * @param {type} fileId    The id from the file
     * @param {type} fileName  The filename of the product
     */

    downloadProduct: (productId, fileId, fileName) => {
        host.downloadProduct(productId, fileId, (response) => {
            let blob = new Blob([response]);
            saveAs(blob, fileName);
        });
    },

    /**
     * Is user authorized - Checks if user already is authroized and if a download token exists
     *
     * @param {type} callback A boolean if the user is authorized or not
     *
     */
    isAuthorized: (callback) => {
        host.isAuthorized(authorized => {
            callback(authorized);
        });
    },

    /**
     * Product Property Sets - The specific product property sets for that product
     *
     * @param {type} id       The ID of the product
     * @param {type} callback The product property sets for that product
     *
     */
    getProductPropertySets: (id, callback) => {
        host.productPropertySets(id, (productPropertySets) => {
            callback(productPropertySets);
        });
    }
};
