var treeControllers = angular.module('treeControllers', ['canvasHandler']);

treeControllers.controller('trees',function($scope){
    $scope.title = "Tree Algorithms";
})

treeControllers.controller('BstView', ['$scope','canvasEl',function($scope, canvasEl){
    $scope.title = "Binary Search Tree";
    angular.element(document).ready(function () {
        canvasEl.printEl();
    });
    /*
    this is now semi working... it appearst that once inside the directive we are out of scope here.. see
    the docs on directives to possiby fix this by initalizing in the directiv (much better than my current method) and then
    adding it to the shared scope...  Yay? This will need to be done another day.
     */
}]);