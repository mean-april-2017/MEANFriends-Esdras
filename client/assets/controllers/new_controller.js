var app = angular.module("app");


console.log("We're Here!");
app.controller("newController", ["$scope", "friendsFactory", function($scope, friendsFactory){
      console.log("newController loaded");

      var self = this;

      self.newFriend ={};

      var index = function(){
        friendsFactory.index(function(returnedData){
          self.freinds = returnedData;
        })
      }

      self.create = function(){
        console.log("Create Function clicked!");

        if(!self.newFriend.first_name || !self.newFriend.last_name || !self.newFriend.birthday){
          console.log("required fields not present");
          return;
        }

        console.log("\n\nCREATE Step 1: The controller is calling the factory's create() function and passing a friend object and a callback:", self.newFriend)

        friendsFactory.create(self.newFriend, function(newFriendAfterServer){
        console.log("CREATE Step 5: The response data was sent back to the controller via a callback parameter:", newFriendAfterServer);

        self.createdFriend= newFriendAfterServer;

        console.log("CREATE Step 6: The data was then assigned to self/scope, so that the view will update with the new data.\n\n");

        });
      }
    }
  ]
);
