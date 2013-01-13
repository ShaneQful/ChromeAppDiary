var data = {
	selectedEntry: undefined,
	entries: []
};


var titleEl;
var dateEl;
var bodyEl;
var entryListEl;

// Get references to html dom elements 
$(function() {
	titleEl = $("#title");
	dateEl = $("#date");
	bodyEl = $("#markdown");
	entryListEl = $( "#entry-list" );
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
	dateEl.val(entry.date);
	bodyEl.val(entry.body);
	refreshListSelectedItem();
}

// Create a new entry
function newEntry() {
	var entry = {
		title: 'New entry',
		date: new Date(),
		body: '',
	};
	data.entries.push(entry);
	refreshList();
	selectEntry(data.entries.length - 1);
}

// Delete entry
function deleteEntry() {
	data.entries.splice(data.selectedEntry,1);
	refreshList();
	selectEntry(data.entries.length - 1);
}

// Save entry
function save(date,title,body){
	"use strict";
	var entry = data.entries[data.selectedEntry];
	entry.date = date;
	entry.title = title;
	entry.body = body;
	chrome.storage.local.set({"data":data});
	refreshList();
}

$(function load() {
	chrome.storage.local.get("data", function (items){
		if($.isEmptyObject(items)){
			data.selectedEntry = 0;
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