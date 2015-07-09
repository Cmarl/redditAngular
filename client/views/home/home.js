'use strict';

angular.module('reddit')
.controller('HomeCtrl', function($scope, Post, $state){
  Post.getPosts()
  .then(function(response){
    $scope.posts = response.data;
    $scope.posts.forEach(function(post){
      post.tags = post.tags.split(',');
    });
  });

  $scope.upVote = function(post){
    if(post.voters.indexOf($scope.activeUser.mongoId)){
      post.votes += 1;
      post.voters.push($scope.activeUser.mongoId);
      Post.update(post);
    }
  };

  $scope.downVote = function(post){
    if(post.voters.indexOf($scope.activeUser.mongoId)){
      post.votes -= 1;
      post.voters.push($scope.activeUser.mongoId);
      Post.update(post);
    }
  };

  $scope.show = function(post){
    $state.go('posts.show',{postId: post._id});
  };

});
