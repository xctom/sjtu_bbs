//For sidebar
$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});
$("#sidebar_menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});

//For Tooltips
$(function(){
	var options={
		animation: true,
		trigger: 'hover',
		placement: 'auto right',
		container: '.sidebar-tooltip'
	}
	$(".sidebar-nav li a").tooltip(options);
});

//For Smartumenu 
//$(function() {
//     var options={
//       keepHighlighted: false,
//       subIndicators: false
//     }
//  $('#sidebar-menu').smartmenus(options);
//});
//
//  $('#main-menu').smartmenus();

//
//For dropdown Menu 
//$(".scrollable-menu").css("max-height",$(window).height()-$("#sidebar_menu").height());

//For fullscreen div
//$(function() {
//    function abso() {
//        $('.foo').css({
//            width: $(window).width(),
//            height: $(window).height()
//        });
//    }
//    $(window).resize(function() {
//        abso();         
//    });
//    abso();
//});

//For hero

//For Panel Slide
$(document).on('click', '.panel-heading', function(e){
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
});
//Show #control-wrapper on landscape
$(document).ready(function(){
    if($(window).width() > 992) {
        $('#control-wrapper').addClass('in');
    }
});
$(window).resize(function(){
    if($(window).width() > 992) {
        $('#control-wrapper').addClass('in');
    }
}); 
//#control-wrapper slides
$(document).on('click', '#control', function(e){
    var $this = $(this);
	if(!$this.hasClass('active')) {
		$this.addClass('active');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	} else {
		$this.removeClass('active');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	}
});

//For spinner
/*
Ref:
 More ASCII spinners @ http://jsfiddle.net/mnbayazit/CgkQJ/3/
*/

$(document).ready(function() {
    // this will autostart spinner
    startSpinner();

}); // end .ready function

var timerId // global since outside of functions

    function startSpinner() {
        if (timerId) return
        var spin = "⣾⣽⣻⢿⡿⣟⣯⣷",
            char$ = $('#spinner'),
            i = 0;
        timerId = setInterval(function() {
            i = i == spin.length - 1 ? 0 : ++i;
            char$.text(spin[i]);
        }, 300); // 300 in milliseconds
        return;
    }

    function stopSpinner() {
        clearInterval(timerId)
        timerId = null
    }

    function hideSpinner() {
        // if hidden, stop spinner
        stopSpinner();
        $("#spinner").hide("slow", function() {});
    }

    function showSpinner() {
        $("#spinner").show("slow", function() {});
    }