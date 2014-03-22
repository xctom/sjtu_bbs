//For sidebar
$("#menu-toggle").click(function(e) {
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
    if($(window).width() > 970) {
        $('#control-wrapper').addClass('in');
    }
});
$(window).resize(function(){
    if($(window).width() > 970) {
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
})