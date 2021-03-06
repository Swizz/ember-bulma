import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('overview', { path: '/' });
  this.resource('grid');
  this.resource('navbar');
  this.resource('layout', function() {
    this.route('container', { path: '/' });
    this.route('header');
    this.route('hero');
    this.route('section');
    this.route('footer');
  });
  this.resource('themes');

  this.resource('uielements', function() {
    this.route('buttons', { path: '/' });
    this.route('form-controls');
    this.route('messages');
    this.route('notifications');
    this.route('tags');
  });

  this.resource('uicomponents', function() {
    this.route('tabs', { path: '/' }, function() {
      this.route('pictures');
      this.route('music');
      this.route('videos');
      this.route('documents');
    });

    this.route('menu');
    this.route('table');
  });
});

export default Router;
