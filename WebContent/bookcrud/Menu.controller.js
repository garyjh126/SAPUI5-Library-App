sap.ui.controller("bookcrud.Menu", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf bookcrud.Menu
*/
	onInit: function() {

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf bookcrud.Menu
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf bookcrud.Menu
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf bookcrud.Menu
*/
//	onExit: function() {
//
//	}

	press: function(){
		var oApp = sap.ui.getCore().byId("menuID");
		
		oApp.to(browseLibrary);
		
		var url = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/";
		var model = new sap.ui.model.odata.ODataModel(
				url, true);

		var jsonmodel = new sap.ui.model.json.JSONModel();

		model.read("/BookSet?", null, null, true, function(oData, repsonse) {
			jsonmodel.setData(oData);
		});
		sap.ui.getCore().setModel(jsonmodel);
	},
	
	press2: function(){
/*		var oApp = sap.ui.getCore().byId("menuID");
		
		oApp.to(myBooks);
		
		var url = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/";
		var model = new sap.ui.model.odata.ODataModel(
				url, true);

		var jsonmodel = new sap.ui.model.json.JSONModel();

		model.read("/BookSet?", null, null, true, function(
				oData, repsonse) {
			jsonmodel.setData(oData);
		});
		sap.ui.getCore().setModel(jsonmodel);

*/
var oApp = sap.ui.getCore().byId("menuID");
		
		oApp.to(myBooks);
		var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZTA_BOOKS_N_SRV/";
        var model = new sap.ui.model.odata.ODataModel(sServiceUrl,true);
        var jsonmodel = new sap.ui.model.json.JSONModel();
        
    	model.read("/LoansSet?", null, null, true, function(
				oData, repsonse) {
			jsonmodel.setData(oData);
		});
		sap.ui.getCore().setModel(jsonmodel);
	       
	},
	
		
});