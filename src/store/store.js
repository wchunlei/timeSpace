import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const app = {
    state: {
      flagMapArea: false,
      mapArea: ''
    },
    mutations: {
      selectArea: state => {
      if (state.flagMapArea) {

      }
    }
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
