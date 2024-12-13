import React, { useContext, useEffect } from "react";
import { Icon } from "leaflet";
import { Marker, Popup, useMap, Circle } from "react-leaflet";
import { globalContext } from "../contexts/globalContextProvider";

export const UserMarker = ({ pos }) => {
  const map = useMap();
  const { setCircleStatus, circleStatus } = useContext(globalContext);

  const userMarkerIcon = new Icon({
    iconUrl: require("../utility/icons/Animation - 1733483178754.gif"),
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -30],
  });

  useEffect(() => {
    if (pos.lng !== "" && pos.lat !== "") {
      setCircleStatus(false);
      map.flyTo([pos.lat, pos.lng], 15, {
        animate: true,
        duration: 3,
      });
      setTimeout(() => {
        setCircleStatus(true);
      }, 3000);
    }
  }, [pos]);

  return (
    <>
      <Marker position={[pos.lat, pos.lng]} icon={userMarkerIcon}>
        <Popup>
          <span>Buradasın !</span>
        </Popup>
      </Marker>
      {circleStatus && (
        <Circle
          center={[pos.lat, pos.lng]}
          radius={250}
          opacity={0.8}
          pathOptions={{ color: "lightblue" }}
        />
      )}
    </>
  );
};
