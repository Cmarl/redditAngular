'use strict';

angular.module('reddit')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/home/home.html', controller: 'HomeCtrl'})
  .state('profile', {url: '/profile', templateUrl: '/views/users/profile.html', controller: 'ProfileCtrl'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('posts', {url: '/posts', templateUrl: '/views/posts/posts.html', abstract: true})
  .state('posts.new', {url: '/new', templateUrl: '/views/posts/posts-new.html', controller: 'NewPostCtrl'})
  .state('posts.edit', {url: '/{post}/edit', templateUrl: '/views/posts/posts-new.html', controller: 'EditPostCtrl'})
  .state('posts.show', {url: '/{postId}', templateUrl: '/views/posts/posts-show.html', controller: 'ShowPostCtrl'});
});
