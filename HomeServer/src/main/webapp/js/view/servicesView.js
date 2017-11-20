define(['../rest/listRest'],function(listRest){
	var projectView = (function(){
		var BASE_ID = "#apiTesting-services";
		var SERVICE_TABLE = BASE_ID + "-table tbody";
		var REQUEST = BASE_ID + "-request";
		var RESPONSE = BASE_ID + "-response";
		var RESPONSE_EXPECTED = RESPONSE + "-expected";
		var RESPONSE_SERVICE = RESPONSE + "-service";
		var PARAMETER = BASE_ID + "-parameter";
		var PARAMETER_URL = PARAMETER + "-url";
		var PARAMETER_QUERY = PARAMETER + "-query-section";
		var PARAMETER_PATH = PARAMETER + "-path-section";
		var SAVE_CHANGES = "#saveChange";
		var servicesThis;
		var selectedService;
		function ProjectView(){
			
			this.init = function(){
				$(SERVICE_TABLE).on("click",".editParameter",editParameter);
				var projectName = sessionStorage.projectName;
				listRest.getServiceList(function(e){showServices(e)},function(e){console.log(e)},projectName);
				$('.modal').find(RESPONSE_EXPECTED).on("input",setExpectedResponse);
				$('.modal').find(RESPONSE_SERVICE).on("input",setResponse);
				$('.modal').find(REQUEST).on("input",setRequest);
				$(".modal").find(SAVE_CHANGES).on("click",saveChanges);
			}
			
			function saveChanges(){
				console.log(servicesThis);
			}
			
			function setRequest(){
				var request = $(this).val();
				selectedService.request = request;
			}
			
			function setResponse(){
				var response = $(this).val();
				selectedService.serviceResponse = response;
			}
			
			function setExpectedResponse(){
				var expectedResponse = $(this).val();
				selectedService.response = expectedResponse;
			}
			
			
			function editParameter(){
				var serviceId = $(this).closest("tr").attr("id");
				var request;
				var responseExpected;
				var responseService;
				$.each(servicesThis,function(index,val){
					if(serviceId == val.id){
						selectedService = val;
						return false;
					}					
				});
				$('.modal').find(REQUEST).val(selectedService.request);
				$('.modal').find(RESPONSE_EXPECTED).val(selectedService.response);
				$('.modal').find(RESPONSE_SERVICE).val(selectedService.serviceResponse);
				$('.modal').find(PARAMETER_URL).text(selectedService.path);
				
				var requestParams = selectedService.requestParams;
				var queryParam = [];
				var pathParam = [];
				
					$.each(requestParams,function(index,reqParam){
						var value = reqParam.value && reqParam.value!=null?reqParam.value:"";
						if(reqParam.style == "query"){
							queryParam.push("<div class='form-group row'><label class='col-sm-2 col-form-label'>"+reqParam.name+"</label><input type='query' 'value='"+value+"' class='param col-sm-10'/></div>")
						}else if(reqParam.style == "template"){
							pathParam.push("<div class='form-group row'><label class='col-sm-2 col-form-label'>"+reqParam.name+"</label><input type='template' 'value='"+value+"' class='param col-sm-10'/></div>")
						}
					});
					$('.modal').find(PARAMETER_QUERY).html(queryParam.length?queryParam:"<div class='alert alert-info'>No parameter</div>");
					$('.modal').find(PARAMETER_PATH).html(pathParam.length?pathParam:"<div class='alert alert-info'>No parameter</div>");
				/*
				$('.modal').find(PARAMETER_QUERY).val(selectedService.serviceResponse);
				$('.modal').find(PARAMETER_PATH).val(selectedService.serviceResponse);
				*/
				$(".modal").modal('show');
			}
			
			
			function showServices(services){
				servicesThis = services;
				var serviceTable = [];
				$.each(services,function(index,service){
					serviceTable.push("<tr id='"+service.id+"'><td><input type='checkbox' "+(service.execute?"checked":"")+" id='inlineCheckbox1'></td><td><a href='#' class='editParameter'>"+service.name+"</a></td><td>"+service.path+"</td><td>"+service.type+"</td><tr>")
				});
				$(SERVICE_TABLE).html(serviceTable);
			}
			
		};
		return new ProjectView();
	})();
	
	return projectView;
});