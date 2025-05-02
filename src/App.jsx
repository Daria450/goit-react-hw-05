
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";

import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";

const Movies = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const Cast = lazy(() => import("./components/MovieCast/MovieCast"));
const Reviews = lazy(() => import("./components/MovieReviews/MovieReviews"));


function App() {






  return (
    <>

      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
