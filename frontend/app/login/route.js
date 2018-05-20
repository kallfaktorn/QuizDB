import Route from '@ember/routing/route'


// app/routes/login.js
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  routeIfAlreadyAuthenticated: 'a.index',
  actions: {
    sessionAuthenticationSucceeded: function() {
      this.transitionTo('a.index');
    }
  }
});
