const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const openApi = require('./openapi');
const url = require('url');

let port = process.env.PORT || 9696;

app.use(bodyParser.json());

app.listen(port, '0.0.0.0', () => {
    console.log('App running on port: ' + port);
});

app.use('/login', (req, res) => {
    console.log('Method', req.method);
    console.log('url', req.url);
    console.log('Getting stuff on login');
    let code = req.query.code;
    const window = require('./app').getWindow();

    openApi.authorizeDownload(code, (location) => {
        console.log('this is the location', location);
        window.loadURL(url.format({
            slashes: true,
            protocol: 'file:',
            pathname: path.join(__dirname, '../dist/index.html')
        }));
    });
});
