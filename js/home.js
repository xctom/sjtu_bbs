$(document).ready(function(){
    
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


    // http://packery.metafizzy.co/packery.pkgd.js and 
    // http://draggabilly.desandro.com/draggabilly.pkgd.js added as external resource

    docReady( function() {
        var container = document.querySelector('.packery');
        pckry = new Packery( container, {
            columnWidth: 60,
            rowHeight: 60
        });
        var itemElems = pckry.getItemElements();
        var colors = ["#16A085","#27AE60","#2980B9","#8E44AD","#F39C12","#D35400","#C0392B"];
        // for each item element
        for ( var i=0, len = itemElems.length; i < len; i++ ) {
            var elem = itemElems[i];
            elem.style.backgroundColor = colors[parseInt(Math.random() * 7)];
            // make element draggable with Draggabilly
            var draggie = new Draggabilly( elem );
            // bind Draggabilly events to Packery
            pckry.bindDraggabillyEvents( draggie );
        }

        $("div.packery").onShow(function(){
            pckry.resize();
        });

        // $("a#pckry-resize").click(function(){
        //     if($(container).css("display")=="none"){
        //         pckry.resize();
        //     }

        // })
    });



});