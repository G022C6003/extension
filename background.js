let getStorageLength = 0;

function handleMessage(message) {
    localStorage.setItem(getStorageLength, message);
    getStorageLength++;
    console.log(localStorage);
}

browser.runtime.onMessage.addListener(handleMessage);