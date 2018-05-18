// app/adapters/application.js
import DS from 'ember-data';
import ENV from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.apiHost,
  namespace: ENV.apiNamespace,
  authorizer: 'authorizer:application'
});
