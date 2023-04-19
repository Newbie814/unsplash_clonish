import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState('guitar');

  const url = ` https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_UNSPLASH_ACCESS_KEY
  }`;

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode', newDarkMode);
  };

  const getImages = async () => {
    const result = await axios.get(`${url}&query=${searchTerm}`);

    return result;
  };

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        getImages,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
