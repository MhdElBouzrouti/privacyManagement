/**
 * StoreTokenController
 *
 * @description :: Server-side logic for managing storetokens
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'store':function (req,res) {
    var jsonBody=req.body;
    sails.log.debug(jsonBody.privacyProfileId);
    PartyPrivacyProfile.findOne({id:jsonBody.privacyProfileId}).populateAll().exec(function(err,partyPrivacy){
      if(err){
        sails.log.err('[Controller|StoreToken] - Error in privacy Profile Id')
        return res.serverError('not excepted Error');
      }
      if(!partyPrivacy) {
        sails.log.warn('[Controller|StoreToken] - the privacy Profile id is not exist');
        return res.notFound('This Profile is unavailable');
      }
      // partyPrivacy Profile
      sails.log.info('[Controller|StoreToken] - the privacy Profile id ' + partyPrivacy.id);
      _.each(jsonBody.accesstoken,function (values) {
        sails.log.debug(values);
      });

    });
  }
};

