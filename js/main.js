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

//For Metis Menu
$(function () {
    $('#board-menu').metisMenu();
});

//For dropdown Menu 
$(".scrollable-menu").css("max-height",$(window).height()-$("#sidebar_menu").height());