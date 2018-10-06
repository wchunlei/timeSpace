import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const app = {
  state: {
    flagMapArea: false,
    mapArea: '',
    pathFlags: false,
    pathData: {}
  },
  mutations: {
    selectArea: state => {
      if (state.flagMapArea) {

      }
    },
    tt: state => {

    },
  },
  actions: {

  }
};

const store = new Vuex.Store({
  modules: {
    app
  }
});

export default store;
