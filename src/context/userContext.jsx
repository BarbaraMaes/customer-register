import React, {useState, useEffect, createContext} from 'react'; 
import UserActions from '../functions/UserActions';

export const UserContext = createContext({}); 


export default function DataProvider({children}) {
    const [user, setUser] = useState({
        token: null, 
        user: null
    }); 
    //const userActions = new UserActions();

    /*useEffect(() => {
        const storage_user = userActions.getUser(); 
        if(storage_user){
            setUser(storage_user)
        }
    }, [])*/

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
