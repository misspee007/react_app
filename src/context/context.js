import React from 'react';
import { createContext, useContext } from "react";
import data from "../data/data";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	return (
		<AppContext.Provider value={data}>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppContextProvider, useAppContext };
