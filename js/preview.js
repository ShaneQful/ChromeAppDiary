$(function() {
	chrome.storage.local.get("markdown", function (items){
		$("#pre").html(items.markdown);
	});
});