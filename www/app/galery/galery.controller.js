
angular.module('starter.controllers')

.controller('GaleryCtrl', function($scope, $ionicSlideBoxDelegate) {
  $scope.images = [new ImageSlide(null, 'assets/img/bistec.jpg'),new ImageSlide(null, 'assets/img/careta.jpg'), new ImageSlide(null, 'assets/img/chorizo.jpg'), new ImageSlide(null, 'assets/img/entrecot.jpg')
                   new ImageSlide(null, 'assets/img/panceta.jpg'), new ImageSlide(null, 'assets/img/pollo.jpg'), new ImageSlide(null, 'assets/img/queso.jpg'), new ImageSlide(null, 'assets/img/quesocurado.jpg')];
  $ionicSlideBoxDelegate.update();
});

var ImageSlide = function(title, path){
  this.title = title;
  this.path = path;
};
