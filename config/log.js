/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * http://sailsjs.org/#!/documentation/concepts/Logging
 */
var winston = require('winston');
require('winston-loggly');
var customLogger = new winston.Logger();

customLogger.add(winston.transports.Loggly, {
  token: "20dd6918-dc96-4f2c-801d-fbc3332d5e99",
  level:'verbose',
  subdomain: "Mdelbouzrouti",
  tags: ["PRIVACY-API"],
  proxy: process.env.http_proxy,
  json: true
});
customLogger.add(winston.transports.Console, {
  level: 'silly',
  colorize: true
});
module.exports.log = {

  /***************************************************************************
   *                                                                          *
   * Valid `level` configs: i.e. the minimum log level to capture with        *
   * sails.log.*()                                                            *
   *                                                                          *
   * The order of precedence for log levels from lowest to highest is:        *
   * silly, verbose, info, debug, warn, error                                 *
   *                                                                          *
   * You may also set the level to "silent" to suppress all logs.             *
   *                                                                          *
   ***************************************************************************/
  custom: customLogger,
  level: 'silly',
  inspect: false
};
