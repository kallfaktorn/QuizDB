import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('login', { path: 'login' });
  this.route('sign-up', { path: 'sign-up' });
  this.route('a', { path: 'a' }, function() {
    this.route('index', { path: 'index' });
    this.route('questions', function() {
      this.route('add');
      this.route('index');
      this.route('edit', { path: 'edit/:id' });
      this.route('remove', { path: 'remove/:id' });

    });
  });
});

export default Router;
