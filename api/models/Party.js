/**
 * RelatedParty.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type:'string',
      primaryKey:true,
      autoIncrement:true,
      unique:true
    },
    href:{
      type:'string'
    },
    name:{
      type:'string'
    },
    role:{
      type:'string'
    }
  },
  beforeCreate:function (party, cb) {
    party.href='http://privacy-orangegroup.rhcloud.com/party/';+href.id;
  }
};

