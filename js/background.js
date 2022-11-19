function handleMessage(message) {
    //最大20個まで格納する処理
    if (localStorage.length == 20) {
        for (i = 0; i < localStorage.length; i++) {
            localStorage.setItem(i,localStorage.getItem(i+1))
        }
        //最後に格納
        localStorage.setItem(19,message)
    } else {
        localStorage.setItem(localStorage.length, message);
        // getStorageLength++;
    }
    console.log(localStorage);
}

browser.runtime.onMessage.addListener(handleMessage);
//このファイルはバックグラウンドスクリプトとして扱われる。