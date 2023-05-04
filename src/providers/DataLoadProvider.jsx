/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
export const DataloaderContext = createContext([]);
// eslint-disable-next-line react/prop-types
const DataLoadProvider = ({ children }) => {
    const chefData=useLoaderData();
    // console.log(chefData);
    return (
        <DataloaderContext.Provider value={chefData}>
            {children}
        </DataloaderContext.Provider>
    );
};

export default DataLoadProvider;