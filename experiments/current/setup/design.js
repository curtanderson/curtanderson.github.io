Experigen.initialize = function () {

	var items  = this.resource("items");
	var math = this.resource("math");

	//var frames = this.resource("frames");

	//items = items.pairWith("frame", frames.shuffle())

	/*var sampleItem =  items.subset("type","filler").chooseRandom(1)
			.pairWith("order",1)
			.pairWith("view","stimulus.ejs")
			;*/


	var mb = items
			.pairWith("view","stim.ejs")
			.shuffle()
			.shuffle()
			//.pairWith("order",[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
			.shuffle()
			.shuffle()
			;

	/*var block = math
		.pairWith("view","questionstim.ejs")
		.shuffle()
		;*/

	var block1 = [].concat(mb.subset("order",1)).shuffle();
	var block2 = [].concat(mb.subset("order",2)).shuffle();
	var block3 = [].concat(mb.subset("order",3)).shuffle();
	var block4 = [].concat(mb.subset("order",4)).shuffle();
	var block5 = [].concat(mb.subset("order",5)).shuffle();
	var block6 = [].concat(mb.subset("order",6)).shuffle();
	var block7 = [].concat(mb.subset("order",7)).shuffle();
	var block8 = [].concat(mb.subset("order",8)).shuffle();
	var block9 = [].concat(mb.subset("order",9)).shuffle();
	var block10 = [].concat(mb.subset("order",10)).shuffle();
	var block11 = [].concat(mb.subset("order",11)).shuffle();
	var block12 = [].concat(mb.subset("order",12)).shuffle();
	var block13 = [].concat(mb.subset("order",13)).shuffle();
	var block14 = [].concat(mb.subset("order",14)).shuffle();
	var block15 = [].concat(mb.subset("order",15)).shuffle();
	var block16 = [].concat(mb.subset("order",16)).shuffle();


	this.addStaticScreen("intro.ejs");
	this.addStaticScreen("instructions.ejs");
	this.addStaticScreen("instructions2.ejs");
	//this.addBlock(sampleItem);
	//this.addStaticScreen("getgoing.ejs");
	this.addBlock(mb)
	/*this.addBlock(block1);
	this.addBlock(block2);
	this.addBlock(block3);
	this.addBlock(block4);
	this.addBlock(block5);
	this.addBlock(block6);
	this.addBlock(block7);
	this.addBlock(block8);
	this.addBlock(block9);
	this.addBlock(block10);
	this.addBlock(block11);
	this.addBlock(block12);
	this.addBlock(block13);
	this.addBlock(block14);
	this.addBlock(block15);
	this.addBlock(block16);*/
	this.addStaticScreen("demographic.ejs");
	this.addStaticScreen("finalthanks.ejs");

}
