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
		
		 var imag = new sap.m.Image( {
  	          src : "images/logo.png",
  	          height : "40px"
  	     });
  		
  		var oBar = new sap.m.Bar( {
  			contentLeft : [new sap.m.Button({

               icon: icon="sap-icon://nav-back",
               
               press: function(){

               	app.back();               

               }

           })], 
  		          
  	     contentMiddle : [ new sap.m.Label( {
  	          text : "My Books",
  	          textAlign : "Left",
  	          design : "Bold"
  	     }).addStyleClass("tit") ],
  	     contentRight : [imag]
  	});
  		
  		myBooksPage.setCustomHeader(oBar);

		
		return myBooksPage;
		

	}

});