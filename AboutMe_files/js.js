jQuery(document).ready(function($){


$(document).ready(function() {
    $('#perspective').jcarousel({
						scroll:1
							
							});
});



$('div.paging ul li').first().css('background','none');
$('div.paging ul li a span.slash').first().hide();

$('div.style ul').each(function(){
	if ($(this).css('float','left')) {
		$(this).addClass('ul_float') }
});

function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}

$(document).ready(function() {
	equalHeight($(".mpr_car li"));
	equalHeight($(".ab_bl"));
	equalHeight($(".sn"));
	equalHeight($("#perspective li"));
	equalHeight($("div.style ul.ul_float"));
});




$('div.style ul.ul_float:nth-child(odd)').addClass('ul_second');

$('div.did').last().css('border-bottom','none');

$('#perspective li').last().css('padding', '0');

$('div.depar div.widget-container').last().css('border', 'none');

$('div.foot_menu ul li').first().css('padding-left','0');
$('div.foot_menu ul li a span.slash').first().hide();

$('div.st_right a.st_right_link').each(function(){
	var strw = $(this).parent().width();
	var strh = $(this).parent().height();
$(this).css({width:strw, height:strh});
});




$('div.paging ul li').hover(function(){
	$(this).children('div.sub_all').slideDown('fast')}, function(){
		$(this).children('div.sub_all').slideUp('fast');
	});









});