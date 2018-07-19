Experigen.initialize = function () {

	var items  = this.resource("items").shuffle();
	items = items.pairWith("view","stim.ejs");
	var mb = [] // Set up variables
				.concat(items.subset("Context", "negative").pairWith("context","negative"))
				.concat(items.subset("Context", "positive").pairWith("context","positive"))
				.concat(items.subset("Type", "artifact").pairWith("type","artifact"))
				.concat(items.subset("Type", "human").pairWith("type","human"))
				.concat(items.subset("Intonation", "negative").pairWith("intonation","negative"))
				.concat(items.subset("Intonation", "positive").pairWith("intonation","positive"))
				.concat(items.subset("Intonation", "filler-ind").pairWith("intonation","filler-ind"))
				.concat(items.subset("Intonation", "filler-def").pairWith("intonation","filler-def"))
	;

	this.addStaticScreen("intro.ejs");
	this.addStaticScreen("demographic.ejs");
	// items = items.shuffle();
	this.addBlock(mb);
	this.addStaticScreen("finalthanks.ejs");

}
