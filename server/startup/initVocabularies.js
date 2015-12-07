/**
 * Created by duc on 03/12/2015.
 */
Meteor.startup(function () {
  //console.log('startup', Vocabularies.find({}).count());
  var count = Vocabularies.find({}).count();

  //console.log('starup inside');
  console.log('count', count);
  if(count < 139205){
    Vocabularies.remove({});
  }
  if(!count){
    var _dictData = JSON.parse(Assets.getText('free-en-vn.json'));
    if(_dictData && _.isArray(_dictData)){
      console.log('importing data');
      _.forEach(_dictData, function(item){
        Vocabularies.insert({word: item.word, definition: item.definition});
      });
      console.log('import complete!');
    }
  }
});
