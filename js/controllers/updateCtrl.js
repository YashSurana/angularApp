var ctrl=angular.module("updateCtrl",['dataService']);
ctrl.controller('updateCtrl',function(data,$scope){
	$scope.name=data.persons[data.index].name;
	$scope.pob=data.persons[data.index].pob;
	$scope.edu=data.persons[data.index].edu;
	
	var arr={};
	
	$scope.update=function(){
		data.persons[data.index].name=angular.element(document.getElementById("name")).val();
		data.persons[data.index].pob=angular.element(document.getElementById("pob")).val();
		data.persons[data.index].edu=angular.element(document.getElementById("education")).val();
	}
});