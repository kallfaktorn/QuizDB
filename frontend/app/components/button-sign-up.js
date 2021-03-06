import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  session: service(),

  actions: {
    signUp: function() {
      this.get('router').transitionTo('sign-up');
    }
  }
});
