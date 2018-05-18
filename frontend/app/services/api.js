/*import Service from '@ember/service';

export default Service.extend({
});
*/
/*
import AjaxService from 'ember-ajax/services/ajax';
import ENV from '../config/environment';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default AjaxService.extend(AuthenticatedAjaxMixin, {
  session: service(),
  host: ENV.apiHost,
  authorizer: 'authorizer:token',
  headers: computed('session.authToken', {
    get() {
       const authorizer = this.get('authorizer');
       let headers = {};
       this.get('session').authorize(authorizer, (headerName, headerValue) => {
         headers[headerName] = headerValue;
       });
       return headers;
    }
  }),
  request() {
    return this._super(...arguments).catch(error => {
      if (isUnauthorizedError(error)) {
        this.get('session').invalidate();
      }
      throw error;
    });
  }
});
*/
