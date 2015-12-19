Meteor.publish('vocabularies', function (options, searchString) {
  var firstMatchRegex = '^' + searchString || '' + '.*';
  var anyMatchRegex = '.*' + searchString || '' + '.*';

  //Counts.publish(this, 'numberOfVocabularies', Vocabularies.find({
  //
  //}), { noReady: true });
  var selector = {
    $or:[
      {
        'word' : { '$regex' : firstMatchRegex, '$options' : 'i' }
      }
      //,
      //{
      //  'word' : { '$regex' : anyMatchRegex, '$options' : 'i' }
      //}
    ]
  };
  var cursor = Vocabularies.find(
    {},
    options
  );

  console.log(firstMatchRegex);
  return cursor;
});

