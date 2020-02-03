import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';
import modules from './modules';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);
const IN_DEVELOPMENT = process.env.NODE_ENV !== 'production';
export const store = new Vuex.Store({
    modules,
    strict: IN_DEVELOPMENT,
    plugins: IN_DEVELOPMENT ? [createLogger()] : []
});
