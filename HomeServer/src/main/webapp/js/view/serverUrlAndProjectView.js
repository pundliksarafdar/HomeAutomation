define(['../rest/listRest'],function(listRest){
	var projectView = (function(){
		function ProjectView(){
			var BASE_ID = "#apiTesting-serverUri";
			var PROJECT_TABLE = BASE_ID+"-projects";
			var PROJECT_TABLE_BODY = PROJECT_TABLE + " tbody";
			this.init = function(){
				$(PROJECT_TABLE_BODY).on("click",'.loadProject',loadProject);
				listRest.getProjectFiles(loadProjectTable,console.log);
			}
			
			var loadProjectTable = function(projects){
				var tableTr = [];
				$.each(projects,function(index,project){
					tableTr.push("<tr><td>"+(index+1)+"</td><td><a class='loadProject' 'href='#' data-projectName='"+project+"'>"+project+"</a></td><td></td><td></td><tr>");
				});
				$(PROJECT_TABLE_BODY).html(tableTr.join());
			}
			
			var loadProject = function(){
				var projectName = $(this).attr("data-projectname");
				sessionStorage.projectName = projectName;
				location.href= "#list/services";
			}
		};
		return new ProjectView();
	})();
	
	return projectView;
});