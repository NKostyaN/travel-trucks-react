import "./TruckDetailsPage.css";
import { useEffect, Suspense } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm/BookingForm";
import TruckDetailCard from "../components/TruckDetailCard/TruckDetailCard";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loader from "../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getTruck } from "../redux/trucksOps";
import { addToFavorites, selectTruck } from "../redux/trucksSlice";

const TruckDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const item = useSelector(selectTruck);
  // console.log(item);
  const isLoading = useSelector((state) => state.trucks.loading);
  const isError = useSelector((state) => state.trucks.error);
  const favorites = useSelector((state) => state.trucks.favorites);

  useEffect(() => {
    dispatch(getTruck(id));
  }, [dispatch]);

  const generateFavoritesList = () => {
    const data = localStorage.getItem("FavoritesTrucks");
    if (data) {
      return dispatch(addToFavorites(JSON.parse(data)));
    }
    return dispatch(addToFavorites({}));
  };

  useEffect(() => {
    generateFavoritesList();
  }, []);

  useEffect(() => {
    localStorage.setItem("FavoritesTrucks", JSON.stringify(favorites));
  }, [favorites]);

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
