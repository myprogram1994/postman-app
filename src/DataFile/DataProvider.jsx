import { useState } from 'react';

import React, { createContext } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    
    const [data, setData] = useState({ url: '', type: 'GET',headerkey:'',headervalue:'' })
    const [datajson, setjsonData] = useState('');
    const [res,setresponseheaders]=useState({})  
    const [headerData, setHeaderData] = useState([]);
    const [Msgerror, setErrorMsg]=useState('')
    const [url,setUrl]=useState("")
    const [key, setkey]=useState('')
    const [value, setvalue]=useState('')
const [errors,setError]=useState(false)
    const change=()=>{
        console.log("")
      }
    return (
        <DataContext.Provider
            value={{
                data,
                setData,
                datajson,
                setjsonData,
                headerData,
                setHeaderData,
                key,
                setkey,
                value,
                setvalue,
                url,setUrl,
                change,
                errors,setError,
                Msgerror, setErrorMsg,
                setresponseheaders,res
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;