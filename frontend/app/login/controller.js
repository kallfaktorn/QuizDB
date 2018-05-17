import Controller from '@ember/controller';

export default Controller.extend({
  ajax: Ember.inject.service(),

  actions: {
    login: function() {
      console.log('name');
      console.log(this.get('username'));
      console.log('password');
      console.log(this.get('password'));
    },
    authenticate: function() {
      var that = this;
      //var applicationController = that.get('controllers.application');
      const requestObject = {
        username: this.get('username'),
        password: this.get('password')
      }

      this.get('ajax').request('login', {
        method: 'POST',
        data: JSON.stringify(JSON.parse(JSON.stringify(requestObject)))
      }).then(function(response) {
        console.log('response')
        console.log(response)
      },
      function(error) {
        console.log('error')
        console.log(error)
      });

      /*var request = $.ajax({
        type: 'POST',
        url: 'login',
        data: JSON.stringify(JSON.parse(JSON.stringify(requestObject))), // just returns a params hash
        dataType: 'json'
      });*/
/*
      request.done(function(data) {
        console.log('user authenticated')
        //applicationController.set('loggedIn', true);
        //that.transitionToRoute('logged_in_route');
      });

      request.fail(function(data) {
        //applicationController.set('loggedIn', false);
        console.log('user authentication fail')
        //that.set('errorMessage', 'There was a problem with your email or password');
      });*/
    }
  }
});
