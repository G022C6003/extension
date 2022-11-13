//ストレージの格納数(グロ変)
let getStorageLength = 0;
//選択したエリアを格納する変数(グロ変)
let activeTextArea;

let sendlocalStorage = {};

let clearButton = document.querySelector('.deleteStorageAll');
let checkButton = document.querySelector('.checkStorage');

function sendOk() {
    console.log('送ったよ');
}
function sendNg() {
    console.log('送れてないよ');

}

window.addEventListener("mouseup", () => {
    activeTextArea = window.getSelection().toString();
    if (!activeTextArea) {
    } else {
        localStorage.setItem(getStorageLength, activeTextArea);
        getStorageLength++;
        //localStorageの中身を送れるようにする
        //コンテンツスクリプトからバックグラウンドスクリプトに送る
        console.log(localStorage);
        var sending = browser.runtime.sendMessage(activeTextArea);
        sending.then(sendOk, sendNg);
    }
});

clearButton.addEventListener("click", () => {
    //バックグラウンド側のlocalStorage
    localStorage.clear();
    console.log(localStorage);
    getStorageLength = 0;
});

checkButton.addEventListener("click", () => {
    console.log(localStorage);
});



function getLocalStorage() {
    for (i = 0; i < getStorageLength; i++) {
        sendlocalStorage[i] = localStorage.getItem(i);
    }
}