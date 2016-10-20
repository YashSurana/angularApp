var ctrl=angular.module("submitCtrl",["dataService"]);
ctrl.controller('submitCtrl',function(data,$scope){
	$scope.save=function(){
		var arr={};
		arr.name=angular.element(document.getElementById("name")).val();
		arr.pob=angular.element(document.getElementById("pob")).val();
		arr.edu=angular.element(document.getElementById("education")).val();
		data.capture(arr);
	}
});