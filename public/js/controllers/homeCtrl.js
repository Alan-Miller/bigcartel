angular.module('bigCartelApp').controller('homeCtrl', function($scope) {
  
  $scope.tourImages = [
    {id: 1, url: 'tour1.jpg'},
    {id: 2, url: 'tour2.jpg'},
    {id: 3, url: 'tour3.jpg'}
  ]

  $scope.slide = direction => {
    if (direction === 'left') {
      const end = $scope.tourImages.pop();
      $scope.tourImages.unshift(end);
    }
    if (direction === 'right') {
      const end = $scope.tourImages.shift();
      $scope.tourImages.push(end);
    }
  }

});