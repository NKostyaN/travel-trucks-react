import "./FilterPanel.css";
import { useSearchParams } from "react-router-dom";
import TruckEquipmentToggles from "../TruckEquipmentToggles/TruckEquipmentToggles";
import TruckTypeRadio from "../TruckTypeRadio/TruckTypeRadio";
import locations from "../../data/locations-data.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";
import { filterObject } from "../../utils/utils";
import { reset, setPage } from "../../redux/trucksSlice";
import icons from "../../img/icons.svg";

const FilterPanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(reset());
    setSearchParams(filterObject(filterValue));
    dispatch(setPage(1));
  };

  const [locationValue, setlocationValue] = useState(0);

  const setStringKey = (event) => {
    setlocationValue(event.target.value);
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
        <svg className="location-map" width="20" height="20">
          <use href={`${icons}#map`}></use>
        </svg>
        <select
          className="location-select"
          value={locationValue}
          onChange={setStringKey}
        >
          <option value={0}>Choose city...</option>
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
