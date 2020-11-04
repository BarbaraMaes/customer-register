  
const ROOT_URL = "https://frebi.willandskill.eu/";
const API_URL = `${ROOT_URL}api/v1/`;
const AUTH_URL = `${ROOT_URL}auth/`;
const LOGIN_URL = `${ROOT_URL}api-token-auth/`;

export default class {
    login = async(payload) => {
        try {
            const response = await fetch(LOGIN_URL, {
                method: "POST",
                headers: {
                    "Content-Type" : 'application/json'
                },
                body: JSON.stringify(payload)
            }); 
            const token = await response.json(); 
            return(token);
        } catch (error) {
            console.log(error);
        }
    }

    getMe = async (token) => {
        try {
            const response = await fetch(`${ROOT_URL}api/v1/me`, {
                headers: {
                    "Content-Type" : 'application/json',
                    "Authorization" : 'Bearer ' + token
                }
            }); 
            const user = await response.json(); 
            return(user);
        } catch (error) {
            console.log(error);
        }
    }
}