/**
 * AgreementSpecification.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'ppAgreSpec',
  attributes: {
    id:{
      type:'string',
      primaryKey:true
    },
    name:{
      type:'string'
    },
    href:{
      type:'string'
    },
    description:{
      type:'string'
    }
  }
};

