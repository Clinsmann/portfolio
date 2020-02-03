window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js').default;
require('bootstrap');

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import { required } from 'vee-validate/dist/rules';
import { ValidationProvider, extend } from 'vee-validate';

extend('required', {
  ...required,
  message: 'This field is required'
});

const app = new Vue({
  el: '#app',
  template: `<app />`,
  components: { App, ValidationProvider },
  router,
  store
});
