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
		output = "<h2>"+$("#title").text()+"</h2><br>"+output;
		//Doesn't use quota uses local
		chrome.storage.local.set({"markdown":output}, function (){
			chrome.app.window.create('preview.html', {
				width: 800,
				height: 400,
				top: 125,
				left:250
			});
		});
	});
	$("#save").click(function(){
		"use strict";
		var date, title, body;
		date = $("#date").val();
		title = $("#title").text();
		body = $("#markdown").val();
		save(date,title,body);
	});
});