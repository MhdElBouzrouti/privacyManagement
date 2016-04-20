var request= require('supertest');

describe('PartyPrivacyProfileController',function () {
  describe('#find',function () {
    it('Should return all Profile',function (done) {
      request(sails.hooks.http.app)
        .get('/partyprivacyprofile')
        .expect(200,done);
    })
  })
});
