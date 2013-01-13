function downloadData(){
	var outputMark, outputHTML, link, md;
	md = require( "markdown" ).markdown;
	outputHTML = "";
	outputMark = "";
	$(data.entries).each(function() {
		outputHTML += "<h2>"+this.title+"</h2><br>"+"<h3>"+this.date+"</h3><br>"
		outputMark += "##"+this.title+"\n"+"###"+this.date+"\n"
		outputMark += this.body+"\n\n"
		outputHTML += md.toHTML(this.body)+"<br>";
	});
	link = '<br><div><a class="dllink" href="data:application/octet-stream;charset=utf-8;base64,'+Base64.encode(outputMark)+'" target="_blank">Markdown</a><br/>';
	link += '</div><br><div><a class="dllink" href="data:application/octet-stream;charset=utf-8;base64,'+Base64.encode(outputHTML)+'" target="_blank">Web Page</a><br/></div>';
	return link;
}

$(function() {
	//Show down link
	$("#export").button().click(function() { 
		$("#export-links").html(downloadData());
		$("#export-links").show("blind");
		$(".dllink").button();
		$(".dllink").click(function() {
			$("#export-links").html("");
			$("#export-links").hide("blind");
		});
	});
});