sap.ui
		.controller(
				"bookcrud.BookDetails",
				{

					/*onInit : function() {



					},
					
					onAfterRendering: function() {
						console.log("FIRST");
						var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/";
						var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
						var oJsonModel = new sap.ui.model.json.JSONModel();
						oModel.read("/BookSet?", null, null, true, function(oData, repsonse) {oJsonModel.setData(oData);});
						sap.ui.getCore().setModel(oJsonModel);
					},*/
					
					navFromMyBooks : function(){
						var oApp = sap.ui.getCore().byId("menuID");
						oApp.to(menu);
					},
					
					navFromBrowseLibrary : function() {
						var oApp = sap.ui.getCore().byId("menuID");
						oApp.to(menu);
					},

					ItemPress : function(evt) {
						sap.ui.getCore().byId("Dialog").open();
						sap.ui.getCore().byId("Update").setVisible(true);
						sap.ui.getCore().byId("Delete").setVisible(true);
						sap.ui.getCore().byId("Save").setVisible(false);

						// var oSelectedItem = evt.getParameter("listItem");
						// var sID =
						// oSelectedItem.getBindingContext().getProperty("BankKey");
						// var sName =
						// oSelectedItem.getBindingContext().getProperty("BankName");
						// var sAddr =
						// oSelectedItem.getBindingContext().getProperty("BankBranch");
						// var sRole =
						// oSelectedItem.getBindingContext().getProperty("Reserves");

						var oSelectedItem = evt.getParameter("listItem");
						var ISBN = oSelectedItem.getBindingContext()
								.getProperty("Isbn");
						var Titlebook = oSelectedItem.getBindingContext()
								.getProperty("Titlebook");
						var Authorbook = oSelectedItem.getBindingContext()
								.getProperty("Authorbook");
						var booked = oSelectedItem.getBindingContext()
								.getProperty("Booked");
						var releaseDate = oSelectedItem.getBindingContext()
								.getProperty("Releasedate");
						

						sap.ui.getCore().byId("isbn").setValue(ISBN);
						sap.ui.getCore().byId("titlebook").setValue(Titlebook);
						sap.ui.getCore().byId("authorbook")
								.setValue(Authorbook);
						sap.ui.getCore().byId("booked").setValue(booked);
						sap.ui.getCore().byId("releasedate").setValue(
								releaseDate);
						
						sap.ui.getCore().byId("isbn").setEnabled(false);
					},

					NewEntry : function() {
						sap.ui.getCore().byId("Dialog").open();
						sap.ui.getCore().byId("Save").setVisible(true);
						sap.ui.getCore().byId("Update").setVisible(false);
						sap.ui.getCore().byId("Delete").setVisible(false);
						sap.ui.getCore().byId("isbn").setValue("");
						sap.ui.getCore().byId("titlebook").setValue("");
						sap.ui.getCore().byId("authorbook").setValue("");
						sap.ui.getCore().byId("booked").setValue("");
						sap.ui.getCore().byId("releasedate").setValue("");
						
						sap.ui.getCore().byId("isbn").setEnabled(true);
					},

					Save : function() {

						var oEntry = {};
						oEntry.Isbn = sap.ui.getCore().byId("isbn").getValue();
						oEntry.Titlebook = sap.ui.getCore().byId("titlebook")
								.getValue();
						oEntry.Authorbook = sap.ui.getCore().byId("authorbook")
								.getValue();
						oEntry.Booked = sap.ui.getCore().byId("booked")
								.getValue();
						oEntry.Releasedate = sap.ui.getCore().byId(
								"releasedate").getValue();
						

						OData
								.request(
										{
											requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/BookSet",
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
											var oHeaders = {
												"x-csrf-token" : header_xcsrf_token,
												'Accept' : 'application/json',
											};

											OData
													.request(
															{
																requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/BookSet",
																method : "POST",
																headers : oHeaders,
																data : oEntry
															},
															function(data,
																	request) {
																alert("Book Created Successfully");
																location
																		.reload(true);
															},
															function(err) {
																alert("Book Creation Failed");
															});
										}, function(err) {
											var request = err.request;
											var response = err.response;
											alert("Error in Get -- Request "
													+ request + " Response "
													+ response);
										});
					},

					Borrow : function() {
							
						var oEntry = {};
						oEntry.Isbn = sap.ui.getCore().byId("isbn").getValue();
						

						OData
								.request(
										{
											requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/LoansSet",
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
											var oHeaders = {
												"x-csrf-token" : header_xcsrf_token,
												'Accept' : 'application/json',
											};

											OData
													.request(
															{
																requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/LoansSet",
																method : "POST",
																headers : oHeaders,
																data : oEntry
															},
															function(data,
																	request) {
																alert("Loan Created Successfully");
																location
																		.reload(true);
															},
															function(err) {
																alert("Loan Creation Failed");
															});
										}, function(err) {
											var request = err.request;
											var response = err.response;
											alert("Error in Get -- Request "
													+ request + " Response "
													+ response);
										});

						
						
						
						
						
						
						/*var oEntry = {};
						oEntry.Isbn = sap.ui.getCore().byId("isbn").getValue();
						

						if (sap.ui.getCore().byId("booked").getValue() == '-') {
							oEntry.Booked = 'X';
						}

						OData
								.request(
										{
											requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/BookSet",
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
											var oHeaders = {
												"x-csrf-token" : header_xcsrf_token,
												'Accept' : 'application/json',
											};

											OData
													.request(
															{
																requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/BookSet('"
																		+ oEntry.Isbn
																		+ "')",
																method : "PUT",
																headers : oHeaders,
																data : oEntry
															},
															function(data,
																	request) {
																alert("Update Success");
																location
																		.reload(true);
															},
															function(err) {
																alert("Update Failed");
															});
										}, function(err) {
											var request = err.request;
											var response = err.response;
											alert("Error in Get -- Request "
													+ request + " Response "
													+ response);
										});

						
						 * var oEntryLoans = {}; oEntryLoans.Userid = ;
						 * oEntryLoans.Isbn =
						 * sap.ui.getCore().byId("isbn").getValue();
						 * oEntryLoans.Dateborrow =
						 * sap.ui.getCore().byId("isbn").getValue();
						 * oEntryLoans.Datereturn =
						 * sap.ui.getCore().byId("isbn").getValue();
						 
*/
					},

					Update : function() {
						var oEntry = {};
						oEntry.Isbn = sap.ui.getCore().byId("isbn").getValue();
						oEntry.Titlebook = sap.ui.getCore().byId("titlebook")
								.getValue();
						oEntry.Authorbook = sap.ui.getCore().byId("authorbook")
								.getValue();
						oEntry.Booked = sap.ui.getCore().byId("booked")
								.getValue();
						oEntry.Releasedate = sap.ui.getCore().byId(
								"releasedate").getValue();
						

						console.log(oEntry.Isbn);
						console.log(oEntry.Titlebook);
						console.log(oEntry.Authorbook);
						console.log(oEntry.Booked);
						console.log(oEntry.Releasedate);
						

						OData
								.request(
										{
											requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/BookSet",
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
											var oHeaders = {
												"x-csrf-token" : header_xcsrf_token,
												'Accept' : 'application/json',
											};

											OData
													.request(
															{
																requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/BookSet('"
																		+ oEntry.Isbn
																		+ "')",
																method : "PUT",
																headers : oHeaders,
																data : oEntry
															},
															function(data,
																	request) {
																alert("Update Success");
																location
																		.reload(true);
															},
															function(err) {
																alert("Update Failed");
															});
										}, function(err) {
											var request = err.request;
											var response = err.response;
											alert("Error in Get -- Request "
													+ request + " Response "
													+ response);
										});
					},

					Delete : function() {
						var oEntry = {};
						oEntry.Isbn = sap.ui.getCore().byId("isbn").getValue();

						OData
								.request(
										{
											requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/BookSet('"
													+ oEntry.Isbn + "')",
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
											var oHeaders = {
												"x-csrf-token" : header_xcsrf_token,
												'Accept' : 'application/json',
											};

											OData
													.request(
															{
																requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/BookSet('"
																		+ oEntry.Isbn
																		+ "')",

																method : "DELETE",
																headers : oHeaders,
																data : oEntry
															},
															function(data,
																	request) {
																alert("Delete Success");
																location
																		.reload(true);
															},
															function(err) {
																alert("Delete Failed");
															});
										}, function(err) {
											var request = err.request;
											var response = err.response;
											alert("Error in Get -- Request "
													+ request + " Response "
													+ response);
										});
						OData
						.request(
								{
									requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/LoansSet('"
											+ oEntry.Isbn + "')",
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
									var oHeaders = {
										"x-csrf-token" : header_xcsrf_token,
										'Accept' : 'application/json',
									};

									OData
											.request(
													{
														requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/LoansSet('"
																+ oEntry.Isbn
																+ "')",

														method : "DELETE",
														headers : oHeaders,
														data : oEntry
													},
													function(data,
															request) {
														alert("Delete Success");
														location
																.reload(true);
													},
													function(err) {
														alert("Delete Failed");
													});
								}, function(err) {
									var request = err.request;
									var response = err.response;
									alert("Error in Get -- Request "
											+ request + " Response "
											+ response);
								});

					},
					// Cancel Action
					Cancel : function() {
						sap.ui.getCore().byId("Dialog").close();
					}

				});