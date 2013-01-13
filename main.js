chrome.app.runtime.onLaunched.addListener(function(intentData) {
    chrome.app.window.create('index.html', {
				width: 1317,
				height: 744,
				minWidth: 1317,
				minHeight: 744
    });
});
