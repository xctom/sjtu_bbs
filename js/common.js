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
     *改写右边菜单效果
     **/
    (function(){
        var menu = $("ul.dropdown-menu");
        menu.css("margin-right","-" + $(this).width() + "px");
        menu.width(300);
        menu.height(window.outerWidth - $("header").height());
    })();


    /*设置移动端和pc端的不同表现*/
    $("a#right-menu").click(function(){
        
        if(document.width > 768){
            
            var menu = $("ul.dropdown-menu");
            var menu_width = menu.width() + "px";

            if(menu.css("opacity") == 0){
                menu.css("margin-right","0px");
            }else{
                menu.css("margin-right","-" + menu_width);
            }

            menu.toggleClass("menu-in");

        }else{

            $("#fat-menu").toggleClass("open");
        }  
    });


});
