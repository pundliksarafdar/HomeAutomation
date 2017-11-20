define(['../rest/listRest'],function(listRest){
	var projectView = (function(){
		function ProjectView(){
			
			this.init = function(){
				listRest.getProjectFiles(function(e){console.log(e)},function(e){console.log(e)});
			}
		};
		return new ProjectView();
	})();
	
	return projectView;
});