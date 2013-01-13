var data = {
	selectedEntry: undefined,
	entries: []
};


var titleEl;
var dateEl;
var bodyEl;

// Get references to html dom elements 
$(function() {
	titleEl = $("#title");
	dateEl = $("#date");
	bodyEl = $("#markdown");
});

// Get the selected entry
function getSelectedEntry(index) {
	return data.entries[index];
}

// Select an entry
function selectEntry(index) {
	data.selectedEntry = index;
	var entry = getSelectedEntry(index);
	titleEl.text(entry.title);
	dateEl.text(entry.date);
	bodyEl.text(entry.body);
}

// Create a new entry
function newEntry() {
	var entry = {
		title: 'New entry',
		date: new Date(),
		body: '',
	};
	data.entries.push(entry);
	selectEntry(data.entries.length - 1);
	refreshList();
}

// Save entry
function save(date,title,body){
	"use strict";
	var entry = data.entries[data.selectedEntry];
	entry.date = date;
	entry.title = title;
	entry.body = body;
// 	key = "entries";//+data.selectedEntry;
// 	chrome.storage.sync.set({
// 		key:{
// 			date:entry.date,
// 			title:entry.title,
// 			body:entry.body
// 		}
// 	});
	chrome.storage.sync.set({"data":data});
}

$(function load() {
	chrome.storage.sync.get("data", function (items){
		if($.isEmptyObject(items)){
			newEntry();
		}else{
			data = items.data;
			entry = data.entries[data.selectedEntry];
			$("#date").val(entry.date);
			$("#title").text(entry.title);
			$("#markdown").val(entry.body);
			refreshList();
		}
	});
});