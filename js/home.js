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

    var $container = $('#boards');


    var isOption={
        // options
        itemSelector: '.item',
        layoutMode: 'cellsByRow',
        cellsByRow: {
            columnWidth: 400,
            rowHeight: 400
        }
    };
    
    // init
    $("div#boards").onShow(function(){
        $container.isotope(isOption);
    });
    



});