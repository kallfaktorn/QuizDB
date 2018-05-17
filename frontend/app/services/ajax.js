import AjaxService from 'ember-ajax/services/ajax';
import Env from '../config/environment';

export default AjaxService.extend({
  host: Env.apiHost
});
