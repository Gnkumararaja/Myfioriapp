sap.ui.define(
	["sap/ui/core/mvc/Controller",
	"first/fiori/model/models"],
	function(Controller, models){
		return Controller.extend("first.fiori.BaseController",{
			
			initiateModels: function(){
				var oAppview = sap.ui.getCore().byId("idMyXml");
				var oModel = models.createFruitModel();
				oAppview.setModel(oModel); //acts like setting model at entire app
			}
		});
	}
); 