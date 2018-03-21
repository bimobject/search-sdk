const request = require('request');
const authHelper = require('./auth.helper');

let tokenSearch = '';
let tokenDownload = '';
let refreshToken = '';
let req = null;

const apiURL = 'https://api.bimobject.com/search/v1/products';
const accountsURLProd = 'https://accounts.bimobject.com/identity/connect';
const accountsURL = 'https://accounts.bimobject.com/identity/connect';

let authGetClientCredentials = { // This is an ClientCredentials flow "app".
    grant_type: 'client_credentials',
    scope: 'search_api',
    client_id: '', //  Create your own on https://developer.bimobject.com.
    client_secret: ''
};

let authGetAuthPKCode = {
    scope: 'search_api search_api_downloadbinary offline_access',
    client_id: '', // This is AuthorizationCodeWithProofKey flow "app". Create your own on https://developer.bimobject.com.
    code_challenge_method: 'S256',
    code_challenge: authHelper.codeChallange
};

let refreshAuthPKToken = {
    grant_type: 'refresh_token',
    refresh_token: '',
    client_id: '', // This is AuthorizationCodeWithProofKey flow  "app".
    client_secret: ''
};

let authGetAuthPKToken = {
    grant_type: 'authorization_code',
    client_id: '', // This is AuthorizationCodeWithProofKey flow  "app".
    client_secret: '',
    redirect_uri: 'http://localhost:9696/login',
    code: '',
    code_verifier: authHelper.verifier
};

let location = ''; // Used for redirecting user back to location where the user was before logging in

const authorizeDownload = (code, callback) => {
    console.log('Authorized download');
    authGetAuthPKToken.code = code;
    console.log(authGetAuthPKToken);

    let options = {
        uri: `${accountsURL}/token`,
        'rejectUnauthorized': false,
        method: 'POST',
        form: authGetAuthPKToken
    };
    request(options, (err, response, body) => {
        if (err) {
            console.log(err);
        } else {
            try {
                console.log('Auth download', body);
                tokenDownload = JSON.parse(body).access_token;
                refreshToken = JSON.parse(body).refresh_token;
                setInterval(refreshDownloadToken, 3600 * 50); // Should not be hardcoded
                callback(location);
            } catch (e) {
                console.log(e);
                callback();
            }
        }
    });
};

const authorizeSearch = () => {
    console.log('Authorized search');
    let options = {
        uri: `${accountsURLProd}/token`,
        'rejectUnauthorized': false,
        method: 'POST',
        form: authGetClientCredentials
    };
    console.log(options);
    request(options, (err, response, body) => {
        if (err) {
            console.log(err);
        } else {
            try {
                console.log(body);
                tokenSearch = JSON.parse(body).access_token;
            } catch (e) {
                console.log(e);
            }
        }
    });
};

authorizeSearch();
setInterval(authorizeSearch, 3600 * 50); // 50 minutes

const products = (params, callback) => {
    abortSearch();
    let options = {
        uri: `${apiURL}?filter.fullText=${params.searchText}&page=${params.page}`,
        'rejectUnauthorized': false,
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + tokenSearch
        }
    };
    req = request(options, (err, response, body) => {
        if (err) {
            callback(err);
        } else {
            callback(JSON.parse(body));
        }
    });
};

const abortSearch = () => {
    if (req !== null) {
        req.abort();
    }
};

const product = (id, callback) => {
    let options = {
        uri: `${apiURL}/${id}`,
        'rejectUnauthorized': false,
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + tokenSearch
        }
    };
    request(options, (err, response, body) => {
        if (err) {
            callback(err);
        } else {
            callback(JSON.parse(body));
        }
    });
};

const productPropertySets = (id, callback) => {
    let options = {
        uri: `${apiURL}/${id}/propertysets`,
        'rejectUnauthorized': false,
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + tokenSearch
        }
    };
    request(options, (err, response, body) => {
        if (err) {
            callback(err);
        } else {
            callback(JSON.parse(body));
        }
    });
};

const downloadProduct = (productId, fileId, callback) => {
    let options = {
        uri: `${apiURL}/${productId}/files/${fileId}/binary`,
        'rejectUnauthorized': false,
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + tokenDownload
        }
    };
    request(options, (err, response, body) => {
        if (err) {
            callback(err);
        } else {
            callback(body);
        }
    });
};

const refreshDownloadToken = () => {
    console.log('Refreshing token');
    refreshAuthPKToken.refresh_token = refreshToken;
    let options = {
        uri: `${accountsURL}/token`,
        'rejectUnauthorized': false,
        method: 'POST',
        form: refreshAuthPKToken,
        headers: {
            Authorization: 'Bearer ' + tokenDownload
        }
    };
    console.log(options);
    request(options, (err, response, body) => {
        if (err) {
            console.log(err);
        } else {
            try {
                console.log('Refresh token', body);
                tokenDownload = JSON.parse(body).access_token;
                refreshToken = JSON.parse(body).refresh_token;
            } catch (e) {
                console.log(e);
            }
        }
    });
};

const isAuthorized = (callback) => {
    if (tokenDownload) {
        callback(true);
    } else {
        callback(false);
    }
};

const authURL = (_location, callback) => {
    location = _location;
    let uri = `${accountsURL}/authorize?client_id=${authGetAuthPKCode.client_id}&response_type=code&redirect_uri=${authGetAuthPKToken.redirect_uri}&scope=${authGetAuthPKCode.scope}&code_challenge=${authGetAuthPKCode.code_challenge}&code_challenge_method=${authGetAuthPKCode.code_challenge_method}`;
    console.log(uri);
    callback(uri);
};

module.exports = {
    products: products,
    product: product,
    abortSearch: abortSearch,
    authURL: authURL,
    downloadProduct: downloadProduct,
    isAuthorized: isAuthorized,
    authorizeDownload: authorizeDownload,
    productPropertySets: productPropertySets
};
