$(function() {
	var md = require( "markdown" ).markdown;
	$("#MarkdownHelperAccord").accordion();
	$("#pre").button();
	$("#save").button();
	$( "#dialog-message" ).dialog({
		modal: true,
		autoOpen: false,
		show: "blind",
		hide: "blind",
		buttons: {
			Ok: function() {
				$( this ).dialog( "close" );
			}
		}
	});
	$("#pre").click(function(){
		var output = md.toHTML($("#markdown").val());
		$("#dialog-message").html(output);
		$("#dialog-message").dialog("open");
	});
	$("#save").click(function(){
		//Move to local storage and store in dom
	});
});