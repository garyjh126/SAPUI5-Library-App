var ISBN ;
var isbnn;
sap.ui.controller(
				"bookcrud.MyBooks",
				{

/*					ta : function() {
						var x = 9;
					},

					

					onAfterRendering : function() {
						console.log("SECOND");
						var url = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/";
						var model = new sap.ui.model.odata.ODataModel(
								url, true);

						var jsonmodel = new sap.ui.model.json.JSONModel();

						model.read("/LoansSet?", null, null, true, function(
								oData, repsonse) {
							jsonmodel.setData(oData);
						});
						sap.ui.getCore().setModel(jsonmodel);

					},

					onInit : function() {

					},*/
					navFromMyBooks : function() {
						var oApp = sap.ui.getCore().byId("menuID");

						oApp.to(menu);
					},

					
						/*onInit: function() {
							
							 
					        var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/";
					        var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,true);
					        var oJsonModel = new sap.ui.model.json.JSONModel();
					        

					       
							oModel.read("/LoansSet? ",null,null,true,function(oData,repsonse){
							oJsonModel.setData(oData,"loans");
							

							console.log(oData);
							var isbnn = 0;

							
						});   	
						
						sap.ui.getCore().setModel(oJsonModel);
						
						},*/
						
			
						
					
						
					 ItemPress: function(evt) {
						 //alert(oUserData.firstName);
				         sap.ui.getCore().byId("DialogTwo").open();                    
				         
				         var oSelectedItem = evt.getParameter("listItem");
				         
				         //holds the value of picked bookd id
				         ISBN = oSelectedItem.getBindingContext().getProperty("Isbn");
				         console.log(ISBN);
				         //holds the value of currently logged in user
				         //var Userid = oUserData.id;
				         //oEntry.Titlebook = sap.ui.getCore().byId("titleBook").getValue();
				         //alert(ISBN);
				         //alert(Userid);
				        // console.log(ISBN);
				         //console.log(Titlebook);
				         isbnn = ISBN;
				     },

				     BrowseBooks: function() {
				    	 window.location.href="admin.html";
				     }, 
				         
//				     Extend: function() {
//				    	 //console.log(ISBN).
//				         
//					            OData.request({
//					                        requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/LoansSet?$expand=LoanToBook",
//					                        method : "GET",
//					                        headers : {
//					                                                "X-Requested-With" : "XMLHttpRequest",
//					                                                "Content-Type" : "application/atom+xml",
//					                                                "DataServiceVersion" : "2.0",
//					                                                "X-CSRF-Token" : "Fetch"
//					                                                }
//					                                    },
//					                                    function(data, response) {
//					                                                header_xcsrf_token = response.headers['x-csrf-token'];
//					                                                var oHeaders = {
//					                                                            "x-csrf-token" : header_xcsrf_token,
//					                                                            'Accept' : 'application/json',
//					                                    };
//					 
//					                        OData.request({
//					                                                requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/LoansSet",
//					                                                method : "POST",
//					                                                headers : oHeaders,
//					                                                data:oEntry
//					                                    },
//					                                                function(data,request) {
//					                                                alert("Book Created Successfully");        
//					                                                location.reload(true);
//					                                    },          function(err) {
//					                                                alert("Book Creation Failed");
//					                                    });
//					                        }, function(err) {
//					                                                var request = err.request;
//					                                                var response = err.response;
//					                                                alert("Error in Get -- Request " + request + " Response " + response);
//					                                    });                                              
//					                                                            },
					                                                            
				         ExtendLoan: function() {
				             var oEntry = {};
				            // oEntry.Isbn = Isbn = sap.ui.getCore().byId("isbn").getValue();
				             console.log("ISBNN"   +  isbnn);
				             oEntry.Isbn = isbnn;
				             OData.request({
				                         requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/LoansSet('"+oEntry.Isbn+"')",
				                         method : "GET",
				                         headers : {
				                        	 "X-Requested-With" : "XMLHttpRequest",
												"Content-Type" : "application/atom+xml",
												"DataServiceVersion" : "2.0",
												"X-CSRF-Token" : "Fetch"

				                                                 }
				                                     },
				                                     function(data, response) {
				                                                 header_xcsrf_token = response.headers['x-csrf-token'];
				                                                var  oHeaders = {
				                                                             "x-csrf-token" : header_xcsrf_token,
				                                                             'Accept' : 'application/json',
				                                     };
				                                                
				     


				                         OData.request({
				                                                 requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/LoansSet('"+oEntry.Isbn+"')",
				                                                 method : "PUT",
				                                                 headers : oHeaders,
				                                                 data:oEntry
				                                     },
				                                                 function(data,request) {
				                                                 alert("Update Success");           
				                                                 location.reload(true);
				                                     },          function(err) {
				                                                 alert(err.message + data);
				                                     });
				                         }, function(err) {
				                                                 var request = err.request;
				                                                 var response = err.response;
				                                                 alert("Error in Get -- Request " + request + " Response " + response);
				               });        
				         },
				         
				         
				         //Return book
				         Delete: function() { 
					            var oEntry = {};
					            //oEntry.Isbn= sap.ui.getCore().byId("isbn").getValue();
					            oEntry.Isbn = ISBN;
					            console.log("oEntry.Isbn: "+oEntry.Isbn);
					            OData.request({
					                        requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/LoansSet('" + oEntry.Isbn + "')",
					                        method : "GET",
					                        headers : {
					                                                "X-Requested-With" : "XMLHttpRequest",
					                                                "Content-Type" : "application/xml",
					                                                "DataServiceVersion" : "2.0",
					                                                "X-CSRF-Token" : "Fetch"
					                                                }
					                                    },
					                                    function(data, response) {
					                                                header_xcsrf_token = response.headers['x-csrf-token'];
					                                                var oHeaders = {
					                                                            "x-csrf-token" : header_xcsrf_token,
					                                                            'Accept' : 'application/xml',
					                                    };
					 
					                        OData.request({
					                                                requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/LoansSet('"+oEntry.Isbn+"')",
					 
					                                                method : "DELETE",
					                                                headers : oHeaders,
					                                                data:oEntry
					                                    },
					                                                function(data,request) {
					                                                alert("Delete Success");           
					                                                location.reload(true);
					                                    },          function(err) {
					                                                alert("Delete Failed");
					                                    });
					                        }, function(err) {
					                                                var request = err.request;
					                                                var response = err.response;
					                                                alert("Error in Get -- Request " + request + " Response " + response);
					                                    });        
					         
					                              },
					// Cancel Action                         
					  Cancel:function() {
				                        sap.ui.getCore().byId("DialogTwo").close();
				                                   }
				 
					
					
				});