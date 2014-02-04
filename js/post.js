$(document).ready(function(){

    /**
     * headroom 初始化
     **/
    // 获取页面元素
    var myElement = document.querySelector("header");
    // 创建 Headroom 对象，将页面元素传递进去
    var headroom  = new Headroom(myElement);
    // 初始化
    headroom.init(); 

    /**
     * tinymce 初始化
     **/
    tinymce.init({
    selector: "textarea",
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table contextmenu paste"
    ],
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
    });

    $("textarea").height(230);
});