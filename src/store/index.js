import { createStore } from "vuex";
import data from "../data/data.json";

export default createStore({
  state: {
    data: data,
    activeState: {
      daily: false,
      weekly: true,
      monthly: false,
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
