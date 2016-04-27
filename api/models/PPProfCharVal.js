/**
 * PartyPrivacyProfileCharValue.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'ppProfCharVal',
  attributes: {
    id:{
      type:'integer',
      primaryKey:true,
      unique:true,
      autoIncrement:true,
      
    },
    name: {
      type: 'string'
    },
    value: {
      type: 'string'
    },
    relatedParty: {
      type:'json'
    },
    characteristicAgreement:{
      type:'json'
    },
    privacyUsagePurpose: {
      type: 'string'
    },
    validFor:{
      type:'json'
    }
  }
};

