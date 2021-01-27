const getters = {
  getLoginErrors(state) {
      return state.errors.login;
  },
  getRegistrationErrors(state) {
      return state.errors.register;
  },
  getErrors(state){
      return state.errors;
  },
  currentUser(state){
      return state.userId;
  },
  isAuthenticated(state){
      return state.isAuthenticated;
  }
};

export default getters;