'use strict';

angular.module('reddit')
.factory('User', function($rootScope, $http, nodeUrl){

  function User(){
  }

  User.initialize = function(){
    return $http.post(nodeUrl + '/users');
  };

  User.getProfile = function(){
    return $http.get(nodeUrl + '/users/' + $rootScope.activeUser.mongoId);
  };


  User.update = function(user){
    return $http.put(nodeUrl + '/users/' + $rootScope.activeUser.mongoId, user);
  };

  User.oauth = function(provider){
    return $rootScope.afAuth.$authWithOAuthPopup(provider);
  };

  User.register = function(user){
    return $rootScope.afAuth.$createUser(user);
  };

  User.login = function(user){
    return $rootScope.afAuth.$authWithPassword(user);
  };

  User.logout = function(){
    return $rootScope.afAuth.$unauth();
  };

  return User;
});
