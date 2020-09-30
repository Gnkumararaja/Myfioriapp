sap.ui.define([
	"first/fiori/controller/BaseController",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"first/fiori/formatter/formatter"
], function (BaseController, MessageBox, MessageToast, Formatter) {
	"use strict";

	return BaseController.extend("first.fiori.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf first.fiori.view.View2
		 */
		onInit: function () {

		},
		formatter:Formatter,
		selectedFruit:"",
		
		onApprove: function(){
			this.selectedFruit=this.getView().byId("idHeader").getTitle();
			var that = this;
		//	console.log(this.selectedFruit);
			MessageBox.confirm("Do you really like this fruit?",{
				onClose: function(status){
				if(status === "OK"){
					MessageToast.show("Hey That'c cool"+ ""+ that.selectedFruit);
				} else{
					MessageToast.show("Okay bye");
				}
				}
			});
		},
		
		onNxt: function(oEvent){
			var itemPress=oEvent.getParameter("listItem");
			var address=itemPress.getBindingContextPath();
			//debugger;
			var oView3=this.getView().getParent().getParent();
			oView3.bindElement(address);
			this.showw();
		},
		
		showw: function(){
		// Step1:Get the object of the both the view: Container control
		var oApp = this.getView().getParent();
	//	debugger;
		// Step2: call the method to navigate to another view by passing id
		oApp.to("idView3");
		//jQuery.sap.log.error("Value"+a);
		},
		
		onBack: function(){
		// Step1:Get the object of the both the view: Container control
		var oApp = this.getView().getParent();
		// Step2: call the method to navigate to another view by passing id
		oApp.to("idView");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf first.fiori.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf first.fiori.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf first.fiori.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});