'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'eak',
    environment,
    rootURL: '/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.contentSecurityPolicy = {
    "base-uri": "'self'",
    "connect-src": "'self'",
    "default-src": "'self'",
    "font-src": "'self'",
    "frame-ancestors": "'self'",
    "frame-src": "'self'",
    "img-src": "'self'",
    "manifest-src": "'self'",
    "media-src": "'self'",
    "object-src": "'self'",
    "script-src": "'self'",
    "style-src": "'self'"
  };



  if (environment === 'development') {
    console.log('envirionemnt dev')
    console.log(environment)
    ENV.apiHost = 'http://localhost:3000';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    console.log('envirionemnt test')
    console.log(environment)

    ENV.apiHost = 'http://localhost:3000';
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  ENV.contentSecurityPolicy['connect-src'] += ' ' + ENV.apiHost;

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
