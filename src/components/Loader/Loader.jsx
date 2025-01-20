import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <Bars
        height="40"
        width="120"
        color="#e44848"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
