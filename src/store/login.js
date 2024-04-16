import axios from '@/services/axios'

const state = {
  isAuthenticated: false,
  user: null
};

const mutations = {
  login(state, user) {
    state.isAuthenticated = true;
    state.user = user;
  },
  logout(state) {
    state.isAuthenticated = false;
    state.user = null;
  }
};
const actions = {
  async login({commit}, credentials) {
    try {
      const response = await axios.post('/login', credentials);
      const user = response.data.user;
      commit('login', user);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  },
  logout({commit}) {
    commit('logout');
  }
};
const getters = {
  isAuthenticated: state => state.isAuthenticated,
  currentUser: state => state.user
};


export default {
  state,
  mutations,
  actions,
  getters
};
