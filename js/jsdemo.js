$(function(){
	shoufq();
});

function shoufq(){
	$("dd").hide();
	$("dd:first").show();
	$("dt").mouseover(function(){
		if($(this).next().is(":hidden"))
		{
			$("dd").hide();
			$(this).next().show();
		}
	});
}