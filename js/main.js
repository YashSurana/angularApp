var ctrl=angular.module("appctrl",[]);
ctrl.service('data',function(){
	this.persons=[];
	this.index;
	
	this.capture=function(arr){
		this.persons.push(arr);
		console.log(this.persons);
	}
});
ctrl.controller('submitCtrl',function(data,$scope){
	$scope.save=function(){
		var arr={};
		arr.name=angular.element(document.getElementById("name")).val();
		arr.pob=angular.element(document.getElementById("pob")).val();
		arr.edu=angular.element(document.getElementById("education")).val();
		data.capture(arr);
	}
});
ctrl.controller('viewCtrl',function(data,$scope,$window){
	$scope.persons=data.persons;
	$scope.track=function(i){
		data.index=i;
		$window.location.href = '#update';
	}
	$scope.track1=function(i){
		data.index=i;
		alert(i);
		data.persons.splice(i,1);
		$scope.persons=data.persons;
		//$window.location.href = '#delete';
	}
});
ctrl.controller('deleteCtrl',function(data,$scope){
		$scope.name=data.name[0];
		$scope.pob=data.pob[0];
		$scope.education=data.edu[0];
		$scope.remove=function(){
			data.name[0]="";
			$scope.name=data.name[0];
			data.pob[0]="";
			$scope.pob=data.pob[0];
			data.edu[0]="";
			$scope.education=data.edu[0];
		}
});
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