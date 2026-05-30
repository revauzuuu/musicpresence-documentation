import { selectTabbedSetTab, getOS } from "../modules/helpers.mjs";

// Automatically select any tab that contains the visitor's current operating system.
function selectOSTabs() {
    const os = getOS();
    if (os === null) {
        return;
    }
    function removeNoAnimation(e) {
        let set = e.target;
        while (!set.classList.contains('tabbed-set') && set.parentElement) {
            set = set.parentElement;
        }
        if (!set) {
            return;
        }
        set.classList.remove('no-animation');
        set.removeEventListener('mouseover', removeNoAnimation);
    }
    const scrollY = window.scrollY;
    for (const set of document.querySelectorAll('div.tabbed-set')) {
        set.classList.add('no-animation');
        selectTabbedSetTab(set, os);
        // Preserve the scroll position after clicking labels. In case the
        // content script reloads due to a hash link being clicked (any link
        // starting with "#") (why does it reload the script with instant
        // navigation?), scroll to the hash in the URL instead.
        if (window.location.hash.length > 0 && (!window.location.hash.startsWith('#') || window.location.hash.length > 1)) {
            let hash = window.location.hash.trim();
            if (hash.startsWith('#')) {
                hash = hash.substring(1).trim();
            }
            const element = document.getElementById(hash);
            element.scrollIntoView();
        } else {
            window.scrollTo(0, scrollY);
        }
        set.addEventListener('mouseover', removeNoAnimation);
    }
}

// Source: https://facelessuser.github.io/pymdown-extensions/extensions/tabbed/#linked-tabs
function syncOSTabs() {
    let autoClicks = 0;
    const tabs = document.querySelectorAll(".tabbed-set > input")
    for (const tab of tabs) {
        tab.addEventListener("click", function () {
            if (autoClicks > 0) {
                autoClicks -= 1;
                return;
            }
            setTimeout(function () {
                const current = document.querySelector(`label[for=${tab.id}]`);
                const pos = window.top;
                const labelContent = current.innerText.trim();
                const labels = document.querySelectorAll('.tabbed-set > label, .tabbed-alternate > .tabbed-labels > label');
                const elementsToClick = [];
                for (const label of labels) {
                    if (label.getAttribute('for') === current.getAttribute('for')) {
                        continue;
                    }
                    if (label.innerText.trim() === labelContent) {
                        elementsToClick.push(document.querySelector(`input[id=${label.getAttribute('for')}]`));
                    }
                }

                autoClicks += elementsToClick.length;
                for (const element of elementsToClick) {
                    element.click();
                }

                // Preserve scroll position
                const delta = (current.getBoundingClientRect().top) - pos;
                window.scrollBy(0, delta);
            }, 0);
        })
    }
}

function syncOSDependents() {
    const tabs = document.querySelectorAll(".tabbed-set > input")
    for (const tab of tabs) {
        tab.addEventListener("click", function () {
            const tabId = tab.id;
            const label = document.querySelector('label[for="' + tabId + '"]');
            const os = label.innerText.trim().toLowerCase();
            for (const element of document.querySelectorAll('.os-dependent-text')) {
                const value = element.getAttribute('data-' + os);
                if (value && typeof value === "string" && value.length > 0) {
                    element.innerText = value;
                }
            }
        });
    }
}

function init () {
    // Sync anything that depends on the currently selected OS.
    syncOSDependents();

    // Select the correct OS tabs on load.
    selectOSTabs();

    // Sync OS tabs across the page.
    syncOSTabs();
}

init();
