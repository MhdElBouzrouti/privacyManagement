/**
 * PartyPrivacyAgreement.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'ppAgreement',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      index: true
    },
    name:{
      type:'string'
    },
    version:{
      type:'string'
    },
    documentNumber:{
      type:'integer'
    },
    status:{
      type:'string'
    },
    type:{
      type:'string'
    }
    ,
    statementOfIntent:{
      type:'string'
    },
    agreementPeriod:{
      model:'timePeriod'
    },
    description:{
      type:'string'
    },
    href:{
      type:'string'
    },
    initialDate:{
      type:'datetime'
    },
    agreementSpecification:{
      model:'pPAgreeSpec'
    },
    agreementItem:{
      type:'json'
    },
    engagedPartyRole:{
      type:'json'
    },
    agreementAuthorization:{
      type:'json'
    },
    characteristic:{
      type:'json'
    },
    associatedAgreement:{
      type:'json'
    },
    partyPrivacyProfile:{
      type:'json'
    },
    partyPrivacyProfileCharValue:{
      type:'json'
    }

  }
  ,
  afterCreate:function (agreement,cb) {
    agreement.href='http://privacy-orangegroup.rhcloud.com/partyPrivacyAgreement/'+agreement.id;
    cb();
  }
};

