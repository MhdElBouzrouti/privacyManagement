/**
 * StoreToken.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      index: true
    },
    privacyProfileId:{
      type:'integer',
      required:true
    },
    accessToken:{
     type:'json'
    }
  }
};

