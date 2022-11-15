//popup.htmlにlocalStorageの中身を入れる処理。
if (localStorage.length == 0) {
    $(`#set1`).text("はいってねーぞ");
    return;
} else {
    for (i = 0; i <= 19; i++) {
        $(`#set${i + 1}`).text(localStorage.getItem(i));
    }
}
console.log(localStorage.length);
console.log(localStorage);

//localStorageの中身を消したいとき
$('.deleteStorageAll').on('click', () => {
    localStorage.clear();
    $(`#set${setNumber}`).text("全消去");
    for (i = 0; i <= 19; i++) {
        $(`#set${i + 1}`).text(localStorage.getItem(i));
    }
    console.log(localStorage);
});

//このファイルは拡張機能のアイコンをクリックしたときにでるhtml内の処理です。

