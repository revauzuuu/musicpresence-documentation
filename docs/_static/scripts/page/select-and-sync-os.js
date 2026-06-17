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

function findParentWithClass(element, className) {
    while (element) {
        if (element.classList.contains(className)) {
            return element;
        }
        element = element.parentElement;
    }
    return null;
}

function tabbedSetOfElement(element) {
    return findParentWithClass(element, 'tabbed-set');
}

function prepareOsDependents() {
    for (const element of document.querySelectorAll('.os-dependent-text')) {
        ["windows", "mac", "linux"].forEach(function (os) {
            const attribute = 'data-' + os;
            console.log(attribute, element.getAttribute(attribute));
            if (!element.hasAttribute(attribute) ||
                element.getAttribute(attribute).length === 0) {
                element.setAttribute(attribute, element.innerText);
            }
        });
    }
}

function getOsDependents() {
    return document.querySelectorAll('.os-dependent-text');
}

function updateOsDependents(tabId) {
    const label = document.querySelector('label[for="' + tabId + '"]');
    const os = label.innerText.trim().toLowerCase();
    for (const element of getOsDependents()) {
        const value = element.getAttribute('data-' + os);
        console.log(value, element);
        if (value && typeof value === "string" && value.length > 0) {
            element.innerText = value;
        }
    }
}

// Source: https://facelessuser.github.io/pymdown-extensions/extensions/tabbed/#linked-tabs
function syncOsTabsAndDependents() {
    prepareOsDependents();
    let autoClicks = 0;
    const tabInputs = document.querySelectorAll(".tabbed-set > input");
    const tabbedSetHeightsByInputId = {};
    for (const tabInput of tabInputs) {
        const tabInputLabel = document.querySelector(`label[for=${tabInput.id}]`);
        const updateTabbedSetHeights = function () {
            for (const tabInput of tabInputs) {
                const tabbedSet = tabbedSetOfElement(tabInput);
                if (!tabbedSet) {
                    console.error('No tabbed set for input element', tabInput);
                    continue;
                }
                tabbedSetHeightsByInputId[tabInput.id] =
                    tabbedSet.getBoundingClientRect().height;
            }
        };
        tabInputLabel.addEventListener('mousedown', updateTabbedSetHeights);
        tabInput.addEventListener("click", function () {
            // console.log('CLICK', p, tabbedSetHeightsByInputId, tabbedSetOfElement(p).getBoundingClientRect().height);
            if (autoClicks > 0) {
                autoClicks -= 1;
                return;
            }
            setTimeout(function () {
                const originalScrollY = window.scrollY;
                const current = document.querySelector(`label[for=${tabInput.id}]`);
                const currentRect = current.getBoundingClientRect();
                const labelContent = current.innerText.trim();
                const os = labelContent.toLowerCase();
                const labels = document.querySelectorAll('.tabbed-set > label, .tabbed-alternate > .tabbed-labels > label');
                const inputIdsToClick = [];
                let scrollDelta = 0;
                for (const label of labels) {
                    if (label.getAttribute('for') === current.getAttribute('for')) {
                        continue;
                    }
                    if (label.innerText.trim() !== labelContent) {
                        continue;
                    }
                    const inputId = label.getAttribute('for');
                    const input = document.querySelector(`input[id=${inputId}]`);
                    const tabbedSet = tabbedSetOfElement(input);
                    if (!tabbedSet) {
                        console.error('No tabbed set for input element', tabInput);
                        continue;
                    }
                    const tabbedSetRect = tabbedSet.getBoundingClientRect();
                    const isBefore = tabbedSetRect.top < currentRect.top;
                    inputIdsToClick.push([inputId, isBefore]);
                }

                autoClicks += inputIdsToClick.length;

                const osDependents = [];
                for (const element of getOsDependents()) {
                    const rect = element.getBoundingClientRect();
                    const isBefore = rect.top < currentRect.top;
                    osDependents.push([element, isBefore]);
                }

                // Preserve scroll position of the clicked tabbed set.
                for (const [inputId, isBefore] of inputIdsToClick) {
                    const input = document.querySelector(`input[id=${inputId}]`);
                    input.click();
                    if (isBefore) {
                        const tabbedSet = tabbedSetOfElement(input);
                        if (!tabbedSet) {
                            console.error('No tabbed set for input element', tabInput);
                            continue;
                        }
                        const oldHeight = tabbedSetHeightsByInputId[inputId];
                        const newHeight = tabbedSet.getBoundingClientRect().height;
                        scrollDelta += newHeight - oldHeight;
                    }
                }
                for (const [element, isBefore] of osDependents) {
                    const value = element.getAttribute('data-' + os);
                    if (value && typeof value === "string" && value.length > 0) {
                        if (isBefore) {
                            const oldHeight = element.parentElement.getBoundingClientRect().height;
                            element.innerText = value;
                            const newHeight = element.parentElement.getBoundingClientRect().height;
                            scrollDelta += newHeight - oldHeight;
                        } else {
                            element.innerText = value;
                        }
                    }
                }
                window.scrollTo({
                    top: originalScrollY + scrollDelta,
                    behavior: 'instant',
                });

                updateTabbedSetHeights();
            }, 0);
        })
    }
}

function init () {
    // Select the correct OS tabs on load.
    selectOSTabs();

    // Sync OS tabs and dependents across the page.
    syncOsTabsAndDependents();
}

document$.subscribe(function () {
    init();
});
