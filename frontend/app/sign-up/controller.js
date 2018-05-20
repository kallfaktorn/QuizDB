import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

const AUTHENTICATOR = 'authenticator:oauth2';

export default Controller.extend({
  session: service(),

  actions: {
    async signUp(username, email, password, confirmPassword) {
     const attrs = { username, email, password, confirmPassword };
     let user = this.store.createRecord('user', attrs);
     let that = this;

     if (password !== confirmPassword) { alert('confirmPassword not same as Password') }

     user.save().then(function(result) {
       console.log('User successfully created:');
       let session = that.get('session');
       session.authenticate(AUTHENTICATOR, username, password).then(function(result) {
         console.log('authentication successful');
          that.transitionToRoute("a.index");
       }, function(err) {
         console.log('authentication failed reason:');
         console.log(err);
       });
     }, function(err) {
       console.log('Failed to create user:');
       console.log(err);
     });
    }
  }
});
