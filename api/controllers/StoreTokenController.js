/**
 * StoreTokenController
 *
 * @description :: Server-side logic for managing storetokens
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'store': function (req, res) {

    var jsonBody = req.body;
    sails.log.debug(jsonBody.privacyProfileId);

    PartyPrivacyProfile.findOne({id: jsonBody.privacyProfileId}).populateAll().exec(function (err, partyPrivacy) {
      if (err) {
        sails.log.err('[Controller|StoreToken] - Error in privacy Profile Id');
        return res.serverError('not excepted Error');
      }

      if (!partyPrivacy) {
        sails.log.warn('[Controller|StoreToken] - the privacy Profile id is not exist');
        return res.json(404,{message:'This Profile ID is unavailable :' + jsonBody.privacyProfileId});
      }
      // get Id of Party
      var party_req_id=[];
      var party_req_profile_id=[];
      sails.log.info('[Controller|StoreToken] - the privacy Profile id ' + partyPrivacy.id);
      _.forEach(jsonBody.accesstoken, function (party_req) {
        party_req_id.push(party_req.id);
      });
      sails.log.info('[ Controller | StoreToken ] Related Party: '+party_req_id);
      _.forEach(partyPrivacy.partyPrivacyProfileCharValue, function (charValues) {
        _.forEach(charValues.relatedParty, function (party) {
          party_req_profile_id.push(party.id);
        });
      });

      sails.log.info('[ Controller| StoreToken ] Party ID: '+party_req_profile_id);
      var result=_.difference(party_req_id,party_req_profile_id);
      sails.log.info('Party not found'+result);
      if(result.length>0){
        return res.json(404,{message:'Party id not found : '+result});
      }else{
        StoreToken.create(jsonBody).exec(function (err, token) {
          if(err)
          {
            return res.json(503,err);
          }
          if(!token){
            return res.json(400,{});
          }
          if(token)
          return res.json(200,token);
        });
      }

    });
  }
};

