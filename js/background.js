let getStorageLength = 0;
function handleMessage(message) {
    //最大20個まで格納する処理
    if (getStorageLength == 20) {
        for (i = 0; i <= 20; i++) {

        }
        //20個目を空にする
        localStorage.setItem(19, null);

    } else {
        localStorage.setItem(getStorageLength, message);
        getStorageLength++;
    }
    console.log(localStorage);
}

browser.runtime.onMessage.addListener(handleMessage);
//このファイルはバックグラウンドスクリプトとして扱われる。