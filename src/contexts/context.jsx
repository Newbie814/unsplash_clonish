import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const url = ` https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_UNSPLASH_ACCESS_KEY
}&query=office`;

console.log(import.meta.env.VITE_UNSPLASH_ACCESS_KEY);

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode', newDarkMode);
  };

  const getImages = async () => {
    const result = await axios.get(url);

    return result;
  };

  return (
    <AppContext.Provider value={{ isDarkMode, toggleDarkMode, getImages }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
