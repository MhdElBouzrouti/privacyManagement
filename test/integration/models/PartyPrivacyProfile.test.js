var assert = require('chai').assert;

describe('PartyPrivacyProfileModel', function () {

  describe('#find', function () {

    it('the result of find should be an Array', function (done) {

      PartyPrivacyProfile.find().then(function (results) {
        assert.isArray(results, 'this is not Array');
        done();
      }).catch(done);
    })

  });

});
