import { createContext, useEffect, useState } from "react";
export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [page, setPage] = useState(() => {
    if (localStorage.getItem("pageCalc")) {
      return localStorage.getItem("pageCalc");
    } else {
      return "";
    }
  });
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
