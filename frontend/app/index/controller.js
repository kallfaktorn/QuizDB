import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    login: function() {
      this.transitionToRoute('login');
    },
    signUp: function() {
      this.transitionToRoute('sign-up');
    }
  }
});
