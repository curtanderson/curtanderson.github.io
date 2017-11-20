var Experigen =  {
	settings: {

		experimentName: "Anderson2017ExclamativeIntonation1Final", // use only A-Z, a-z, 0-9

		databaseServer: "http://db.phonologist.org/",

		online: true, // make sure you know what you're doing before changing this

		strings: {
			windowTitle:     "Experiment",
			connecting:		 "Connecting...",
			loading:         "Loading...",
			//soundButton:     "    ►    ",
			soundButton:     "      Play      ",
			continueButton:  "     Continue     ",
			errorMessage:    "An error occurred. We apologize for the inconvenience.",
			emptyBoxMessage: "Please supply your answer in the text box."
		},

		audio: true,

		progressbar: {
			visible: true,
			adjustWidth: 1,
			percentage: true
		},

		items: "resources/items.txt",

		otherresources: {
			comprehension: "resources/math.txt"
		},

		folders: {
			views: "views/",
			sounds: "resources/sounds/",
		},

		footer: "views/footer.html",
		missingview: "views/missingview.ejs"
	}
};
