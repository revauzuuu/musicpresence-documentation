// Determines the OS of the visitor.
// Source: https://stackoverflow.com/a/38241481
export function getOS() {
    const userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = null;
    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'mac';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'ios';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'windows';
    } else if (/Android/.test(userAgent)) {
        os = 'android';
    } else if (/Linux/.test(platform)) {
        os = 'linux';
    }
    return os;
}

// Selects the tab with the given name (inner text) in a tabbed set.
export function selectTabbedSetTab(tabbedSet, tabNameInsensitive) {
    if (!(tabbedSet instanceof HTMLElement)) {
        throw Error("The tabbed set is not an HTML element");
    }
    if (!tabbedSet.classList.contains("tabbed-set")) {
        throw Error("The element is not a tabbed set");
    }
    const target = tabNameInsensitive.trim().toLowerCase();
    let opened = false;
    if (tabbedSet.parentElement.tagName.toLowerCase() === 'details' &&
        !tabbedSet.parentElement.hasAttribute('open')) {
        tabbedSet.parentElement.setAttribute('open', 'open');
        opened = true;
    }
    for (const label of tabbedSet.querySelectorAll('.tabbed-labels label')) {
        const id = label.getAttribute('for');
        if (id === null || id.length === 0) {
            continue;
        }
        if (label.innerText.trim().toLowerCase() === target) {

            // The tab needs to be clicked first, so that selection works when
            // the page is opened with instant navigation.
            label.click();

            // Also check the appropriate input for Zensical's tab script to
            // select the proper tab by default.
            tabbedSet.querySelectorAll('input').forEach(function (input) {
                input.removeAttribute('checked');
            });
            const input = tabbedSet.querySelector('input#' + id);
            input.setAttribute('checked', "checked");

            // Make sure it's not highlighted in the primary/accent color.
            document.activeElement.blur()
        }
    }
    if (opened) {
        tabbedSet.parentElement.removeAttribute('open');
    }
}
