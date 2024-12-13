import React, { useState } from "react";
import { createContext } from "react";

export const globalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [circleStatus, setCircleStatus] = useState(false);
  const [chargeStationLoc, setChargeStationLoc] = useState([]);
  const [navStatus , setNavStatus] = useState(false);
  const [ loading ,setLoading ] = useState(true);

  return (
    <globalContext.Provider
      value={{
        circleStatus,
        setCircleStatus,
        chargeStationLoc,
        setChargeStationLoc,
        navStatus,
        setNavStatus,
        loading,
        setLoading
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
export default GlobalContextProvider;
