import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

const AUTHENTICATOR = 'authenticator:oauth2';

export default Controller.extend({
  session: service(),

  init: function() {
    this.addOne();
  },

  addOne: function() {
    let that = this;
    $( document ).one( "keypress", function(event) {
      if(event.which == 13) {
          that.send('authenticate');
      } else {
        that.addOne();
      }
    });
  },

  actions: {
    authenticate() {
      let that = this;
      let { username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate(AUTHENTICATOR, username, password).then(function(result) {
        that.transitionToRoute("a.index");
      }, function(err) {
        console.log('Authentification failed');
        console.log(err);
        that.set('errorMessage', err);
      });
    }
  }
});
