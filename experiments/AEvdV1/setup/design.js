Experigen.initialize = function () {

	var items  = this.resource("items");
	var comprehension = this.resource("comprehension");

	var mb = []
			.concat(items.subset("condition", "ind").pairWith("type","indefinite"))
			.concat(items.subset("condition", "def").pairWith("type","definite"))
			.concat(items.subset("condition", "pos").pairWith("type","positive"))
			.concat(items.subset("condition", "neg").pairWith("type","negative"))
			.shuffle()
			.shuffle()
			.pairWith("view","stim.ejs")
			.shuffle()
			.shuffle()
			.pairWith("order",[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
			.shuffle()
			.shuffle()
			;

	var mathQuestions = comprehension
			.shuffle()
			.chooseRandom(16)
			.pairWith("view","stim2.ejs")
			.shuffle()
			;

	var block1 = [].concat(mb.subset("order",1)).shuffle().concat(mathQuestions[0]);
	var block2 = [].concat(mb.subset("order",2)).shuffle().concat(mathQuestions[1]);
	var block3 = [].concat(mb.subset("order",3)).shuffle().concat(mathQuestions[2]);
	var block4 = [].concat(mb.subset("order",4)).shuffle().concat(mathQuestions[3]);
	var block5 = [].concat(mb.subset("order",5)).shuffle().concat(mathQuestions[4]);
	var block6 = [].concat(mb.subset("order",6)).shuffle().concat(mathQuestions[5]);
	var block7 = [].concat(mb.subset("order",7)).shuffle().concat(mathQuestions[6]);
	var block8 = [].concat(mb.subset("order",8)).shuffle().concat(mathQuestions[7]);
	var block9 = [].concat(mb.subset("order",9)).shuffle().concat(mathQuestions[8]);
	var block10 = [].concat(mb.subset("order",10)).shuffle().concat(mathQuestions[9]);
	var block11 = [].concat(mb.subset("order",11)).shuffle().concat(mathQuestions[10]);
	var block12 = [].concat(mb.subset("order",12)).shuffle().concat(mathQuestions[11]);
	var block13 = [].concat(mb.subset("order",13)).shuffle().concat(mathQuestions[12]);
	var block14 = [].concat(mb.subset("order",14)).shuffle().concat(mathQuestions[13]);
	var block15 = [].concat(mb.subset("order",15)).shuffle().concat(mathQuestions[14]);
	var block16 = [].concat(mb.subset("order",16)).shuffle().concat(mathQuestions[15]);


	this.addStaticScreen("intro.ejs");
	this.addStaticScreen("instructions.ejs");
	this.addStaticScreen("instructions2.ejs");
	this.addStaticScreen("instructions3.ejs");
	this.addBlock(block1);
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
	this.addBlock(block16);
	this.addStaticScreen("finalthanks.ejs");

}
