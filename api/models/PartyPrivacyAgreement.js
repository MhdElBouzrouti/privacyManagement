/**
 * PartyPrivacyAgreement.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'ppAgreement',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      index: true
    },
    name: {
      type: 'string'
    },
    version: {
      type: 'string'
    },
    documentNumber: {
      type: 'integer'
    },
    status: {
      type: 'string'
    },
    type: {
      type: 'string'
    }
    ,
    statementOfIntent: {
      type: 'string'
    },
    agreementPeriod: {
      type: 'json'
    },
    description: {
      type: 'string'
    },
    href: {
      type: 'string'
    },
    initialDate: {
      type: 'datetime'
    },
    agreementSpecification: {
      type: 'json'
    },
    agreementItem: {
      type: 'json'
    },
    engagedPartyRole: {
      type: 'json'
    },
    agreementAuthorization: {
      type: 'json'
    },
    characteristic: {
      type: 'json'
    },
    associatedAgreement: {
      type: 'json'
    },
    partyPrivacyProfile: {
      type: 'json'
    },
    partyPrivacyProfileCharValue: {
      type: 'json'
    }

  }
  ,
  afterCreate: function (agreement, cb) {

    agreement.href = 'http://privacy-orangegroup.rhcloud.com/partyPrivacyAgreement/' + agreement.id;

    PartyPrivacyAgreement.update({id: agreement.id}, {href: agreement.href}).exec(function (err, agr) {
      if (err)
        cb(err);
      if (!agr)
        return cb('Err')
      sails.log.info('[PartPrivacyProfileType] :New Privacy Profile Created - ID: ' + agr.id);
      cb();
    });
  }
};

