var app=angular.module("myForm",["ngRoute","submitCtrl","viewCtrl","updateCtrl"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/main",{
		templateUrl:"partials/main.htm",
		controller:"submitCtrl"
		})
	.when("/view",{
		templateUrl : "partials/view.htm",
		controller: "viewCtrl"
		})
	.when('/delete',{
		templateUrl: 'partials/delete.htm',
		controller: 'deleteCtrl'
		})
	.when('/update',{
		templateUrl: 'partials/update.htm',
		controller: 'updateCtrl'
		})
	.when("/",{
	templateUrl:"partials/main.htm",
	controller:"submitCtrl"
	})
	
});