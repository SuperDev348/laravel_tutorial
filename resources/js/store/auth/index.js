import mutations from './mutation'
import actions from './action'
import getters from './getter'
import JwtService from "@/common/jwt.service"

const defaultState = {
  token: null,
  errors: {
      login: [],
      register: []
  },
  userId: null,
  isAuthenticated: JwtService.getToken()? true : false,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
