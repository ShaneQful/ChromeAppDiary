var data = {
	selectedEntry: 0,
	entries: []
};
function save(date,title,body){
	"use strict";
	var entry = data.entries[data.selectedEntry];
	entry.date = date;
	entry.title = title;
	entry.body = body;
	chrome.storage.sync.setItem("entry"+data.selectedEntry,{
		date:entry.date,
		title:entry.title,
		body:entry.body
	});
	chrome.storage.sync.setItem("selectedEntry",data.selectedEntry);
}

$(function load() {
	"use strict";
	if(chrome.storage.sync && chrome.storage.sync.selectedEntry ){
		var i, entry;
		for(i = 0; chrome.storage.sync["entry"+i]; i++){
			data.entries.push(chrome.storage.sync["entry"+i]);
		}
		data.selectedEntry = chrome.storage.sync.selected;
		entry = data.entries[data.selectedEntry];
		$("#date").val(entry.date);
		$("#title").text(entry.title);
		$("#markdown").val(entry.body);
		refreshList();
	}else{
		newEntry();
	}
});