var ctrl=angular.module("viewCtrl",['dataService']);
ctrl.controller('viewCtrl',function(data,$scope,$window){
	$scope.persons=data.persons;
	$scope.track=function(i){
		data.index=i;
		$window.location.href = '#update';
	}
	$scope.delete=function(i){
		data.index=i;
		alert(i);
		data.persons.splice(i,1);
		$scope.persons=data.persons;
		//$window.location.href = '#delete';
	}
});