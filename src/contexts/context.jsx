import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const getInitialTheme = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const savedTheme = localStorage.getItem('dark-mode') === 'true';
  return savedTheme || prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());
  const [searchTerm, setSearchTerm] = useState('guitar');

  const url = ` https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_UNSPLASH_ACCESS_KEY
  }`;

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('dark-mode', newDarkMode);
    // const body = document.querySelector('body');
    // body.classList.toggle('dark-mode', newDarkMode);
  };

  const getImages = async () => {
    const result = await axios.get(`${url}&query=${searchTerm}`);

    return result;
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

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
