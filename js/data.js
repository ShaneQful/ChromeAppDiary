data = {
	selectedEntry: 0,
	entries: [
		{
			date: new Date(2013, 1, 24),
			title: 'New entry',
			body: 'Your text here...'
		},
		{
			date: new Date(2013, 1, 23),
			title: 'New entry 2',
			body: 'Your text here...'
		},
		{
			date: new Date(2013, 1, 22),
			title: 'New entry 3',
			body: 'Your text here...'
		},
	],
	save: function(title, body, date)  {
		// save code
		var entry = data.entries[data.selectedEntry];
		entry.date = date;
		entry.title = date;
		entry.body = date;
		//JSON.stringify(data);
	},
}
