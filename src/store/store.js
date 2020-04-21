import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

// Vue.use(axios);

Vue.axios.defaults.baseURL = "http://localhost:8080";
// let baseURL = "http://localhost:8080/users";

export default new Vuex.Store({
  state: {
    users: []
  },
  actions: {
    loadUsers({commit}) {
        Vue.axios.get('users')
        .then(r => {
          commit('SAVE_USERS', r.data);
        })
        .then(users => {
            console.log(users)
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
      }
  },
  mutations: {
    SAVE_USERS(state, users) {
      state.users = users;
    }
  }
})