import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  tagName: 'a',
  classNames: ['anchor', 'anchor-logout'],

  click: function() {
    history.go(-1)
  }
});
