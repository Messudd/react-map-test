import React, { useContext } from "react";
import { globalContext } from "../contexts/globalContextProvider";
import ev_logo from "../utility/icons/ev.png";
import "../css/banner.css";

const Banner = () => {
  const { navStatus, setNavStatus } = useContext(globalContext);

  const changeNavStatus = () => {
    setNavStatus(!navStatus);
  };

  return (
    <header className="banner">
      {!navStatus ? (
        <button className="nav-btn" onClick={changeNavStatus}>
          <img
            className="banner-logo"
            src={require("../utility/icons/menu.png")}
            width={28}
            alt="nav-open"
          />
        </button>
      ) : (
        <button className="nav-btn" onClick={changeNavStatus}>
          <img
            src={require("../utility/icons/cross.png")}
            width={28}
            alt="nav-close"
          />
        </button>
      )}
      <h2 className="logo">
        <img src={ev_logo} alt="ev_logo" width={25}></img>
        <span>FIND CHARGE STATİON</span>
      </h2>
    </header>
  );
};

export default Banner;
