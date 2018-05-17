import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  tagName: 'a',
  classNames: ['anchor', 'anchor-sign-up'],

  click: function() {
    this.get('router').transitionTo('sign-up');
  }
});
