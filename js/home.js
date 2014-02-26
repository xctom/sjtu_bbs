$(document).ready(function(){
   
    /*define onshow*/   
    (function($){
      $.fn.extend({ 
        onShow: function(callback, unbind){
          return this.each(function(){
            var obj = this;
            var bindopt = (unbind==undefined)?true:unbind; 
            if($.isFunction(callback)){
              if($(this).is(':hidden')){
                var checkVis = function(){
                  if($(obj).is(':visible')){
                    callback.call();
                    if(bindopt){
                      $('body').unbind('mousemove', checkVis);
                    }
                  }                         
                }
                $('body').bind('mousemove', checkVis);
              }
              else{
                callback.call();
              }
            }
          });
        }
      });
    })(jQuery);

    var $container = $('#masonary');
    var color_list=["#C0392B",
                    "#E74C3C",
                    "#E67E22",
                    "#F39C12",
                    "#F1C40F",
                    "#2ECC71",
                    "#1ABC9C",
                    "#16A085",
                    "#3498DB",
                    "#2980B9"];

    $("div#masonary>.item").each(function(){
      $(this).css("background-color",color_list[parseInt(Math.random()*10)]);
    });

    var isOption={
        // options
        itemSelector: '.item',
        masonry: {
          columnWidth: 200,
          gutter: 5
        },
        getSortData: {
          board: function(item){
            var board = $(item).find(".board-number").text();
            return parseInt(board);
          }
        }
    };
    
    // init
    $("div#masonary").onShow(function(){
      $container.isotope(isOption);
    });
    
    $("#sort-by-board").click(function(){
      $container.isotope({ sortBy: 'board' });
    });


});