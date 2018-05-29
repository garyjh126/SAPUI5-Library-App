sap.ui.jsview("bookcrud.BookDetails", {
	 /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf empcrud.EmpDetails
     */
     getControllerName : function() {
                 return "bookcrud.BookDetails";
     },

     /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf empcrud.EmpDetails
     */
     createContent : function(oController) {
                 var oPage = new sap.m.Page({
                             title: "Book Details",
                     		showNavButton: true,
                     		navButtonPress: [oController.navFromBrowseLibrary, oController]
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
       	          text : "Book Details",
       	          textAlign : "Left",
       	          design : "Bold"
       	     }).addStyleClass("tit") ],
       	     contentRight : [imag]
       	});
       		
       		oPage.setCustomHeader(oBar);
                 
          		var oBtnUpd = new sap.m.Button("Update", {
                    text: "Update",
        		            tap: [ oController.Update, oController ]
        		});
        		
        		var oBtnDel = new sap.m.Button("Delete", {
        		            text: "Delete",
        		            tap: [ oController.Delete, oController ]
        		            });                                
        		var oBtnCan = new sap.m.Button("Cancel", {
        		            text: "Cancel",
        		            tap: [ oController.Cancel, oController ]
        		            });
        		var oBtnBorrowBook = new sap.m.Button("Borrow", {
		            text: "Borrow Book",
		            tap: [ oController.Borrow, oController ]
		            });
        		var oBtnSub = new sap.m.Button("Submit", {
        		            text: "Create New Book",
        		            press: oController.NewEntry,
        		            type: sap.m.ButtonType.Emphasized
        		            });
        		
        		var oBtnSav = new sap.m.Button("Save", {
        		            text: "Save",
        		            tap: [ oController.Save, oController ]
        		            });
        		
        		//Dialog box / pop-up window for Add/Modify Bank Data			
        		var oDialog = new sap.m.Dialog("Dialog",{
        		            title:"Add/Modify Book",
        		            modal: true,
        		            contentWidth:"1em",
        		
        		            content:[
        		            new sap.m.Label({text:"Enter Book Id (must be a number)"}),
        		            new sap.m.Input({                                      
        		            maxLength: 20,
        		            id: "isbn"
        		            }),
        		            new sap.m.Label({text:"Enter Book Title"}),
        		            new sap.m.Input({                                      
        		            maxLength: 20, 
        		            id: "titlebook"
        		            }),
        		            new sap.m.Label({text:"Enter Book Author"}),
        		            new sap.m.Input({                                      
        		            maxLength: 20, 
        		            id: "authorbook"
        		            }),                                
        		            new sap.m.Label({text:"Enter Availability"}),
        		            new sap.m.Input({                                      
        		            maxLength: 20,
        		            id: "booked"
        		            }),
        		            new sap.m.Label({text:"Enter Release Date"}),
        		            new sap.m.Input({                                      
        		            maxLength: 20,
        		            id: "releasedate"
        		            }),
        		            new sap.m.Label({text:"Enter bookingId"}),
        		            new sap.m.Input({                                      
        		            maxLength: 20,
        		            id: "bookingid"
        		            }),oBtnUpd, oBtnBorrowBook,oBtnDel, oBtnCan, oBtnSav
        		       ]
                });

 
//Table or Dashboard to show the Employee Data                        
                 var oTable = new sap.m.Table({
          			id:"Books", 
          			itemPress : [ oController.ItemPress,oController ],
          			columns: [
          				new sap.m.Column({
          					width: "4em", header: new sap.m.Label({text: "Book ID"}) 
          				}),
          				new sap.m.Column({
          					width: "4em", header: new sap.m.Label({text: "Title"}) 
          				}),
          				new sap.m.Column({
          					width: "4em", header: new sap.m.Label({text: "Author"}) 
          				}),
          				new sap.m.Column({
          					width: "4em", header: new sap.m.Label({text: "Availability"}) 
          				}),
          				new sap.m.Column({
          					width: "4em", header: new sap.m.Label({text: "Release Date"}) 
          				}),
          				new sap.m.Column({
          					width: "4em", header: new sap.m.Label({text: "Booking ID"}) 
          				})]
          		});
                 

                 
                 var template = new sap.m.ColumnListItem({

                     id: "first_template",
                     type: "Navigation",
                    visible: true,
                     cells: [

                     new sap.m.Label("ID", {
                      text: "{Isbn}"
                        }),
                     new sap.m.Label({
                      text: "{Titlebook}"
                              }),
                     new sap.m.Label({
                      text: "{Authorbook}"
                        }),
                        new sap.m.Label({
                            text: "{Booked}"
                              }),
                              new sap.m.Label({
                                  text: "{Releasedate}"
                                    }),
                     new sap.m.Label({
                     text: "{BookingId}"
                       })
                       ]      
              });

              var  oFilters = null;
              oTable.bindItems( "/results",template, null, oFilters);      
              oPage.addContent(oTable);
              oPage.addContent(oBtnSub);
              return oPage;  

}
});