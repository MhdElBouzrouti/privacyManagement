/**
 * PartyPrivacyAgreement.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type:'string',
      primaryKey:true
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
      model:'partyPrivacyAgreementSpecification'
    },
    agreementItem:{
      collection:'agreementItem'
    },
    engagedPartyRole:{
      collection:'party'
    },
    agreementAuthorization:{
      collection:'agreementAuthorization'
    },
    characteristic:{
      collection:'characteristic'
    },
    associatedAgreement:{
      collection:'partyPrivacyAgreement'
    },
    partyPrivacyProfile:{
      collection:'partyPrivacyProfile'
    },
    partyPrivacyProfileCharValue:{
      collection:'partyPrivacyProfileCharValue'
    }

  }
  ,
  beforeCreate:function (agreement,cb) {
    agreement.href='http://privacy-orangegroup.rhcloud.com/partyPrivacyAgreement/'+agreement.id;
    cb();
  }
};

