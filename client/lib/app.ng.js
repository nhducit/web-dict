angular.module('hd-component',[
  'tts-engine'
]);

angular.module('web-dict',[
  'angular-meteor',
  'hd-component',
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