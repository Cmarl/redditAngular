'use strict';

angular.module('reddit')
.controller('EditPostCtrl', function($scope, Post, $state){
  $scope.editing = true;
  Post.getPosts($scope.activeUser.mongoId, $state.params.post)
  .then(function(response){
    $scope.post = response.data;
  });

  $scope.addPost = function(post){
    Post.update(post)
    .then(function(){
      $state.go('profile');
    });
  };
});
