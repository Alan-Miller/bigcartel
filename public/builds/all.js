'use strict';

angular.module('bigCartelApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  });

  $urlRouterProvider.otherwise('/');
});
angular.module('bigCartelApp').controller('homeCtrl', function ($scope) {});
$(document).ready(function () {

  var nav = $(".home__nav");
  var scrollPosition = $(window).scrollTop();

  $(window).on('scroll', function () {

    if ($(window).scrollTop() > scrollPosition) {
      nav.addClass('hidden');
    } else nav.removeClass('hidden');

    scrollPosition = $(window).scrollTop();
  });
});