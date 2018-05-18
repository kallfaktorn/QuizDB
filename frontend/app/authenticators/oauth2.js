import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from '../config/environment';

const host = ENV.apiHost || '';
const namespace = ENV.apiNamespace;
const serverTokenEndpoint = [ host, namespace, 'token' ];

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: serverTokenEndpoint.join('/')
});
