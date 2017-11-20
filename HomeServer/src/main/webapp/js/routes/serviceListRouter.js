define(['router'],function(router){
	var routes = {};
	var serviceListRoute = (function(){
		function ServiceListRoute(){
			this.registerRoute = function(){
				router.register({
					path:"#list/services",
					view:"view/servicesView",
					page:"js/pages/services.html",
					container:"#projectList"
				});
				router.register({
					path:"#list/headers",
					view:"view/headersView",
					page:"js/pages/headers.html",
					container:"#projectList"
				});
			}
		};
		
		return new ServiceListRoute();
	})();
	
	return serviceListRoute;
});