import ApiService from "@/api/api.service";
import JwtService from "@/common/jwt.service"
import type from './type'

const actions = {
    initCourse(context) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/course")
                .then(({data}) => {
                    context.commit(type.SET_ALL_COURSE, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
    getCourseById(context, courseId) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/course/" + courseId)
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_COURSE, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    }
};


export default actions;