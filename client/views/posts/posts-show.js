'use strict';

angular.module('reddit')
.controller('ShowPostCtrl', function($scope, Post, $state){
  Post.getPosts(null, $state.params.postId)
  .then(function(response){
    $scope.post = response.data;
    $scope.post.tags = $scope.post.tags.split(',');
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

  $scope.addComment = function(comment, post){
    comment.userName = $scope.activeUser.userName;
    comment.userId = $scope.activeUser.mongoId;
    post.comments.push(comment);
    Post.update(post)
    .then(function(response){
      $scope.post = response.data;
    });
  };
});
