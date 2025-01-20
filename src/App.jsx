import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const FavotitesPage = lazy(() => import("./pages/FavotitesPage"));
const TruckDetailsPage = lazy(() => import("./pages/TruckDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const FeatureList = lazy(() => import("./components/FeatureList/FeatureList"));
const ReviewsList = lazy(() => import("./components/ReviewsList/ReviewsList"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavotitesPage />} />
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
