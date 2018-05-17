import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  tagName: 'a',
  classNames: ['anchor', 'anchor-back'],

  click: function() {
    history.go(-1)
  }
});
