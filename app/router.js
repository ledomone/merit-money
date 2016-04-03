import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', function () {
    this.route('index', {path: '/'}, function () {
      this.route('coworker', {path: 'coworker/:nickname'});
    })
  })
  this.route('about');
});

export default Router;
