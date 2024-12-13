import React, { useEffect } from "react";
import { Popup } from "react-leaflet";
//import { Link } from "react-router-dom";

const CustomPopup = ({ station }) => {
  const API_KEY = "e27a935c-5137-4038-9c5f-8265010f93a9";

  useEffect(() => {}, []);

  return (
    <Popup>
      <div className="popup-banner"></div>
      <p>
        <span>Title : </span>
        <span>{station.AddressInfo.Title}</span>
      </p>
      <p>
        <span>Address :</span>
        <span>{station.AddressInfo.AddressLine1}</span>
      </p>
    </Popup>
  );
};

export default CustomPopup;
