import "./CatalogPage.css";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../components/Loader/Loader";
import TrucksList from "../components/TrucksList/TrucksList";
import { useDispatch, useSelector } from "react-redux";
import { reset, selectTrucks, setPage } from "../redux/trucksSlice";
import { useEffect } from "react";
import { fetchTrucks } from "../redux/trucksOps";
import { useSearchParams } from "react-router-dom";

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, []);

  const page = useSelector((state) => state.trucks.page);
  const totalResults = useSelector((state) => state.trucks.totalResults);
  const isLoading = useSelector((state) => state.trucks.loading);
  const isError = useSelector((state) => state.trucks.error);

  const results = useSelector(selectTrucks);

  const getNextPage = () => {
    dispatch(setPage(page + 1));
  };

  useEffect(() => {
    // const params = [];
    // searchParams.forEach((value, key) => {
    //   params.push([key, value]);
    // });
    // console.log("params", params);
    dispatch(fetchTrucks({ page, searchParams }));
    // console.log(searchParams.size);
    // if (searchParams.size === 0) {
    //   dispatch(fetchTrucks(page));
    // } else {
    //   dispatch(fetchTrucks(page, searchParams));
    // }
  }, [dispatch, page, searchParams]);

  // console.log("res", truks);
  console.log("page", page);
  console.log("totalResults", totalResults);
  // const filteredTrucks = useSelector(selectFilteredTrucks);

  return (
    <div className="container">
      <div className="catalog-page">
        <FilterPanel className="filters" />
        <div className="trucks-block">
          {results?.length > 0 ? (
            <TrucksList hits={results} />
          ) : (
            !isLoading && !isError && <p className="loader">No results..</p>
          )}
          {isLoading && !isError && <Loader />}
          {isError && <ErrorMessage />}
          {results?.length > 0 &&
            results?.length < totalResults &&
            !isLoading &&
            !isError && <LoadMoreBtn click={getNextPage} />}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
