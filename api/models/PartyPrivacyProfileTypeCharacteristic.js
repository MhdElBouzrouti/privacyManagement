/**
 * PartyPrivacyProfileTypeCharacteristic.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      primaryKey: true
    },
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    criticalityLevel: {
      type: 'string',
      enum: ['low', 'high']
    },
    privacyType: {
      type: 'string'
    },
    privacyUsagePurpose: {
      type: 'string'
    },
    validFor: {
      type: 'json'
    },
    partyPrivacyProfileTypeCharValue: {
      type: 'json'
    },
    relatedParty: {
      type: 'json'
    }
  }
};

