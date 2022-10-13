import { useState } from 'react';

import React, { createContext } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    
    const [data, setData] = useState({ url: '', type: 'GET' })
    const [datajson, setjsonData] = useState('');

    return (
        <DataContext.Provider
            value={{
                data,
                setData,
                datajson,
                setjsonData,
               
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;