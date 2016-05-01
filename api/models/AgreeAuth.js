/**
 * AgreementAuthorization.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'agreeAuthoriz',
  attributes: {
    state:{
      type:'string'
    },
    signatureRepresentation:{
      type:'string'
    },
    date:{
      type:'datetime'
    }

  }
};

