/**
 * PartyPrivacyProfileType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'ppProfType',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      index: true
    },
    name: {
      type: 'string'
    },
    href: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    lastUpdate: {
      type: 'datetime'
    },
    version: {
      type: 'string'
    },
    lifecycleStatus: {
      type: 'string'
    },
    validFor: {
      type: 'json'
    },
    relatedParty: {
      type: 'json'
    },
    applicableRole: {
      type: 'json'
    },
    partyPrivacyProfileTypeCharacteristic: {
      type: 'json'
    }
  },
  afterCreate: function (privacyProfileType, cb) {
    privacyProfileType.lastUpdate = new Date();
    privacyProfileType.href = 'http://privacy-orangegroup.rhcloud.com/partyPrivacyProfileType/' + privacyProfileType.id;

    PartyPrivacyProfileType.update({id: privacyProfileType.id}, {href: privacyProfileType.href}).exec(function (err, profile) {
      if (err)
        cb(err);
      if (!profile)
        return cb('Error');
      sails.log.info('[PartPrivacyProfileType] :New Privacy Profile Created - ID: ' + profile.id);
      cb();
    });
  }
};

