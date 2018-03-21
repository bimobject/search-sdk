/**
 * @module searchController
 * @exports init()
 */

import externalCommunicator from '../external/communicator.service.js';
import resultCtrl from './result.controller';
import {
    searchTemplate
} from '../templates/search.template';
import debounce from 'lodash/debounce';

const main = document.getElementById('main');
let currentPage = 0;
let totalPages = 0;
let searchValue = '';
let isLoadingMore = false;
let searchStart = 0;

/**
 * init - Initializes the main search view
 *
 */
const init = () => {
    main.innerHTML = searchTemplate();
    addSearchInputListener();
    addClearSearchListener();
    addBackToTopListener();
    addInfiniteScroll();
    if (searchValue !== '') {
        document.getElementById('search-input').value = searchValue;
        search();
    }
};

const addSearchInputListener = () => {
    let searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keyup', search);
};

/**
 * addClearSearchListener - Adds eventlisteners to clear the search box
 *
 */
const addClearSearchListener = () => {
    let clearSearch = document.getElementById('clear-search');
    clearSearch.addEventListener('click', clear);
};

/**
 * addBackToTopListener - Adds eventlisteners to scroll to the top of the page and to remove the up chevron when at the top of the page
 *
 */
const addBackToTopListener = () => {
    let backToTop = document.getElementById('to-top');
    backToTop.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
    document.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            backToTop.classList.add('showing');
        } else {
            backToTop.classList.remove('showing');
        }
    });
};

/**
 * search - Gets the value from the search field, verifies that length of it and calls debounceSearch with the value.
 *
 */
const search = () => {
    timer('start');
    searchValue = document.getElementById('search-input').value;
    if (searchValue.length === 0) {
        clear();
        externalCommunicator.abortSearch();
    } else {
        isSearching(true);
        debounceSearch(searchValue);
    }
};

const debounceSearch = debounce(() => {
    resultCtrl.loading(true);
    externalCommunicator.search({
        searchText: encodeURIComponent(searchValue),
        page: 1
    }, (response) => {
        if (response.data) {
            currentPage = response.meta.page;
            totalPages = response.meta.totalPages;
            resultCtrl.loading(false);
            resultCtrl.init(response.data);
            timer('stop', response.meta.totalCount);
        } else {
            timer('clear');
            isSearching(false);
            resultCtrl.clear();
        }
    });
}, 300);

/**
 * isSearching - Adds or removes CSS classes to make the search field and logo smaller when displaying results
 *
 * @param {boolean} searching Bool to add or remove the CSS.
 *
 */
const isSearching = (searching) => {
    let mainCol = document.getElementById('search');
    let logo = document.getElementById('logo');
    if (searching) {
        mainCol.classList.add('searching');
        logo.classList.add('searching');
    } else {
        mainCol.classList.remove('searching');
        logo.classList.remove('searching');
    }
};

/**
 * clear - Clears the search field, including removing CSS classes etc to set everything back to the initial state
 *
 */
const clear = () => {
    document.getElementById('search-input').value = '';
    timer('clear');
    isSearching(false);
    resultCtrl.clear();
};

/**
 * addInfiniteScroll - Adds eventlisteners to fetch more products when you scroll to the bottom
 *
 */
const addInfiniteScroll = () => {
    document.addEventListener('scroll', infiniteScroll);
};

/**
 * infiniteScroll - GETs the next page of results (if there is one) and calls for appendResults to add them to the bottom of the list.
 *
 */
const infiniteScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 250) {
        if (currentPage < totalPages && isLoadingMore === false) {
            isLoadingMore = true;
            resultCtrl.loading(isLoadingMore);
            externalCommunicator.search({
                searchText: encodeURIComponent(searchValue),
                page: currentPage + 1
            }, (response) => {
                resultCtrl.appendResults(response.data);
                currentPage = currentPage + 1;
                isLoadingMore = false;
                resultCtrl.loading(isLoadingMore);
            });
        }
    }
};

/**
 * timer - Timer to display how long the search took below the search field
 *
 * @param {string} command Command to start, stop or clear the timer
 * @param {number} results Number of results found in the search
 *
 */
const timer = (command, results) => {
    if (command === 'start') {
        timer('clear');
        searchStart = new Date().getTime();
    } else if (command === 'stop') {
        let stopTime = new Date().getTime();
        let searchTime = (stopTime - searchStart) / 1000;
        document.getElementById('search-time').innerHTML = `Found ${results} BIMobjects in ${searchTime} seconds.`;
    } else if (command === 'clear') {
        document.getElementById('search-time').innerHTML = '';
    }
};

export default {
    init: init
};
