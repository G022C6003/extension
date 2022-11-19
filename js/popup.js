//popup.htmlにlocalStorageの中身を入れる処理。
console.log('test');
    if (localStorage.length == 0) {
        $(`#set1`).text("未登録");
    } else {
        for (i = 0; i <= localStorage.length; i++) {
            $(`#set${i + 1}`).text(localStorage.getItem(i));
        }
    }

//localStorageの中身を消したいとき
$('.deleteStorageAll').on('click', () => {
    localStorage.clear();
    for (i = 0; i <= 19; i++) {
        $(`#set${i + 1}`).text(localStorage.getItem(i));
    }
    $(`#set1`).text("リセット");
});

//このファイルは拡張機能のアイコンをクリックしたときにでるhtml内の処理です。

