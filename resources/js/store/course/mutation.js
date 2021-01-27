import type from './type'
import JwtService from '@/common/jwt.service'

const mutations = {
  [type.SET_ALL_COURSE] (state, data) {
    state.courses = data.courses;
  },
  [type.SET_COURSE] (state, data) {
    state.course = data.course;
  },
};
export default mutations;