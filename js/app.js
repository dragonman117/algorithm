var algorithms = angular.module("algorithms",[
    'ngRoute',
    'treeControllers',
]);

algorithms.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.when('/bst', {
            templateUrl: 'views/trees/bst.html',
            controller: 'BstView'
        }).when('/trees', {
            templateUrl: 'views/trees/home.html',
            controller: 'trees'
        }).otherwise({
            redirectTo: '/trees'
        });
    }
]);

algorithms.directive('navBar', function(){
    return {
        restrict: 'E',
        templateUrl: 'partials/shared/navBar.html'
    };
});

//Requres that it is inside a element with id: canvasContainer, js is handled in element
algorithms.directive('customCanvas', function(){
    return {
        restrict: 'E',
        templateUrl: 'partials/shared/canvas.html'
    }
});