'use strict';

angular.module('bigCartelApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  });

  $urlRouterProvider.otherwise('/');
});
angular.module('bigCartelApp').controller('homeCtrl', function ($scope, $timeout) {

  var navWidth = 1240;

  $scope.tourImages = [{ url: './imgs/tour1.jpg' }, { url: './imgs/tour2.jpg' }, { url: './imgs/tour3.jpg' }];

  $scope.slideLeft = function (direction) {
    var newFirst = $scope.tourImages.pop();
    $scope.tourImages.unshift(newFirst);
  };

  $scope.slideRight = function (direction) {
    var newLast = $scope.tourImages.shift();
    $timeout(function (_) {
      $scope.tourImages.push(newLast);
    }, 200);
  };

  $scope.position = function (index) {
    return navWidth * index - navWidth + 'px';
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