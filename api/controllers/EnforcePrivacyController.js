/**
 * EnforcePrivacyController
 *
 * @description :: Server-side logic for managing enforceprivacies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'find': function (req, res) {
    var privacyProfileId = req.allParams().privacyProfileId;
    if (!privacyProfileId)
      return res.json(400, {messages: 'The privacy Profile Id not defined'});

    StoreToken.findOne({privacyProfileId: privacyProfileId}).populateAll().exec(function (err, storeToken) {
      if (err)
        return res.json(500, {message: 'This Profile is unavailable'});
      if (!storeToken) {
        return res.json(500, {message: 'This Profile is unavailable'});
      }
      return res.json(storeToken);
    });
  }
};

