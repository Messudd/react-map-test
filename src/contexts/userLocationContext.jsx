import React ,{useState} from 'react'
import { createContext } from "react";

export const userLocContext = createContext();

const UserLocationContext = ({children})  => {
    const [userLocation, setUserLocation] = useState({
        loaded: false,
        lat: "",
        lng: "",
      });

  return (
    <userLocContext.Provider value={{userLocation,setUserLocation}}>
        {children}
    </userLocContext.Provider>
  )
}
export default UserLocationContext;
