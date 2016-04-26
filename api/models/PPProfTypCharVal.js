/**
 * PartyPrivacyProfileTypeCharValue.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'pppTypeCharVal',
  attributes: {
    value:{
      type:'string'
    },
    valueType:{
      type:'string'
    },
    default:{
      type:'boolean'
    },
    validityDuration:{
      type:'string'
    },
    unitOfMeasure:{
      type:'string'
    },
    fromValue:{
      type:'string'
    },
    toValue:{
      type:'string'
    },
    rangeInterval:{
      type:'string'
    },
    toJSON: function () {
      var partyPrivacyProfileTypeCharValue = this.toObject();
      delete partyPrivacyProfileTypeCharValue.id;
      return partyPrivacyProfileTypeCharValue;
    }

  }
};

