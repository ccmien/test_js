app.controller('MainController', 
              ['$scope', function($scope){
                $scope.title = 'Top Sellers';
                $scope.promo = 'Sale!'
                $scope.product = { 
  name: 'The Book of Trees', 
  price: 19 
}
              }]);