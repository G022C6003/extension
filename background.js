function handleMessage(message) {
    localStorage.setItem(getStorageLength, activeTextArea);
}

browser.runtime.onMessage.addListener(handleMessage);