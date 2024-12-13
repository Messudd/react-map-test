import React, { useContext, useEffect, useState } from "react";
import { globalContext } from "../contexts/globalContextProvider";
import { motion } from "framer-motion";
import citys from "../static_data/city";
import towns from "../static_data/town";
import "../css/filterForm.css";

const ManuelFilter = () => {
  const { navStatus } = useContext(globalContext);
  const [city, setCity] = useState("");
  const [town, setTown] = useState("");

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };
  const handleChangeTown = (e) => {
    setTown(e.target.value);
  };

  useEffect(() => {
    console.log("selected_city :", city);
    console.log("selected_town :", town);
  }, [city, town]);

  return (
    <>
      {navStatus && (
        <motion.div
          className=" manuel-filter"
          initial={{
            width: 0,
          }}
          animate={{
            width: 250,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className="header-section">
            <div className="intro">
              {" "}
              <h3 className="right-side-head">
                <span
                  style={{
                    color: "orange",
                  }}
                >
                  Station |
                </span>
                <span
                  style={{
                    color: "whitesmoke",
                  }}
                >
                  Filter
                </span>
              </h3>
            </div>
            <hr className="head-hr"></hr>
            <form action="" className="filter-form">
              <div className="city-div">
                <select
                  name=""
                  id="city"
                  defaultValue=""
                  onChange={handleChangeCity}
                >
                  <option selected disabled value="">
                    please choise a city
                  </option>
                  {citys.map((data) => (
                    <option value={data.sehir_adi} key={data.sehir_id}>
                      {data.sehir_adi.toLowerCase()}
                    </option>
                  ))}
                </select>
              </div>
              <div className="town-div">
                <select
                  disabled={city !== "" ? false : true}
                  name=""
                  id="town"
                  defaultValue=""
                  onChange={handleChangeTown}
                >
                  <option selected disabled value="">
                    please choise a town
                  </option>
                  {towns
                    .filter((data) => data.sehir_adi === city)
                    .map((value, index) => (
                      <option value={value.ilce_adi} key={index}>
                        {value.ilce_adi.toLowerCase()}
                      </option>
                    ))}
                </select>
                <button className="search-station">Search</button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ManuelFilter;
