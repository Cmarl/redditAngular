'use strict';

angular.module('reddit')
.controller('ProfileCtrl', function($rootScope, $scope, $state, $window, User, Post){
  User.getProfile()
  .then(function(response){
    $scope.user = response.data[0];
    console.log(response.data[0]);
    $rootScope.activeUser.userName = response.data[0].handle;
    console.log($rootScope.activeUser.userName);
    Post.getPosts($scope.activeUser.mongoId)
    .then(function(response){
      $scope.posts = response.data;
      $scope.posts.forEach(function(post){
        post.tags = post.tags.split(',');
      });
    });
  });

  $scope.edit = function(post){
    $state.go('posts.edit', {post: post._id});
  };

  $scope.destroy = function(post){
    Post.destroy(post)
    .then(function(response){
      console.log(response.data);
      $scope.posts = $window._.remove($scope.posts, function(p){
        return p._id !== response.data._id;
      });
    });
  };

  $scope.update = function(user){
    User.update(user)
    .then(function(response){
      console.log(response);
        $window.swal({title: 'Aww Yeaa', text: 'Profile Updated!', type: 'success', timer: 1000, showConfirmButton: true});
    });
  };

  $scope.show = function(post){
    $state.go('posts.show',{postId: post._id});
};

});
