import { getOS } from "../../modules/helpers.mjs";

// Move the buttons for the visitor's current OS to the front.
function reorderDownloadButtons () {
    const createSpaceElement = function () {
        const span = document.createElement('span');
        span.innerText = " ";
        return span;
    };
    const os = getOS();
    if (os === null || os === undefined) {
        return;
    }
    switch (os) {
        case 'ios': os = 'mac'; break;
        case 'android': os = 'windows'; break;
    }
    const container = document.querySelector('#app-download-buttons');
    const currentList = [];
    const otherList = [];
    for (const anchor of container.querySelectorAll('a')) {
        const parts = anchor.href.split('/');
        if (parts.length === 0) {
            continue;
        }
        const filename = parts[parts.length - 1];
        if (filename.toLowerCase().includes(os.toLowerCase())) {
            currentList.push(anchor);
        } else {
            otherList.push(anchor);
        }
    }
    container.replaceChildren();
    if (currentList.length !== 0) {
        for (const anchor of currentList) {
            container.appendChild(anchor);
            container.appendChild(createSpaceElement());
        }
        for (const anchor of otherList) {
            container.appendChild(anchor);
            container.appendChild(createSpaceElement());
        }
    }
};

reorderDownloadButtons();
