import ApiService from "@/api/api.service";
import JwtService from "@/common/jwt.service"
import type from './type'

const actions = {
    login(context, credentials) {
        return new Promise((resolve, reject) => {
            ApiService.post("api/v1/user/login", credentials)
                .then(({data}) => {
                    context.commit(type.AUTH_CLEAR_ERRORS);
                    console.log(data);
                    context.commit(
                        type.AUTH_SET_USER, {userId: data.user.id, token: data.access_token}
                    );
                    resolve(data);
                })
                .catch((error) => {
                    context.commit(
                        type.AUTH_SET_USER,
                        {target: 'login', message: error}
                    );
                    reject(response);
                });
        });
    },
    logout(context, payload) {
        context.commit(type.AUTH_LOGOUT);
        context.commit(type.AUTH_RESET_STATE, null, { root: true });
        return new Promise((resolve, reject) => {
            ApiService.get("api/v1/user/logout")
                .then(({data}) => {
                    context.commit(type.AUTH_LOGOUT);
                    resolve(data);
                })
                .catch((error) => {
                    context.commit(
                        type.AUTH_SET_ERROR,
                        {target: 'logout', message: error}
                    );
                    reject(response);
                });
        });
    },
    register(context, credentials) {
        return new Promise((resolve, reject) => {
            ApiService.post("api/v1/user/register", credentials)
                .then((data) => {
                    // context.commit(type.AUTH_SET_USER, {userId: data.user_id, token: data.access_token});
                    resolve(data);
                })
                .catch(({response, status}) => {
                console.log(response);
                    if(status === 422) {
                        context.commit(
                            type.AUTH_SET_ERROR,
                            {target: 'register', errors: response.data.errors}
                        );
                    }
                    reject(response);
                });
        });
    },
    checkAuth(context) {
        if (JwtService.getToken()) {
            ApiService.setHeader();
            return new Promise((resolve) =>{
                ApiService.get("api/v1/token/validate")
                    .then((data) => {
                        resolve(data)
                    })
                    .catch(({ response }) => {
                        context.commit(type.AUTH_LOGOUT);
                    });

            });
        } else {
            context.commit(type.AUTH_LOGOUT);
        }
    },
};


export default actions;