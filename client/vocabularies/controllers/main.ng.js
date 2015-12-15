angular.module('web-dict')
  .controller('MainController', function ($scope, $meteor, $state, $stateParams, ttsEngine) {
    $scope.vm = {};
    $scope.vm.keyWord = $stateParams.word || '';
    $scope.vm.limit = 10;
    var _ttsEngine = ttsEngine.build();
    var VOCABULARIES_COLLECTION= 'vocabularies';
    //
    $meteor.autorun($scope, function(){
      $meteor.subscribe(
        VOCABULARIES_COLLECTION,
        {
          limit: /*$scope.getReactively('vm.limit') ||*/ 10
        },
        $scope.getReactively('vm.keyWord')
      ).then(function(){
        //
        $scope.vocabularies = $meteor.collection(function() {
          return Vocabularies.find({});
        });
        console.log($scope.vocabularies);
        $scope.vocabulariesCount = $meteor.object(Counts ,'numberOfVocabularies', false);
      });
    });
    $scope.vm.goToState = function goToState(word){
      $state.go('dictionary', {word: word});
    };
    $scope.vm.goToStateByVocabulary = function goToStateByVocabulary(vocabulary){
      var word = (vocabulary && vocabulary.word) || '';
      $scope.vm.goToState(word);
    };
    $scope.vm.wordClick = function(vocabulary){
      $scope.vm.goToStateByVocabulary(vocabulary);
    };
    $scope.vm.speak = function(word){
      _ttsEngine.speak(word);
    };
    if($scope.vm.keyWord){
      $scope.vm.speak($scope.vm.keyWord)
    }
  });