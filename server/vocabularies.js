Meteor.publish('vocabularies', function (options, searchString) {
  var firstMatchRegex = '^' + searchString || '' + '.*';
  var anyMatchRegex = '.*' + searchString || '' + '.*';

  //Counts.publish(this, 'numberOfVocabularies', Vocabularies.find({
  //
  //}), { noReady: true });

  return Vocabularies.find(
    {
      $or:[
        {
          'word' : { '$regex' : firstMatchRegex, '$options' : 'i' }
        }
        //,
        //{
        //  'word' : { '$regex' : anyMatchRegex, '$options' : 'i' }
        //}
      ]
    },
    options
  );
});

