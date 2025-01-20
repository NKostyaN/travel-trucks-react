import "./TruckTypeRadio.css";
import CustomRadioButton from "../CustomRadioButton/CustomRadioButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const TruckTypeRadio = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();
  const setStringlKey = (event) => {
    setSelectedOption(event.target.value);
    dispatch(
      changeFilter({
        form: event.target.checked ? event.target.value : "",
      })
    );
  };

  return (
    <div className="truck-type">
      <CustomRadioButton
        label="Van"
        checked={selectedOption === "panelTruck"}
        onChange={setStringlKey}
        value="panelTruck"
      />
      <CustomRadioButton
        label="Fully Integrated"
        checked={selectedOption === "fullyIntegrated"}
        onChange={setStringlKey}
        value="fullyIntegrated"
      />
      <CustomRadioButton
        label="Alcove"
        checked={selectedOption === "alcove"}
        onChange={setStringlKey}
        value="alcove"
      />
    </div>
  );
};

export default TruckTypeRadio;
