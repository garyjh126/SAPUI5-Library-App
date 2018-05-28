sap.ui.jsview("bookcrud.MyBooks", {

	
	getControllerName : function() {
		return "bookcrud.MyBooks";
	},

	
	createContent : function(oController) {
		var myBooksPage = new sap.m.Page({
            title: "My Books",
            showNavButton: true,
     		navButtonPress: [oController.navFromMyBooks, oController]
		});
		
		

		
		return myBooksPage;
		

	}

});