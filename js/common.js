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
    
});
