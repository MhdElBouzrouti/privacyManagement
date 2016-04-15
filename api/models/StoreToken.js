/**
 * StoreToken.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    privacyProfileId:{
      type:'integer',
      required:true
    },
    accessToken:{
      collection:'accessToken',
      required:true
    }
  },
  beforeCreate:function (storeToken, cb) {
    PartyPrivacyProfile.findOne({id:storeToken.privacyProfileId}).exec(function(err,partyPrivacyProfile){
      if(err)
        return cb(err);
      if (!partyPrivacyProfile)
        return cb('This Profile is unavailable');
      _.each(partyPrivacyProfile.accessToken,function (values) {
        console.log(values);
      });
      cb();
    });

  }
};

