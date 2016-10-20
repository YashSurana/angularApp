var serv=angular.module('dataService',[]);
serv.service('data',function(){
	this.persons=[];
	this.index;
	
	this.capture=function(arr){
		this.persons.push(arr);
		console.log(this.persons);
	}
});