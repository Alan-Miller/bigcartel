'use strict';

angular.module('bigCartelApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  });

  $urlRouterProvider.otherwise('/');
});
angular.module('bigCartelApp').controller('homeCtrl', function ($scope) {

  $scope.tourImages = ['tour1.jpg', 'tour2.jpg', 'tour3.jpg'];

  $scope.slide = function (direction) {
    if (direction === 'left') {
      var end = $scope.tourImages.pop();
      $scope.tourImages.unshift(end);
    }
    if (direction === 'right') {
      var _end = $scope.tourImages.shift();
      $scope.tourImages.push(_end);
    }
  };
});
$(document).ready(function () {

  var nav = $(".home__nav");
  var windowScroll = $(window).scrollTop();

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > windowScroll) nav.addClass('hidden');else nav.removeClass('hidden');
    windowScroll = $(window).scrollTop();
  });
});