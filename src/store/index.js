import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const isDebug = process.env.NODE_ENV !== 'production';//开发true,生产false

import demo from './module/demo';

const store = new Vuex.Store({
  strict: isDebug,
  state: {
    tip: '欢迎使用Vuex'
  },
  getters: {
    tip: state => state.tip
  },
  mutations: {
    SET_TIP(state, data) {
      state.tip = data;
    }
  },
  actions: {},
  modules: {
    demo
  }
});

export default store;
