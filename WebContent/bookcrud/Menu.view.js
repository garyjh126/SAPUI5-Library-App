sap.ui.jsview("bookcrud.Menu", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf bookcrud.Menu
	*/ 
	getControllerName : function() {
		return "bookcrud.Menu";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf bookcrud.Menu
	*/ 
	createContent : function(oController) {
		
		 console.log("create content" + oController);
		var menuPage = new sap.m.Page({
            //title: "Menu",
           

		});
		var btnBrowseLibrary = new sap.m.Button("BrowseLibrary", {
			
            text: "Browse Library",
		            press: [ oController.press, oController ]
		}).addStyleClass("btnBrowseLibrary");
		
		var btnMyBooks = new sap.m.Button("MyBooks", {
            text: "My Books",
		            press: [ oController.press2, oController ]
		}).addStyleClass("btnMyBooks");
		
		var imag = new sap.m.Image( {
	          src : "images/logo.png",
	          height : "40px"
	     });
		
		var oBar = new sap.m.Bar( {
	          contentLeft : [ ],
		          
	     contentMiddle : [ new sap.m.Label( {
	          text : "Menu",
	          textAlign : "Left",
	          design : "Bold"
	     }).addStyleClass("tit") ],
	     contentRight : [imag]
	});
		
		menuPage.setCustomHeader(oBar);
		
		
		menuPage.addContent(btnBrowseLibrary).addContent(btnMyBooks);
		
		return menuPage;
	}

});