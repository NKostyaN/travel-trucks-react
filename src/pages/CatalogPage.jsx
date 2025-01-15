import FilterPanel from "../components/FilterPanel/FilterPanel";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../components/Loader/Loader";
import mockedList from "../data/mocked-data.json";
import { useState } from "react";
import TrucksList from "../components/TrucksList/TrucksList";
// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";

const CatalogPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [results, setResults] = useState(mockedList);

  // const [query, setQuery] = useState("");
  // const [page, setPage] = useState(1);
  // const [totalResults, setTotalResults] = useState(0);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const queryValue = searchParams.get("query") ?? "";

  // const search = (query) => {
  //   setQuery(query);
  //   setPage(1);
  //   setResults([]);
  //   searchParams.set("query", query);
  //   setSearchParams(searchParams);
  // };
  // const getNextPage = () => {
  //   setPage(page + 1);
  // };

  // useEffect(() => {
  //   queryValue && search(queryValue);
  // }, []);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       setIsLoading(true);
  //       setError(false);
  //       const [res, total] = await searchMovie(query, page);

  //       if (page === 1) {
  //         setResults(res);
  //         setTotalResults(total);
  //       } else {
  //         setResults((prevRes) => [...prevRes, ...res]);
  //       }
  //     } catch (err) {
  //       setError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   query && fetchMovies();
  // }, [query, page]);

  return (
    <div className="container">
      <div className="catalog-page">
        {/* <p>
          <b>Catalog page</b>
        </p> */}
        {/* <SearchBar search={search} queryValue={queryValue} /> */}
        <FilterPanel />
        <br />
        {results.items.length > 0 ? (
          <TrucksList hits={results.items} />
        ) : (
          !isLoading &&
          // query &&
          !isError && <p className="loader">No results..</p>
        )}
        {isLoading && !isError && <Loader />}
        {isError && <ErrorMessage />}
        {results.length > 0 &&
          results.length < totalResults &&
          !isLoading &&
          !isError && <LoadMoreBtn click={getNextPage} />}
      </div>
    </div>
  );
};

export default CatalogPage;
