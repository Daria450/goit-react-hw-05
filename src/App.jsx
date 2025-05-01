
import { Routes, Route, NavLink } from "react-router-dom";
import s from './App.module.css';
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import clsx from "clsx";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));


function App() {


  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };



  return (
    <>
      <Suspense fallback={<Loader />} />
      <nav className={s.nav}>
        <NavLink className={buildLinkClass} to="/" >
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies" >
          Movies
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
