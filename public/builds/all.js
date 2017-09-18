'use strict';

angular.module('bigCartelApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  });

  $urlRouterProvider.otherwise('/');
});
$(document).ready(function () {

  // setTimeout(function() {
  $(".home__nav").addClass("hidden");
  // }, 500);

  // $('*').addClass('hidden')

  // setTimeout( _ => {
  //   scrollPosition = $(window).scrollTop();
  //   console.log('pos', scrollPosition)
  // }, 200);

  // $(window).on('scroll', function() {
  //   console.log('pos', scrollPosition)

  //   if ($(window).scrollTop() !== 200) {
  //     $('#home__nav').addClass('hidden');
  //     console.log('show!')
  //   }
  //   else nav.addClass('hidden');
  // })
});
angular.module('bigCartelApp').controller('homeCtrl', function ($scope) {});