const {
    app,
    BrowserWindow
} = require('electron');

const path = require('path');
const url = require('url');
const openApi = require('./openapi');
require('./server');
let window = null;

// Wait until the app is ready
app.once('ready', () => {
    window = new BrowserWindow({
        width: 1200,
        height: 1200,
        show: true,
        resizable: true,
        external: {}
    });
    window.external = {};
    window.setFullScreen(false);
    // Load a URL in the window to the local index.html path
    window.loadURL(url.format({
        slashes: true,
        protocol: 'file:',
        pathname: path.join(__dirname, '../dist/index.html')
    }));
    // Show window when page is ready
    window.once('ready-to-show', () => {
        window.show();
    });

    /**
     * Search - The search function, will be called when user types into the search field.
     *
     * @param {type} param    The params object used in the API, for example: filter.fullText, page etc.
     * @param {type} callback The products object - { meta: {}, data: [] }
     *
     */
    window.external.search = (param, callback) => {
        console.log('Searching for', param);
        if (param.searchText.length === 0) {
            callback([]);
        } else {
            openApi.products(param, (productList) => {
                callback(productList);
            });
        }
    };

    /**
     * Authentication URL - Returns the authentication url so the user can be
     * redirected to a login page to download products.
     *
     * @param {type} location The current location of the user so it can be redirected back to that location
     * @param {type} callback The authentication url
     *
     */
    window.external.abortSearch = () => {
        openApi.abortSearch();
    };

    /**
     * Product - The detailed product function, retrieves the product information.
     *
     * @param {type} id       The id of the product you want to get
     * @param {type} callback The product
     *
     */
    window.external.product = (id, callback) => {
        console.log('Getting info for product', id);
        if (!id) {
            callback({});
        } else {
            openApi.product(id, (product) => {
                callback(product);
            });
        }
    };

    /**
     * Authentication URL - Returns the authentication url so the user can be redirected to a login page to download products.
     *
     * @param {type} location The current location of the user so it can be redirected back to that location
     * @param {type} callback The authentication url
     *
     */
    window.external.authURL = (location, callback) => {
        openApi.authURL(location, (url) => {
            callback(url);
        });
    };

    /**
     * Download - Downloads the selected product with a specific file format.
     *
     * @param {type} productId The id of the product
     * @param {type} fileId    The id from the file
     * @param {type} callback  The downloaded binary
     *
     */
    window.external.downloadProduct = (productId, fileId, callback) => {
        openApi.downloadProduct(productId, fileId, (product) => {
            callback(product);
        });
    };

    /**
     * Is user authorized - Checks if user already is authroized and if a download token exists.
     *
     * @param {type} callback A boolean if the user is authorized or not
     *
     */
    window.external.isAuthorized = (callback) => {
        openApi.isAuthorized(authorized => {
            callback(authorized);
        });
    };

    /**
     * Product Property Sets - The specific product property sets for that product.
     *
     * @param {type} id       The ID of the product
     * @param {type} callback The product property sets for that product
     *
     */
    window.external.productPropertySets = (id, callback) => {
        openApi.productPropertySets(id, (productPropertySets) => {
            callback(productPropertySets);
        });
    };
});

const getWindow = () => {
    return window;
};
module.exports = {
    getWindow: getWindow
};
