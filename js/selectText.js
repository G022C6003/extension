//ストレージの格納数(グロ変)
let getStorageLength = 0;
//選択したエリアを格納する変数(グロ変)
let activeTextArea;

function sendOk() {
    console.log('送ったよ');
}
function sendNg() {
    console.log('送れてないよ');

}

//選択した文字をバックグラウンドスクリプトに送る
window.addEventListener("mouseup", () => {
    activeTextArea = window.getSelection().toString();
    if (!activeTextArea) {
    } else {
        var sending = browser.runtime.sendMessage(activeTextArea);
        sending.then(sendOk, sendNg);
    }
});