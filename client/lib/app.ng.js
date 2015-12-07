angular.module('web-dict',[
  'angular-meteor',
  'ui.router'
]);
function onReady() {
  angular.bootstrap(document, ['web-dict'], {
    strictDi: true
  });
}

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);