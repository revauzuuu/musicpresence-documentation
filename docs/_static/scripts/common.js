import { selectTabbedSetTab } from "./modules/helpers.mjs";

// Exclude tab hashes from browsing history and do not put the ID in the URL.
(function () {
    const pattern = /#__tabbed_\d+_\d+$/;

    const originalPushState = history.pushState;
    history.pushState = function (state, title, url) {
        if (typeof url === 'string' && pattern.test(url)) {
            return;
        }

        return originalPushState.apply(this, arguments);
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function (state, title, url) {
        if (typeof url === 'string' && pattern.test(url)) {
            return;
        }

        return originalReplaceState.apply(this, arguments);
    };
})();

document$.subscribe(function () {
    const url = new URL(window.location.href);
    if (url.searchParams.has("tab")) {
        const tab = url.searchParams.get("tab").trim();
        const hash = url.hash;
        if (tab !== null && tab.length > 0 && hash.startsWith('#') && hash.length > 1) {
            const set = document.querySelector('#' + hash.slice(1) + ' ~ .tabbed-set');
            if (set) {
                selectTabbedSetTab(set, tab);
            }
        }
    }
    for (const anchor of document.querySelectorAll('a')) {
        if (anchor.href.length === 0) {
            continue;
        }
        const url = new URL(anchor.href);
        if (url.hash.length === 0 || url.hash === "#") {
            continue;
        }
        const hash = url.hash.startsWith('#') ? url.hash.slice(1) : url.hash;
        if (!url.searchParams.has("tab")) {
            continue;
        }
        const tab = url.searchParams.get("tab");
        if (tab === undefined || tab.length === 0) {
            continue;
        }
        anchor.addEventListener('click', function (e) {
            const set = document.querySelector('#' + hash + ' ~ .tabbed-set');
            if (set) {
                selectTabbedSetTab(set, tab);
            }
        });
    }
});
