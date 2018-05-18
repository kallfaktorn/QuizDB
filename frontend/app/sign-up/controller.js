import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    login: function() {
      console.log('Username');
      console.log(this.get('username'));
      console.log('password');
      console.log(this.get('password'));
      console.log('email');
      console.log(this.get('email'));
      console.log('confirmPassword');
      console.log(this.get('confirmPassword'));
    }
  }
});
  
