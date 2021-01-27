import mutations from './mutation'
import actions from './action'
import getters from './getter'

const defaultState = {
    layoutType: 'horizontal',
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
