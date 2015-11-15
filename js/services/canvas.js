
var canvasHandler = angular.module('canvasHandler', []);
canvasHandler.factory('canvasEl', function(){
    var canvasEl = {};
    var element = $('canvas');
    canvasEl.printEl = function(){
        console.log(element.attr('height'));
    }
    return canvasEl;
});