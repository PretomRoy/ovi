function InitPageNotFound(){
	$.noConflict();

	// Get the title
	var vcTitle=$('#pagenotfound').attr('title');
	$('#pagenotfound').removeAttr('title');

	var isMobile=($(window).width()>739)?false:true;

	// Dialog
	$('#pagenotfound').dialog({
		dialogClass:'PageNotFound',
		height:'auto',
		width:isMobile?'auto':700,
		title:vcTitle,
		position:isMobile?'top':'center',
		bgiframe:true,
		modal:true,
		buttons:{
			"Ok":function(){
				document.location.href=$('#pagenotfound #current-page-url').html().trim();
				$(this).dialog("close");
			}
		},
		open:function(){
			$(this).parent()
				.find("button:eq(0)")
				.focus()
				.keyup(function(e){
					if(e.keyCode==$.ui.keyCode.ENTER){
						$(this).trigger("click");
					};
				});
		},
		zIndex:999999
	});

	$('form').submit(function(e){
		return false;
	});
}
