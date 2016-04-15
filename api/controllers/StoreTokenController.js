/**
 * StoreTokenController
 *
 * @description :: Server-side logic for managing storetokens
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'creater':function (req,res) {
    var params=req.allParams();
    PartyPrivacyProfile.findOne({id:params.privacyProfileId}).exec(function(err,partyPrivacy){
      if(err){
        return res.serverError('not excepted Error');
      }
      if(!partyPrivacy){
        return res.notFound('This Profile is unavailable');
      }
    });
  }
};

