import searchCtrl from './controllers/search.controller';
import detailCtrl from './controllers/detail.controller';

import {
    loaderTemplate
} from './templates/loader.template';

let currentLocation = '';
const main = document.getElementById('main');

window.onload = () => {
    //    searchCtrl.init();

    console.log('Window loaded');
    // Create loading icon if on any view that isn't instant
    routeTo('#loading');
    if (!window.location.hash.includes('#detail-view')) {
        window.location.hash = '#search';
    }
    currentLocation = window.location.hash;
    routeTo(currentLocation);

    window.addEventListener('hashchange', function(event) {
        currentLocation = window.location.hash;
        routeTo(currentLocation);
    });
};

const routeTo = (template) => {
    switch (true) {
        case template.includes('#detail-inline'):
            detailCtrl.init({
                inline: true
            });
            break;
        case template.includes('#detail-view'):
            detailCtrl.init({
                inline: false
            });
            break;
        case template.includes('#loading'):
            main.innerHTML = loaderTemplate();
            break;
        case template.includes('#search'):
            searchCtrl.init();
            break;
    }
};
