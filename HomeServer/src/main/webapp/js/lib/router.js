define([],function(){
	var routes = {};
	var router = (function(){
		function Router(){
			this.register = function(route){
				routes[route.path] = route;
			}
			
			this.getRoutes = function(){
				return routes;
			}
			
			$(window).on("hashchange",function(){
				$.each(routes,function(key,val){
					console.log(key,window.location.hash.indexOf(key));
					if(window.location.hash.indexOf(key) == 0){
					var routeObj = val;
					if(routeObj){
						$.get(routeObj.page,function(pageHtml){
							$(routeObj.container).html(pageHtml);
							require([routeObj.view], function(view) {
								view.init();
							});
						});	
					}
							}
				});
		});
		};
		return new Router();
	})();
	
	return router;
});