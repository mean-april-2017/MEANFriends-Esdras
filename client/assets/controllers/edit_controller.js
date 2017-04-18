var app = angular.module("app");

app.controller("editController",
[
  "$scope",
  "$routeParams",
  "friendsFactory",
  function($scope, $routeParams, friendsFactory){
    console.log("editController loaded")
    console.log("$routeParams currently look like this:", $routeParams);
    var self = this;
    self.currentFriend ={};

    var findFriend = function(){
      friendsFactory.getFriend($routeParams._id, function(factoryData){
        console.log("looking for friend with id of:", $routeParams._id)
        self.currentFriend = factoryData;
        console.log(factoryData)
      });
    }
    findFriend();

    self.update = function(){
      if(!self.currentFriend.first_name || !self.currentFriend.last_name){
        console.log("Not going to factory because missing name and/or favorite language is empty string");
        return;
      }

      friendsFactory.update(self.currentFriend, function(return_data){
        console.log(return_data);
      })
    }
    
  }
]);
