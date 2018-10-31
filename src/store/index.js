import Vue from 'vue';
import Vuex from 'vuex';
import logins from './modules/login';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    logins
  },
  getters:{
    user: state => state.logins.user,
    role: state => state.logins.role,
    router: state => state.logins.router,
  }
});

export default store