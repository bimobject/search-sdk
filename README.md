# BIMobject® browser

This is BIMobject's product browser and downloader. It's a minimal project: only ~80KB minified (excluding fonts) since it uses no framework at all.
Take a look at our [API documentation](https://developer.bimobject.com/app/docs) to read more about how to setup an app and get started!

If you choose to extend your application with this SDK, in accordance with the licence, please don't move any copyright notice or BIMobject® logo or trademark. But please feel free to modify or change it in any way!

## Dependencies

To build or develop this project you need the following dependencies.

- `node > v8.8.1`
- `npm or yarn`

## Development

- Run `yarn` or `npm install` to install dependencies.
- Run `yarn run watch` or `npm run watch` to build and continuously watch the `src/` folder for changes.
- Run `yarn run start` or `npm run start` to run the electron server.

This project needs a host to run properly, the idea is that you should be able to choose whatever host you want, i.e. `electron`, `WebBrowserControl`, `CEF` or similar. This application comes with an example host application built with `electron`. Just input your own credentials in `openapi.js` to try it out.

If you choose some other host it is required that you attach a set of functions on the host `window`.

## Build

To build this project run the following commands:

- `yarn` to install dependencies.
- `yarn run build`

## The HOST interface

An example implementation of the functions you need to provide on the HOST are located in `electron/app.js` they are exposed on the `window` object. They are used directly in `src/js/external/communicator.js` Please refer to the [API documentation](https://developer.bimobject.com/app/docs) for further information.

```

    /**
     * Search - The search function, will be called when user types into the search field.
     *
     * @param {type} param    The params object used in the API, for example: filter.fullText, page etc.
     * @param {type} callback The products object - { meta: {}, data: [] }
     *
     */

    window.external.search = (param, callback) => { };

     /**
      * Abort search - Aborts an ongoing XHR request
      *
      */

    window.external.abortSearch: () => { };

    /**
     * Product - The detailed product function, retrieves the product information.
     *
     * @param {type} id       The ID of the product you want more information about
     * @param {type} callback The product returned from the API
     *
     */

    window.external.product = (id, callback) => { };

    /**
     * Authentication URL - Returns the authentication url so the user can be
     * redirected to a login page to download products.
     *
     * @param {type} location The current location of the user so it can be redirected back to that location
     * @param {type} callback The authentication url
     *
     */
    window.external.authURL = (location, callback) => { };

    /**
     * Download - Downloads the selected product with a specific file format
     *
     * @param {type} productId The id of the product
     * @param {type} fileId    The id from the file
     * @param {type} callback  The downloaded binary
     *
     */
    window.external.downloadProduct = (productId, fileId, callback) => { };

    /**
     * Is user authorized - Checks if user already is authroized and if a download token exists
     *
     * @param {type} callback A boolean if the user is authorized or not
     *
     */
    window.external.isAuthorized = (callback) => { };

    /**
     * Product Property Sets - The specific product property sets for that product
     *
     * @param {type} id       The ID of the product
     * @param {type} callback The product property sets for that product
     *
     */
    window.external.productPropertySets = (id, callback) => { };
```

There is also a special function, `goToLoginPage(authURL)`, that you have to write yourself if you decide to use anything else than `electron`. In this example implementation we use electrons `<webview>`.

```
goToLoginPage: (authURL) => {
    let body = document.getElementById('body');
    body.innerHTML = `<webview src="${authURL}"></webview>`;
}
```

## Webpack

`webpack` is used to build this project. It creates `css` from `less` files and transpiles ES7 to ES5 using `Babel`.

In the `webpack.config.js` we specify what type of files we would like to load and handle. We handle fonts, images (png, svg and jpg). If you want to switch your `HOST` environment, you have to set that in environment variables, or change the default build from `electron` to whatever you want.

## Folder structure

```
├───dist
├───electron
└───src
    ├───assets
    │   ├───fonts
    │   ├───img
    │   └───svg
    ├───js
    │   ├───external
    │   └───templates
    │   └───controllers
    │   main.js
    └───less
    index.html
    entry.js
```

The `entry.js` file is the entry point of the app. There we include our styles and our code. Since we are using import modules, no functions are available on global scope and can only be used inside that controller (if not exported).
