//ストレージの格納数(グロ変)
let getStorageLength = 0;
//選択したエリアを格納する変数(グロ変)
let activeTextArea;
let insertHtml = document.getElementById('#setClipboard_1');

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
        //localStorageの中身を送れるようにする
        //コンテンツスクリプトからバックグラウンドスクリプトに送る
        var sending = browser.runtime.sendMessage(activeTextArea);
        sending.then(sendOk, sendNg);
    }
});
