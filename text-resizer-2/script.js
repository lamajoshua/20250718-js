$(function() {
    //ボタンをクリック
    $(".resizer a").click(function() {
        //body要素にクラスが付いていれば削除
        $("body").removeClass();

        //選択したリサイズボタンのテキスト内容を取得
        let size = $(this).html();

        if(size == "S") {
            //body要素に.fontSmallを追加
            $("body").addClass("fontSmall");
        } else if (size == "M") {
            //body要素に.fontMediumを追加
            $("body").addClass("fontMedium");
        } else {
            //body要素に.fontLargeを追加
            $("body").addClass("fontLarge");
        }

        //リンクのデフォルト動作を無効化
        return false;
    });
});