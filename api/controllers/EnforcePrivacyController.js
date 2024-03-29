/**
 * EnforcePrivacyController
 *
 * @description :: Server-side logic for managing enforceprivacies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'find': function (req, res) {
    // Debug information

    // get all variables from url

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

      if (err)
        return res.json(400, {error: 'This Profile is unavailable'});

      if (!privacyProfile)
        return res.json(400, {error: 'This Profile is unavailable'});

      // Find by privacyUsagePurpose and name

      var filter = _.find(privacyProfile.partyPrivacyProfileCharValue, {
        name: name,
        privacyUsagePurpose: privacyUsagePurpose
      });

      // verification of result od search
      if (!filter)
        return res.json(403, {message: 'Party Privacy Characteristic (Name or Usage Purpose) does not match'});

      // find related party

      var party = _.find(filter.relatedParty, {id: requestingPartyId});

      // verification of result Party

      if (!party)
        return res.json(400, {message: 'Related Party does not match'});
      var token = [];
      // find the token
      StoreToken.find({privacyProfileId: privacyProfileId}).populateAll().exec(function (err, storetoken) {
        if (err)
          return res.json(400, {message: err});
        if (!storetoken)
          return res.json(400, {message: ''});
        _.forEach(storetoken, function (atk) {
          _.forEach(atk.accessToken, function (tk) {
            if (tk.id === requestingPartyId)
              token.push({token: tk.token, id: tk.id});
          });
        });
        sails.log.info(storetoken);
        if (_.isEmpty(token))
          return res.json(400, {message: 'not found'});
        return res.json(token);
        /*var result = _.find(token.accessToken, {id: requestingPartyId});
         sails.log.debug(result);
         if (!result)
         return res.json(403, {message: ''});

         sails.log.debug(result);
         return res.json(200, {token: result.token});
         }*/
      });

    });
  }

};
