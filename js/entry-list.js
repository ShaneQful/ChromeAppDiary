function refreshList() {
	$(data.entries).each(function() {
		var item = $("<li>" + this.title + "</li>");
		item.addClass("ui-widget-content");
		var data = this;
		data.ui = item;
		item[0].data = data;
		entryList.append(item);
	});
}

$(function() {
	var entryList = $( "#entry-list" );
	entryList.selectable({
		selected: function(event, ui) {
			var itemData = ui.selected.data;
			var index = data.entries.indexOf(itemData);
			alert("Diary entry " + index + ": " + itemData.title);
		}
	});
	$( "#newBut" ).button();
	$( "#deleteBut" ).button();
});


