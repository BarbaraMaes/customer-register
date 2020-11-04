import React, {useState, createContext} from 'react'; 

export const DataContext = createContext({}); 

export default function DataProvider({children}) {
    const [data, setData] = useState(null); 
    /*const customerActions = new CustomerActions();

    const fetchData = async () => {
        const response = await fetch("https://market-data-collector.firebaseio.com/market-collector.json"); 
        const data = await response.json(); 
        setData(data);
        console.log(data);
    }

    useEffect(() => {
        const response = customerActions.getCustomers();
        fetchData()
    }, [])*/

    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}
