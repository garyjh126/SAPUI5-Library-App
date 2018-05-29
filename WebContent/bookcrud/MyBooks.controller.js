sap.ui
		.controller(
				"bookcrud.MyBooks",
				{

					ta : function() {
						var x = 9;
					},

					navFromMyBooks : function() {
						var oApp = sap.ui.getCore().byId("menuID");

						oApp.to(menu);
					},

					onAfterRendering : function() {
						console.log("SECOND");
						/*var url = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/";
						var model = new sap.ui.model.odata.ODataModel(
								url, true);

						var jsonmodel = new sap.ui.model.json.JSONModel();

						model.read("/LoansSet?", null, null, true, function(
								oData, repsonse) {
							jsonmodel.setData(oData);
						});
						sap.ui.getCore().setModel(jsonmodel);
*/
					},

					onInit : function() {

					}

				});