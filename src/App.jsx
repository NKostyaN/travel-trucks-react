import { Suspense, lazy, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import { fetchTrucks } from "./redux/trucksOps";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const TruckDetailsPage = lazy(() => import("./pages/TruckDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const FeatureList = lazy(() => import("./components/FeatureList/FeatureList"));
const ReviewsList = lazy(() => import("./components/ReviewsList/ReviewsList"));

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTrucks());
  // }, [dispatch]);

  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<TruckDetailsPage />}>
            <Route path="features" element={<FeatureList />} />
            <Route path="reviews" element={<ReviewsList />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
