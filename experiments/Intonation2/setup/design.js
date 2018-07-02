Experigen.initialize = function () {

	var items  = this.resource("items");
	items = items.pairWith("view","stim.ejs").shuffle().shuffle().shuffle();

	this.addStaticScreen("intro.ejs");
	this.addStaticScreen("demographic.ejs");
	this.addBlock(items);
	this.addStaticScreen("finalthanks.ejs");

}
