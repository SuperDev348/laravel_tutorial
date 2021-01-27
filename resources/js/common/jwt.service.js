const ID_API_TOKEN = 'id_api_token';

const JwtService = {
    getToken() {
        return window.localStorage.getItem(ID_API_TOKEN)
    },
    
    setToken(token) {
    	console.log("jwt service")
        window.localStorage.setItem(ID_API_TOKEN, token);
    },
    
    unsetToken() {
        window.localStorage.removeItem(ID_API_TOKEN);
    },
}

export default JwtService