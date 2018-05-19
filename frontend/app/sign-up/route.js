import Route from '@ember/routing/route'
import { inject as service } from '@ember/service';

const AUTHENTICATOR = 'authenticator:oauth2';

// app/routes/login.js
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  session: service(),
  routeIfAlreadyAuthenticated: 'authenticated',
  actions: {
    async onSignUp(username, email, password) {
     const attrs = { username, email, password };
     let user = this.store.createRecord('user', attrs);
     let that = this;
     user.save().then(function(result) {
       console.log('User successfully created:');
       let session = that.get('session');
       session.authenticate(AUTHENTICATOR, username, password).then(function(result) {
         console.log('authenticated successful');
       }, function(err) {
         console.log('authentification failed reason:')
         console.log(err);
       });
     }, function(err) {
       console.log('Failed to create user:');
       console.log(err);
     });
    },
    sessionAuthenticationSucceeded: function() {
      this.transitionTo('a');
    }
  }
});
