import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import modules from "./modules"
import getters from "./getters"
const state = {
  cartList: []
}
export default createStore({
  state,
  mutations,
  actions,
  modules,
  getters
});
