(function(){
  'use strict';
  angular.module('web-dict')
    .controller('MainController', function ($scope, $meteor, $state, $stateParams, ttsEngine, $reactive) {
      /*jshint validthis:true*/
      var vm = this;
      //var reactiveContext =
      $reactive(vm).attach($scope);
      //vm.keyWord = $stateParams.word || '';
      vm.keyWord = $stateParams.word || '';
      vm.limit = 10;
      var _ttsEngine = ttsEngine.build();
      var VOCABULARIES_COLLECTION= 'vocabularies';
      //
      //$meteor.autorun($scope, function(){
      //  $meteor.subscribe(
      //    VOCABULARIES_COLLECTION,
      //    {
      //      limit: /*$scope.getReactively('vm.limit') ||*/ 10
      //    },
      //    $scope.getReactively('vm.keyWord')
      //  ).then(function(){
      //    //
      //    $scope.vocabularies = $meteor.collection(function() {
      //      return Vocabularies.find({});
      //    });
      //    console.log($scope.vocabularies);
      //    $scope.vocabulariesCount = $meteor.object(Counts ,'numberOfVocabularies', false);
      //  });
      //});

      vm.subscribe(VOCABULARIES_COLLECTION, function(){
        //return [
        //  {
        //    limit: 10
        //    //sort: ''
        //  },
        //  vm.keyWord
        //];
      });
      vm.helpers({
        vocabularies : function () {
          var result = Vocabularies.find({});
          console.log('find voca', result);
          return result;
        },
        keyWord: ''
      });


      vm.goToState = function goToState(word){
        $state.go('dictionary', {word: word});
      };
      vm.goToStateByVocabulary = function goToStateByVocabulary(vocabulary){
        var word = (vocabulary && vocabulary.word) || '';
        vm.goToState(word);
      };
      vm.wordClick = function(vocabulary){
        vm.goToStateByVocabulary(vocabulary);
      };
      vm.speak = function(word){
        _ttsEngine.speak(word);
      };
      if(vm.keyWord){
        vm.speak(vm.keyWord);
      }

      vm.lookup = function lookup (keyWord){
        console.log(keyWord);
      };
    });
})();