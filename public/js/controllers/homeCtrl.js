angular.module('bigCartelApp').controller('homeCtrl', function($scope, $timeout) {

  const navWidth = 1240;
  
  $scope.tourImages = [
    {url: './imgs/tour3.jpg'}, // first indexed image is set to left of default image
    {url: './imgs/tour1.jpg'}, // default displayed image 
    {url: './imgs/tour2.jpg'}  // last indexed image is set to right of default image
  ]
  
  $scope.position = index => {
    return navWidth * index - navWidth + 'px'
  }

  $scope.slideLeft = _ => {
    const newFirst = $scope.tourImages.pop();
    $scope.tourImages.unshift(newFirst);
  }
  $scope.slideRight = _ => {
    const newLast = $scope.tourImages.shift();
    $timeout( _ => { $scope.tourImages.push(newLast); }, 200);
  }

});