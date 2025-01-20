// import { useState } from "react";
import CustomToggle from "../CustomToggle/CustomToggle";
import "./TruckEquipmentToggles.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const TruckEquipmentToggles = () => {
  const dispatch = useDispatch();
  // const [selectedOption, setSelectedOption] = useState("");

  const setBoolKey = (event) => {
    dispatch(changeFilter({ [event.target.value]: event.target.checked }));
  };

  const setStringlKey = (event) => {
    dispatch(
      changeFilter({
        [event.target.value]: event.target.checked
          ? event.target.attributes.label.value.toLowerCase()
          : "",
      })
    );
  };

  return (
    <div className="equipment-filter">
      {/* <CustomToggle label="Favorites" onChange={setStringlKey} value="hart" /> */}
      <CustomToggle label="Petrol" onChange={setStringlKey} value="engine" />
      <CustomToggle label="Diesel" onChange={setStringlKey} value="engine" />
      <CustomToggle label="AC" onChange={setBoolKey} value="AC" />
      <CustomToggle
        label="Automatic"
        onChange={setStringlKey}
        value="transmission"
      />
      <CustomToggle
        label="Manual"
        onChange={setStringlKey}
        value="transmission"
      />
      <CustomToggle label="Bathroom" onChange={setBoolKey} value="bathroom" />
      <CustomToggle label="Kitchen" onChange={setBoolKey} value="kitchen" />
      <CustomToggle label="TV" onChange={setBoolKey} value="TV" />
      <CustomToggle label="Radio" onChange={setBoolKey} value="radio" />
      <CustomToggle
        label="Refrigerator"
        onChange={setBoolKey}
        value="refrigerator"
      />
      <CustomToggle label="Microwave" onChange={setBoolKey} value="microwave" />
      <CustomToggle label="Gas" onChange={setBoolKey} value="gas" />
      <CustomToggle label="Water" onChange={setBoolKey} value="water" />
    </div>
  );
};

export default TruckEquipmentToggles;
