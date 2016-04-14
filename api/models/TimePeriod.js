/**
 * TimePeriod.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    startDateTime: {
      type: 'string'
    },
    endDateTime: {
      type: 'string'
    },
    toJSON: function () {
      var timePeriod = this.toObject();
      delete timePeriod.id;
      return timePeriod;
    }
  }
};

