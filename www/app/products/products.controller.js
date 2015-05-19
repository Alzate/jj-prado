
angular.module('starter.controllers')

.controller('ProductsCtrl', function($scope) {
  var bistec = new Product('bistec', 'assets/img/bistec.jpg', 'Lorem ipsum dolor');
  var careta = new Product('careta', 'assets/img/careta.jpg', 'Lorem ipsum dolor');
  var chorizo = new Product('chorizo', 'assets/img/chorizo.jpg', 'Lorem ipsum dolor');
  $scope.products = [bistec, careta, chorizo];
});

var Product = function(title, image, description) {
  this.title = title;
  this.image = image;
  this.description = description;
};
