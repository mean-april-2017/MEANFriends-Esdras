var app = angular.module("app");

console.log("This is our home page")

app.controller("indexController", ["$scope", "$routeParams", "friendsFactory", function($scope, $routeParams, friendsFactory){
  console.log("indexController loaded")
  var self = this;

  var index = function(){
    friendsFactory.index(function(returnedData){
      self.friends = returnedData;
      console.log(self.friends)
    })
  }

  index();
  self.delete = function(id){
    console.log(id)
    friendsFactory.delete(id, function(return_data){
      console.log(return_data);
    })
  }


}
]);
