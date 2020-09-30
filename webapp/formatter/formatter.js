sap.ui.define(
	[],
	function(){
		return {
			setStatus:function(status){
				switch (status){
					case "Registered" :
						return "Success";
					case "Out of Market" :
						return "Warning";
					case "Not Registered" :
						return "Error";
					default:
					
				}
			}
		};
	}
	
	);