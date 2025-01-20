import "./CatalogPage.css";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loader from "../components/Loader/Loader";
import FavoritesTrucksList from "../components/TrucksList/FavoritesTrucksList";
import { useDispatch, useSelector } from "react-redux";
import { reset, selectTrucks, setPage } from "../redux/trucksSlice";
import { useEffect } from "react";
import { fetchAll } from "../redux/trucksOps";
import { filterObject } from "../utils/utils";

const FavotitesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, []);

  const isLoading = useSelector((state) => state.trucks.loading);
  const isError = useSelector((state) => state.trucks.error);
  const favorites = useSelector((state) => state.trucks.favorites);

  const results = useSelector(selectTrucks);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const favoritesCount = Object.keys(filterObject(favorites)).length;

  return (
    <div className="container">
      <div className="catalog-page">
        <div className="trucks-block">
          {results?.length > 0 && favoritesCount > 0 ? (
            <FavoritesTrucksList hits={results} />
          ) : (
            !isLoading && !isError && <p className="loader">No results..</p>
          )}
          {isLoading && !isError && <Loader />}
          {isError && <ErrorMessage />}
        </div>
      </div>
    </div>
  );
};

export default FavotitesPage;
