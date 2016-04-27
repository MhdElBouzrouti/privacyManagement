/**
 * PartyPrivacyProfile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      index: true
    },
    href: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    status: {
      type: 'string'
    },
    validFor: {
      model: 'timePeriod',
      required: true
    },
    agreedByParty: {
      model: 'Party',
      required: true
    },
    dateCreated: {
      type: 'datetime'
    },
    partyPrivacyProfileType: {
      model: 'partyPrivacyProfileType',
      required: true
    },
    partyPrivacyProfileCharValue: {
      collection: 'pPProfCharVal',
      required: true
    },
    agreement: {
      model: 'partyPrivacyAgreement',
      required: true,
    }
  },
  beforeCreate: function (privacyProfile, cb) {

    privacyProfile.dateCreated = new Date();
    privacyProfile.href = 'http://privacy-orangegroup.rhcloud.com/partyPrivacyProfile/' + privacyProfile.id;
    privacyProfile.status = 'created';
    cb();
  },
  afterCreate: function (privacyProfile, cb) {

    privacyProfile.href = 'http://privacy-orangegroup.rhcloud.com/partyPrivacyProfile/' + privacyProfile.id;

    PartyPrivacyProfile.update({id: privacyProfile.id}, {href: privacyProfile.href}).exec(function (err, profile) {
      if (err)
        cb(err);
      if(!profile)
        cb('ERROR')
      sails.log.info('[PartPrivacyProfile] :New Privacy Profile Created - ID: ' + profile.id );
      cb();
    });
  }
};
