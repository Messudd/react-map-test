import React, { useContext, useEffect } from "react";
import { userLocContext } from "../contexts/userLocationContext";
import "../css/control.css";

const ControlComp = () => {
  const { userLocation, setUserLocation } = useContext(userLocContext);

  const onSucces = (pos) => {
    setUserLocation({
      ...userLocation,
      loaded: true,
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    });
  };

  const onError = () => {
    setUserLocation({
      ...userLocation,
      loaded: false,
      error: {
        code: 0,
        message: "LOCATION_ERROR",
      },
    });
  };

  const getUserLocation = () => {
    if (!("geolocation" in navigator)) {
      alert("geolocation not supported");
    }

    navigator.geolocation.getCurrentPosition(onSucces, onError);
  };

  useEffect(() => {
    console.log('user-location :' ,userLocation);
  },[userLocation]);

  return (
    <div className="control-side">
      <button className="location" onClick={getUserLocation}>
        <img
          src={require("../utility/icons/navigation.png")}
          width={15}
          alt="navigation"
        />
      </button>
    </div>
  );
};
export default ControlComp;
