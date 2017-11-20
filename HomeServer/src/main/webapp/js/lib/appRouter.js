define(['router','routes/serviceListRouter'],function(router,serviceListRouter){
	var routes = {};
	var router = (function(){
		function Router(){
			router.register({
				path:"#apitesting",
				view:"view/serverUrlAndProjectView",
				page:"js/pages/serverUrlAndProject.html",
				container:"#container"
			});
			
			router.register({
				path:"#list",
				view:"view/projectView",
				page:"js/pages/listPage.html",
				container:"#container"
			});
			
			serviceListRouter.registerRoute();
		};
		
		return new Router();
	})();
	
	return router;
});