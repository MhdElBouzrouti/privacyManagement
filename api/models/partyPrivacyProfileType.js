/**
 * PartyPrivacyProfileType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'ppProfType',
  attributes: {
    id:{
      type:'integer',
      primaryKey:true,
      autoIncrement: true,
      index: true
    },
    name:{
      type:'string'
    },
    href:{
      type:'string'
    },
    description:{
      type:'string'
    },
    lastUpdate:{
      type:'datetime'
    },
    version:{
      type:'string'
    },
    lifecycleStatus:{
      type:'string'
    },
    validFor:{
      model:'timePeriod'
    },
    relatedParty:{
      collection:'party'
    },
    applicableRole:{
      collection:'role'
    },
    partyPrProfTypChara:{
      collection:'pPProfTypChar'
    }
  },
  beforeCreate:function (privacyProfileType, cb) {
    privacyProfileType.lastUpdate=new Date();
    privacyProfileType.href='http://privacy-orangegroup.rhcloud.com/partyPrivacyProfileType/'+privacyProfileType.id;
    cb();
  }
};

