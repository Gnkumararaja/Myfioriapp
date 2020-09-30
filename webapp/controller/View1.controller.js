sap.ui.define([
	"first/fiori/controller/BaseController",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController,Filter,FilterOperator) {
	"use strict";

	return BaseController.extend("first.fiori.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf first.fiori.view.View1
		 */
		onInit: function () {
			var oList = this.getView().byId("idynamic");
			var oAlist= this.getView().byId("Idfruits");
			oList.bindAggregation("items",{
				path:'/fruits',
				template:new sap.m.ObjectListItem({
					intro:"{type}",
					title:"{fName}",
					number:"{price}",
					numberUnit:"pc",
					icon:"{fimage}"
				})
			});
			
			oAlist.addEventDelegate({
				updateFinished:function(){
				oAlist.setSelectedItem(oAlist.getItems()[0]);
			}
			});

		},
		
		onUpdate:function(oEvent){
			var oAlist = oEvent.getSource();
			oAlist.setSelectedItem(oAlist.getItems()[0]);
			var oView2=this.getView().getParent().getParent().getDetailPages()[0];
			oView2.bindElement("/fruits/0");
		},
		
		onItemPress: function(oEvent){
		//step1: Getting the listitem 
		var oItemPress = oEvent.getParameter("listItem");
		//step2: Address of the data which was from the item
		var addressOfSelection = oItemPress.getBindingContextPath();
		//Step3: getting view2 object by going to parent which is app controll
		//var oView2=this.getView().getParent().getPages()[1];
		var oView2 = this.getView().getParent().getParent().getDetailPages()[0];
		//step4: Binding the address in second view
		oView2.bindElement(addressOfSelection);
		
	//	debugger;
	    oView2.byId("locate").getContent()[0].getItems()[0].bindElement("address/0");
		oView2.byId("locate").getContent()[1].getItems()[0].bindElement("address/1");
		//get the object of Icon tabfilter
		//inside that fragment
		//inside eaxh fragment a simpleform
		//bind the simpleform with/address/index
		
		
		//step5: Navigate to next screen
		this.onShowme();
		},
		
		onFilter: function(oEvent){
		sap.m.MessageBox.confirm("This page is under construction..");	
		},
		
		onSearch: function(oEvent) {
			var searchStr = oEvent.getParameter("query");
			var oFilter = new Filter("fName",FilterOperator.Contains,searchStr);
			var oFilterT = new Filter("type",FilterOperator.Contains,searchStr);
			var oMainFilter = new Filter({
				filters:[oFilter,oFilterT],
				and:false
			});
			var aFilter =[oMainFilter];
			var oList = this.getView().byId("Idfruits");
			oList.getBinding("items").filter(aFilter);
			
		},
		
		onShowme: function(){
		// Step1:Get the object of the both the view: Container control
		var oApp = this.getView().getParent();
		// Step2: call the method to navigate to another view by passing id
		oApp.to("idView2");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf first.fiori.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf first.fiori.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf first.fiori.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});