import type from './type'
import JwtService from '@/common/jwt.service'

const mutations = {
    [type.CHANGE_LAYOUT] (state, layoutType) {
        state.layoutType = layoutType;
    },
};
export default mutations;