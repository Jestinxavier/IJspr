import React, { createContext, useLayoutEffect, useState } from "react";

export const LocalStorageContext = createContext();

function LocalStorageProvider({ children }) {
  const [localStorage, setLocalStorage] = useState();
  const handleStorage = (e) => {console.log(e, "df")};
  useLayoutEffect(() => {
    
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);
  window.addEventListener("storage", handleStorage);
  return (
    <LocalStorageContext.Provider value={{ localStorage }}>
      {children}
    </LocalStorageContext.Provider>
  );
}

export default LocalStorageProvider;
