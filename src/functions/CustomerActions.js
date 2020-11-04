const ROOT_URL = "https://frebi.willandskill.eu"; 

export default class {
    getCustomers = async (args) => {
        const {token} = args;
        try {
            const response = await fetch(`${ROOT_URL}/api/v1/customers/`, {
                headers: {
                    "Content-Type" : 'application/json', 
                    "Authorization" : 'Bearer ' + token
                }
            }); 
            const data = await response.json(); 
            return(data);
        } catch (error) {
            console.log(error);
        }
    }

    addCustomer = async(args) => {
        const {payload, token} = args;
        try {
            const response = await fetch(`${ROOT_URL}/api/v1/customers/`, {
                method: "POST",
                headers: {
                    "Content-Type" : 'application/json', 
                    "Authorization" : 'Bearer ' + token
                },
                body: JSON.stringify(payload)
            }); 
            const data = await response.json(); 
            return(data);
        } catch (error) {
            //throw new Error()
        }
    }
}