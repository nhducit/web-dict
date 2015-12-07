/**
 * Created by duc on 05/12/2015.
 */
angular.module('web-dict')
  .filter('trustAsHtml', ['$sce', function($sce) {
    var div = document.createElement('div');
    return function(text) {
      div.innerHTML = text;
      return $sce.trustAsHtml(div.textContent);
    };
  }]);