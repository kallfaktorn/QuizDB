import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

const AUTHENTICATOR = 'authenticator:oauth2';

export default Controller.extend({
  session: service(),

  actions: {
    authenticate() {
      let that = this;
      let { username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate(AUTHENTICATOR, username, password).then(function(result) {
        that.transitionToRoute("a.index");
      }, function(err) {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
