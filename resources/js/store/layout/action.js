import ApiService from "@/api/api.service";
import JwtService from "@/common/jwt.service"
import type from './type'

const actions = {
    changeLayoutType({ commit, state, rootState }, { layoutType }) {
        commit(type.CHANGE_LAYOUT, layoutType);
    },
};


export default actions;