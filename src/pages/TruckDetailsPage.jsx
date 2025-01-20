import "./TruckDetailsPage.css";
import { useEffect, Suspense } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm/BookingForm";
import TruckDetailCard from "../components/TruckDetailCard/TruckDetailCard";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loader from "../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getTruck } from "../redux/trucksOps";
import { selectTruck } from "../redux/trucksSlice";

const TruckDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const item = useSelector(selectTruck);
  const isLoading = useSelector((state) => state.trucks.loading);
  const isError = useSelector((state) => state.trucks.error);

  useEffect(() => {
    dispatch(getTruck(id));
  }, [dispatch]);

  return (
    <div className="container">
      <div className="details-page">
        {Object.keys(item).length != 0 ? (
          <TruckDetailCard item={item} />
        ) : (
          !isLoading && !isError && <p className="loader">No results..</p>
        )}
        {isLoading && !isError && <Loader />}
        {isError && <ErrorMessage />}
        <nav>
          <NavLink to="features">
            Features<span className="selected"></span>
          </NavLink>
          <NavLink to="reviews">
            Reviews<span className="selected"></span>
          </NavLink>
        </nav>
        <hr />
        <div className="bottom-part">
          <div className="left-part">
            <Suspense fallback={<h1>LOADING Outlet...</h1>}>
              <Outlet />
            </Suspense>
          </div>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default TruckDetailsPage;

// {
//   results?.length > 0 ? (
//     <TrucksList hits={results} />
//   ) : (
//     !isLoading && !isError && <p className="loader">No results..</p>
//   );
// }
// {
//   isLoading && !isError && <Loader />;
// }
// {
//   isError && <ErrorMessage />;
// }
