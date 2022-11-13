let getStorageLength = 0;

let clearButton = document.querySelector('.deleteStorageAll');
let checkButton = document.querySelector('.checkStorage');
let insertHtml = document.getElementById('#setClipboard_1');

function handleMessage(message) {
    localStorage.setItem(getStorageLength, message);
    getStorageLength++;
    console.log(message);
    insertHtml.innerText = message;
}

browser.runtime.onMessage.addListener(handleMessage);

clearButton.addEventListener("click", () => {
    //バックグラウンド側のlocalStorageを消す。
    localStorage.clear();
    console.log(localStorage);
    getStorageLength = 0;
});

checkButton.addEventListener("click", () => {
    //バックグラウンド側のlocalStorageを確認
    console.log(localStorage);
});