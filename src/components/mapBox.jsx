import React, { useContext, useEffect, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import { mapTiler } from "../leaflet/maptiler";
import { userLocContext } from "../contexts/userLocationContext";
import { UserMarker } from "./globalMarker";
import { globalContext } from "../contexts/globalContextProvider";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import axios from "axios";
import CustomPopup from "./customPopup";
import "leaflet/dist/leaflet.css";

const MapBox = () => {
  const [center, setCenter] = useState([38.963745, 35.243322]);
  const ZOOM_LEVEL = 6;
  const map = useRef();
  const API_KEY = "e27a935c-5137-4038-9c5f-8265010f93a9";

  const { userLocation } = useContext(userLocContext);
  const { chargeStationLoc, setChargeStationLoc } = useContext(globalContext);
  //const [hovered, setHovered] = useState(false);

  const stationIcon = new Icon({
    iconUrl: require("../utility/icons/charge-station.png"),
    iconSize: [38, 40],
    iconAnchor: [38, 38],
    popupAnchor: [0, -38],
  });
  //const handleMouseOver = () => {
  //   setHovered(true);
  // };

  // const handleMouseOut = () => {
  //   setHovered(false);
  // };

  const getChargeStations = async () => {
    await axios
      .get(
        `https://api.openchargemap.io/v3/poi/?key=${API_KEY}&countrycode=TR&output=json&maxresults=5000`
      )
      .then((res) => {
        console.log("stations : ", res.data);
        setChargeStationLoc(res.data);
      })
      .catch((err) => {
        alert("Charge API -- ERROR", err);
      });
  };

  // PAGİNG FOR API //
  /*const getAllChargeStations = async() => {
    let page = 1;
    let allStations = [];
    let stations;
    do {
        stations = await getChargeStations(page);
        allStations = allStations.concat(stations);
        page++;
    } while (stations.length > 0);
    setChargeStationLoc([...allStations]);
    console.log('All-Stations: ',allStations); 
    return allStations;
  };*/

  useEffect(() => {
    getChargeStations();
  }, []);

  return (
    <div className="map-con">
      <MapContainer
        ref={map}
        center={center}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer attribution={mapTiler.attribution} url={mapTiler.url} />
        {userLocation.loaded && <UserMarker pos={userLocation} />}
        {chargeStationLoc && (
          <MarkerClusterGroup>
            {chargeStationLoc.map((item, index) => (
              <Marker
                key={index}
                position={[
                  item.AddressInfo.Latitude,
                  item.AddressInfo.Longitude,
                ]}
                icon={stationIcon}
                // eventHandlers={{
                //   mouseover: handleMouseOver,
                //   mouseout: handleMouseOut,
                // }}
              >
                <CustomPopup key={index} station={item} />
              </Marker>
            ))}
          </MarkerClusterGroup>
        )}
        <ZoomControl position="topright" />
      </MapContainer>
    </div>
  );
};
export default MapBox;
