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
