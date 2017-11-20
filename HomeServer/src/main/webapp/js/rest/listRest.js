define([],function(){
	var listRest = (function(){
		function ListRest(){
			var getProjectFiles  = function(successFn,errorFn){
				$.ajax({url:"rest/test/projectFiles",success:successFn,error:errorFn});
			};
			
			var getServiceList  = function(successFn,errorFn,projectName){
				$.ajax({url:"rest/test?isUrl=false&projectName="+projectName+"&serviceUrl=c",success:successFn,error:errorFn});
			};
			
			var getHeadersList  = function(successFn,errorFn,projectName){
				$.ajax({url:"rest/test/header?isUrl=false&projectName="+projectName+"&projectPath=c",success:successFn,error:errorFn});
			};
			
			var saveHeadersList  = function(successFn,errorFn,data){
				$.ajax({url:"rest/test/header?isUrl=false&projectName="+data.projectName+"&projectPath=c",success:successFn,error:errorFn,method:"POST",data:JSON.stringify(data.headers),contentType: "application/json"});
			};
			
			this.getProjectFiles = getProjectFiles;
			this.getServiceList = getServiceList;
			this.getHeadersList = getHeadersList;
			this.saveHeadersList = saveHeadersList;
		}
		return new ListRest();
	})();
	
	return listRest;
});