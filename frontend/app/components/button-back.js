import Component from '@ember/component';

export default Component.extend({

  actions: {
    goBack: function() {
      history.go(-1)
    }
  }
});
