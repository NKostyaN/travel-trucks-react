import "./TruckEquipmentToggles.css";
import CustomToggle from "../CustomToggle/CustomToggle";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const TruckEquipmentToggles = () => {
  const dispatch = useDispatch();

  const setBoolKey = (event) => {
    dispatch(changeFilter({ [event.target.value]: event.target.checked }));
  };

  const setStringKey = (event) => {
    dispatch(
      changeFilter({
        [event.target.value]: event.target.checked
          ? event.target.attributes.label.value.toLowerCase()
          : "",
      })
    );
  };

  // const showFavorite = (event) => {
  //   console.log("ToggleFavoritesFilter:", event.target.checked);
  // };

  return (
    <div className="equipment-filter">
      {/* <CustomToggle label="Favorites" value="hart" onChange={showFavorite} /> */}
      <CustomToggle label="Petrol" onChange={setStringKey} value="engine" />
      <CustomToggle label="Diesel" onChange={setStringKey} value="engine" />
      <CustomToggle label="AC" onChange={setBoolKey} value="AC" />
      <CustomToggle
        label="Automatic"
        onChange={setStringKey}
        value="transmission"
      />
      <CustomToggle
        label="Manual"
        onChange={setStringKey}
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
