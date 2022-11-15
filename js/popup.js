//popup.htmlにlocalStorageの中身を入れる処理。
let setNumber = 1;
$(`#set${setNumber}`).text("ここに表示される");

$('.deleteStorageAll').on('click', () => {
    localStorage.clear();
    $(`#set${setNumber}`).text("全消去");
    for (i = 0; i <= 19; i++) {
        $(`#set${i + 1}`).text(localStorage.getItem(i));
    }
    console.log(localStorage);
});

$('.checkStorage').on('click', () => {
    for (i = 0; i <= 19; i++) {
        $(`#set${i + 1}`).text(localStorage.getItem(i));
    }
    console.log(localStorage);
});

//このファイルは拡張機能のアイコンをクリックしたときにでるhtml内の処理です。

