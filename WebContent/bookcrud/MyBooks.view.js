sap.ui.jsview("bookcrud.MyBooks", {
	 /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf empcrud.EmpDetails
     */
     getControllerName : function() {
                 return "bookcrud.MyBooks";
     },

     /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf empcrud.EmpDetails
     */
     createContent : function(oController) {
         var oPage = new sap.m.Page({
                     title: "My loans",
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
  	          text : "My Loans",
  	          textAlign : "Left",
  	          design : "Bold"
  	     }).addStyleClass("tit") ],
  	     contentRight : [imag]
  	});
  		
  		oPage.setCustomHeader(oBar);

  		var oBtnUpd = new sap.m.Button("UpdateTwo", {
            text: "Extend the loan",
		            tap: [ oController.ExtendLoan, oController ]
		});
		
		var oBtnDel = new sap.m.Button("DeleteTwo", {
		            text: "Return the book",
		            tap: [ oController.Delete, oController ]
		            });                                
		var oBtnCan = new sap.m.Button("CancelTwo", {
		            text: "Cancel",
		            tap: [ oController.Cancel, oController ]
		            });
		//var oBtnSub = new sap.m.Button("Submit", {
        //    text: "Borrow a new book",
        //    press: oController.BrowseBooks,
        //    type: sap.m.ButtonType.Emphasized
        //    });

		
		//Dialog box / pop-up window for Add/Modify Bank Data			
		var oDialog = new sap.m.Dialog("DialogTwo",{
		            title:"Manage book",
		            modal: true,
		            contentWidth:"1em",
		            content:[
		            new sap.m.Label({text:"Would you like to return it or extend it?"}),
		            oBtnUpd, oBtnDel, oBtnCan
		       ]
        });


//Table or Dashboard to show the Employee Data                        
         var oTable = new sap.m.Table({
  			id:"Loans", 
  			itemPress : [ oController.ItemPress,oController ],
  			columns: [
  				new sap.m.Column({
  					width: "4em", header: new sap.m.Label({text: "Author"}).addStyleClass("bold") 
  				}),
  				new sap.m.Column({
  					width: "4em", header: new sap.m.Label({text: "Title"}).addStyleClass("bold") 
  				}),
  				new sap.m.Column({
  					width: "4em", header: new sap.m.Label({text: "Borrow Date"}).addStyleClass("bold") 
  				}),
  				new sap.m.Column({
  					width: "4em", header: new sap.m.Label({text: "Return Date"}).addStyleClass("bold") 
  				}),
  			]
  		}).addStyleClass("blueTable");
         

         var template = new sap.m.ColumnListItem({

             id: "second_template",
             type: "Navigation",
            visible: true,
             cells: [
            	 new sap.m.Label({
            		 text: "{Authorbook}"
                 }),
                 new sap.m.Label({
                	 text: "{Titlebook}"
                 }),
                 new sap.m.Label({
                	 text: "{Dateborrow}"
                 }),
                 new sap.m.Label({
                     text: "{Datereturn}"
                 })
             ]      
      });
         var oFilters = null;
      oTable.bindItems( "/results",template, null, oFilters);      
      oPage.addContent(oTable);
oPage.setCustomHeader(oBar);
       return oPage;  

}
});