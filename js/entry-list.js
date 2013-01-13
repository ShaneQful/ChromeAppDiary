// On load

var entryListInitialized = false;
function refreshList() {
	if (!entryListInitialized) {
		entryListEl.selectable({
			selected: function(event, ui) {
				var itemData = ui.selected.data;
				var index = data.entries.indexOf(itemData);
				selectEntry(index);
			}
		});
		entryListInitialized = true;
		// Buttons events
		$("#newBut")
			.button()
			.click(function() { newEntry(); });
		$("#deleteBut")
			.button()
			.click(function() { deleteEntry(); });
	}
	entryListEl.html('');
	$(data.entries).each(function() {
		var item = $("<li>" + this.title + "</li>");
		item.addClass("ui-widget-content");
		var data = this;
		data.ui = item;
		item[0].data = data;
		entryListEl.append(item);
	});
	entryListEl.selectable("refresh");
	if ($.isEmptyObject(data.selectedEntry))
		refreshListSelectedItem();
}

function refreshListSelectedItem() {
	entryListEl
		.find('li')
		  .removeClass('ui-selected')
		  .end()
		.find("li:eq(" + data.selectedEntry + ")")
		  .addClass('ui-selected');	
}

