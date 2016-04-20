/**
 * EnforcePrivacyController
 *
 * @description :: Server-side logic for managing enforceprivacies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'find': function (req, res) {
    // Get variables
    sails.log.info('Variables');
    sails.log.debug(req.allParams());
    var privacyProfileId = req.allParams().privacyProfileId;
    var requestingPartyId = req.allParams().requestingPartyId;
    var name = req.allParams().name;
    var privacyUsagePurpose = req.allParams().privacyUsagePurpose;

    // verification of variables

    if (!privacyProfileId)
      return res.json(400, {messages: 'The privacy Profile Id not defined'});
    if (!requestingPartyId)
      return res.json(400, {messages: 'The requesting Party Id not defined'});
    if (!name)
      return res.json(400, {messages: 'The name not defined'});
    if (!privacyUsagePurpose)
      return res.json(400, {messages: 'The Privacy Usage Purpose'});

    // initialization of conditions


    // Search privacy Profile

    PartyPrivacyProfile.findOne({id: privacyProfileId}).populateAll().exec(function (err, privacyProfile) {
      // verification of Result
      if (err) {
        return res.json(400, {error: 'This Profile is unavailable'});
      }
      if (!privacyProfile)
        return res.json(400, {error: 'This Profile is unavailable'});

      // Filter
      var filter = _.find(privacyProfile.partyPrivacyProfileCharValue, {name: name, privacyUsagePurpose: privacyUsagePurpose});
      if(!filter)
        return res.json(403,{message:'Party Privacy Characteristic (Name or Usage Purpose) is unavailable'})
      var party = _.find(filter.relatedParty, {id: requestingPartyId});
      if(!party)
        return res.json(400,{message:'Related Party'});
      StoreToken.findOne({privacyProfileId: privacyProfileId}).populateAll().exec(function (err, token) {
        sails.log.debug(token);
        var result = _.find(token.accessToken, {id: requestingPartyId});
        if(result.length)
          return res.json(403,{message:''});
        sails.log.debug(result);
        return res.json(200, {token: result.token});
      })

    });
  }
};
