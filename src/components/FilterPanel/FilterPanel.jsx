// import toast, { Toaster } from "react-hot-toast";
import { Link, useSearchParams } from "react-router-dom";
import TruckEquipmentToggles from "../TruckEquipmentToggles/TruckEquipmentToggles";
import TruckTypeRadio from "../TruckTypeRadio/TruckTypeRadio";
import locations from "../../data/locations-data.json";
import "./FilterPanel.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";
import { filterObject } from "../../utils/utils";
import { setPage } from "../../redux/trucksSlice";

// const FilterPanel = ({ search, queryValue }) => {
const FilterPanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    // e.preventDefault();

    setSearchParams(filterObject(filterValue));
    dispatch(setPage(1));
    console.log("filterValue", filterValue);
  };

  const [locationValue, setlocationValue] = useState(0);

  const setStringlKey = (event) => {
    setlocationValue(event.target.value);
    // console.log(event);
    // console.log(event.target[event.target.value].text);
    // console.log(event.target.value);
    dispatch(
      changeFilter({
        location:
          event.target.value != 0 ? event.target[event.target.value].text : "",
      })
    );
  };

  return (
    <div className="filter-block">
      <div className="filter-location">
        <p className="location-p">Location</p>
        <select
          className="location-select"
          // id={selectId}
          value={locationValue}
          // onChange={(evt) => setlocationValue(evt.target.value)}
          onChange={setStringlKey}
        >
          <option value={0}>City</option>
          {locations.items.map((loc) => (
            <option key={loc.id} value={loc.id}>
              {loc.location}
            </option>
          ))}
        </select>
      </div>
      <p className="filter-p">Filters</p>
      <div className="filter-equipment">
        <p className="filter-title">Vehicle equipment</p>
        <hr />
        <TruckEquipmentToggles />
      </div>
      <div className="filter-type">
        <p className="filter-title">Vehicle type</p>
        <hr />
        <TruckTypeRadio />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FilterPanel;
