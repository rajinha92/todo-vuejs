import Vue from "vue";
import Vuex from "vuex";
import { storeState } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: storeState,
  mutations: mutations,
  actions: actions,
  getters: getters,
});
