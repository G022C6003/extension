//クリップボードを格納するストレージの中身を取得(グロ変)
let getStorage;
//ストレージの格納数(グロ変)
let getStorageLength = 0;
//選択したエリアを格納する変数(グロ変)
let activeTextArea;

function lengthGet(item) {
    getStorageLength = (Object.keys(item).length);
    browser.storage.local.set({
        [getStorageLength + 1]: activeTextArea
    });
    console.log(getStorageLength);
}

function error(error) {
    console.log(`Error: ${error}`);
}

window.addEventListener('mouseup', e => {
    //選択したエリア
    activeTextArea = window.getSelection().toString();
    if (!activeTextArea) {

    } else {
        //ストレージの中身を取得
        getStorage = browser.storage.local.get();
        getStorage.then(lengthGet, error);
        console.log(getStorageLength);
    }
});
