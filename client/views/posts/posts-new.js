'use strict';

angular.module('reddit')
.controller('NewPostCtrl', function($rootScope, $scope, Post, $state){

  $scope.addPost = function(post){
    post.userId = $scope.activeUser.mongoId;
    post.userName = $scope.activeUser.userName;
    Post.addPost(post)
    .then(function(){
      $state.go('profile');
    });
  };

});
