var assert = require('chai').assert;
//var partyProfileExample = require('./PartyPrivacyModel');

describe('PartyPrivacyProfileModel', function () {

  describe('#find', function () {

    it('the result of find action should be an Array', function (done) {

      PartyPrivacyProfile.find().then(function (results) {
        assert.isArray(results, 'this is not Array');
        done();
      }).catch(done);
    });
   /* describe('#Create', function () {
      it('href of party privacy profile are changed', function (done) {
        PartyPrivacyProfile.create(partyProfileExample).then(function (partyprofile) {
          assert.changes(partyprofile, partyProfileExample, 'the href not changed');
          done();
        }).catch(done);
      });
    });*/
  });

});
