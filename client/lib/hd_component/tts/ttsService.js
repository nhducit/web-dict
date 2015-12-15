/**
 * Created by duc on 07/12/2015.
 */
(function(){
  angular.module('tts-engine', [])
    .factory('ttsEngine', function ($window, $log) {
      var service = {};
      service.build = function (config){
        var ttsEngine = {};
        var msg = new SpeechSynthesisUtterance();
        var voices = $window.speechSynthesis.getVoices();

        ttsEngine.speak = function speak(string){
          msg.text = string;
          speechSynthesis.speak(msg);
        };
        ttsEngine.changeConfig = function(config){
          var _config =  config || {};
          msg.voice = _config.voice || voices[1]; // Note: some voices don't support altering params
          msg.voiceURI = _config.voiceURI || 'native';
          msg.volume = _config.volume|| 1; // 0 to 1
          msg.rate = _config.rate || 1; // 0.1 to 10
          msg.pitch = _config.pitch || 0; //0 to 2
          msg.text = '';
          msg.lang = _config.language|| 'en-US';
        };
        /**
         * change tts engine message and voice
         * @param {string} language
         */
        ttsEngine.changeLanguage = function changeLanguage(language){
          if(!language){
            $log.debug('ttsEngine.changeLanguage argument is undefined');
          }
          var _voice = _.find(voices, function(voice){
            return voice.lang === language;
          });

          if(_voice){
            msg.lang = language;
            msg.voice = _voice;
          }else{
            $log.debug(language, ' is unsupported');
          }
        };

        ttsEngine.changeConfig(config);
        return ttsEngine;
      };
      return service;
    });
})();