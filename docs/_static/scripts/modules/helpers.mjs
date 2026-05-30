export function selectTabbedSetTab(tabbedSet, tabNameInsensitive) {
    if (!(tabbedSet instanceof HTMLElement)) {
        throw Error("The tabbed set is not an HTML element");
    }
    if (!tabbedSet.classList.contains("tabbed-set")) {
        throw Error("The element is not a tabbed set");
    }
    const target = tabNameInsensitive.trim().toLowerCase();
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
}
