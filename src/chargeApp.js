import MapBox from "./components/mapBox";
import UserLocationContext from "./contexts/userLocationContext";
import { globalContext } from "./contexts/globalContextProvider";
import ManuelFilter from "./components/manuelFilter";
import Banner from "./components/banner";
import ControlComp from "./components/controlComp";
import { BounceLoader } from "react-spinners";
import { useContext } from "react";
import "./chargeApp.css";

function ChargeApp() {
  const { chargeStationLoc } = useContext(globalContext);
  return (
    <>
      <UserLocationContext>
        <div className="charge-stations-app">
          <Banner />
          <div className="map-section">
            <div className="leaflet-app">
              <MapBox />
              <ControlComp />
            </div>
            <ManuelFilter />
          </div>
          {chargeStationLoc.length === 0 && (
            <BounceLoader
              color='rgba(0,0,0,0.5)'
              style={{
                position: "absolute",
                top: "40%",
                left: "45%",
                zIndex: "2",
              }}
              size={100}
            />
          )}
        </div>
      </UserLocationContext>
    </>
  );
}

export default ChargeApp;
