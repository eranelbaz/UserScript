// ==UserScript==
// @name         Hide events in github (refine github)
// @namespace    github
// @version      0.3
// @author       You
// @include      https://github.com/*
// @icon         https://github.githubassets.com/favicons/favicon.png
// @grant        none
// @require      https://raw.githubusercontent.com/eranelbaz/userscripts/main/src/mutations.js
// @updateURL    https://raw.githubusercontent.com/eranelbaz/userscripts/main/github/hide-events-refine-github.user.js
// @downloadURL  https://raw.githubusercontent.com/eranelbaz/userscripts/main/github/hide-events-refine-github.user.js
// ==/UserScript==
(function() {
    'use strict';

    const init  = () => {
        if(location.href.includes('pull')) {
            var label = Array.from(document.getElementsByClassName('select-menu-item-text'))
            .find(el => el.textContent === 'Hide events');
            if(label) {
                label.click();
            }
        }
    }

    document.addEventListener("ghmo:comments", init);
})();