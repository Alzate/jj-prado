
angular.module('starter.controllers')

.controller('TiendaCtrl', function($scope) {
  var carnes = new Product('Carnes frescas', 'assets/img/bistec.jpg', 'De primera');
  var embutidos = new Product('Elaborados y embutidos', 'assets/img/chorizo.jpg', 'Embutidos de la casa');
  var fiambres = new Product('Fiambres', 'assets/img/queso.jpg', 'Quesos de cabra o vaca, curados');
  $scope.products = [carnes, embutidos, fiambres];
});

var Product = function(title, image, description) {
  this.title = title;
  this.image = image;
  this.description = description;
};
