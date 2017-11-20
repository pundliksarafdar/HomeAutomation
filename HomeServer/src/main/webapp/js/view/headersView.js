define(['../rest/listRest'],function(listRest){
	var headersView = (function(){
		var BASE_ID = "#apiTesting-headers";
		var ADD_HEADER = BASE_ID+"-addHeader";
		var SAVE_HEADER = BASE_ID+"-saveHeader";
		var HEADER_TABLE = BASE_ID +"-table";
		
		function HeadersView(){
			this.init = function(){
				var projectName = sessionStorage.projectName;
				listRest.getHeadersList(showHeader,console.log,projectName);
				$(ADD_HEADER).on("click",addHeader);
				$(HEADER_TABLE).on("click",".remove",removeHeader);
				$(SAVE_HEADER).on("click",saveHeader);
			}
			
			var showHeader = function(header){
				var trow = [];
				$.each(header,function(key,value){
					trow.push("<tr><td><input type='text' class='headerName form-control' value='"+key+"'/></td><td><input type='text' class='headerValue form-control'  value='"+value+"'/></td><td><input type='button' class='remove btn btn-danger' value='Remove'/></td></tr>");
				});
				$(HEADER_TABLE).find("tbody").html(trow);
			}
			
			var removeHeader = function(){
				this.closest("tr").remove();
			}
			
			var saveHeader = function(){
				var headers = {};
				$.each($(HEADER_TABLE).find("tbody").find("tr"),function(){
					var headerName = $(this).find(".headerName").val();
					var headerValue = $(this).find(".headerValue").val();
					headers[headerName] = headerValue;
				});
				console.log(headers);
				var data = {};
				data.projectName = sessionStorage.projectName;
				data.headers = headers;
				listRest.saveHeadersList(function(){},function(){},data)
			}
			
			
			var addHeader = function(){
				$(HEADER_TABLE).find("tbody").append("<tr><td><input type='text' class='headerName form-control'/></td><td><input type='text' class='headerValue form-control'/></td><td><input type='button' class='remove btn btn-danger' value='Remove'/></td></tr>");
			}
		};
		return new HeadersView();
	})();
	
	return headersView;
});