data = {
	selectedEntry: 0,
	entries: []
};
function save(date,title,body){
	var entry = data.entries[data.selectedEntry];
	entry.date = date;
	entry.title = title;
	entry.body = body;
	var entriesForLocalStorage = [];
	//Circular objects can't be turned into JSON
	$(data.entries).each(function () {
		entriesForLocalStorage.push({
			date:this.date.toString(),
			title:this.title,
			body:this.body
		});
	});
	chrome.storage.local.setItem("entries",JSON.stringify(entriesForLocalStorage));
	chrome.storage.local.setItem("selected",data.selectedEntry);
}

$(function load() {
	if(chrome.storage.local.selected && chrome.storage.local.entries){
		data.selectedEntry = parseInt(chrome.storage.local.selected);
		data.entries = JSON.parse(chrome.storage.local.entries);
		$(data.entries).each(function () {
			this.date = new Date(this.date);
		});
		var entry = data.entries[data.selectedEntry];
		$("#date").val(entry.date);
		$("#title").text(entry.title);
		$("#markdown").val(entry.body);
	}
})