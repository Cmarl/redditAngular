'use strict';

angular.module('reddit')
.factory('Post', function($rootScope, $http, nodeUrl){

  function Post(){
  }

  Post.destroy = function(post){
    return $http.delete(nodeUrl + '/posts/' + post._id);
  };

  Post.update = function(post){
    return $http.put(nodeUrl + '/posts/' + post._id, post);
  };

  Post.addPost = function(post){
    return $http.post(nodeUrl + '/posts', post);
  };

  Post.getPosts = function(userId, postId){
    if(postId){
      return $http.get(nodeUrl + '/posts/one/' + postId);
    }else if(userId){
      return $http.get(nodeUrl + '/posts/' + userId);
    }else{
      return $http.get(nodeUrl + '/posts');
    }
  };

  return Post;
});
