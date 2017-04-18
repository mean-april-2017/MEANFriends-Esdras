console.log("Friends Factory");
app.factory("friendsFactory", ["$http", function($http){
  var friends= [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend, callback){
      console.log("CREATE Step 2: A request was made to your server to POST /friends from your factory with the following data: ", newfriend);

      $http.post("/friends", newfriend).then(function(returned_data){

        console.log("CREATE Step 3: Your server has completed the request (wih a response) and gave you back this data:", returned_data);

        friend = returned_data.data;

        console.log("CREATE Step 4: The data from the server was set to a private variable to store in the factory", friend);

        if(typeof(callback) == "function"){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(editedFriend, callback){
      $http
        .put("/friends/" + editedFriend._id, {first_name: editedFriend.first_name, last_name: editedFriend.last_name, birthday: editedFriend.birthday})
        .then(function(returned_data){

          friends = returned_data.data;

          if(typeof(callback) == "function"){
            callback(friends);
          }
        });
    };
    this.index = function(callback){
      $http.get("/friends").then(function(returned_data){
        friends = returned_data.data;
        callback(friends);
      });
    };
    this.delete = function(deleted_friend, callback){
      $http.delete("/friends/" + deleted_friend).then(function(return_data){
        callback(return_data)
      });

    };
    this.show = function(){

    };
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(friendId, callback){
      $http.get("/friends/" + friendId).then(function(returned_data){
        friend = returned_data.data;
        console.log(friend,"***");
        callback(friend);
      })
    };
    this.addFriend = function(item){
      friends.push(item);
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}])
