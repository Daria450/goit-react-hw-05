import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../services/tmdb-api';
import s from './MovieDetailc.module.css'
import clsx from 'clsx';

const MovieDetails = () => {
    const { movieId } = useParams();

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const getMovieById = async () => {
            try {
                const res = await fetchMovieById(movieId);
                setMovie(res);

            }

            catch (er) { console.log(er) }


        }

        getMovieById();

    }
        , [movieId])
    const buildLinkClass = ({ isActive }) => {
        return clsx(s.navlink, isActive && s.active);
    };
    const location = useLocation();
    const goBackRef = useRef(location.state ?? '/')
    return (
        <>
            <Link className={s.link} to={goBackRef.current} >Go Back</Link>
            <div className={s.container}>
                <img src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} alt={movie.title} />
                <div className={s.text}>
                    <h2>{movie.title}</h2>

                    <p>User score: {Math.round(movie.vote_average * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    {movie.genres && <p>{movie.genres.map(item => item.name).join(', ')}</p>}
                </div>
            </div>
            <div className={s.extra}>
                <h3>Additional information</h3>
                <nav className={s.navlist}>
                    <NavLink className={buildLinkClass} to='cast' >
                        Cast
                    </NavLink>
                    <NavLink className={buildLinkClass} to='reviews' >
                        Reviews
                    </NavLink>
                </nav>


                <Outlet />
            </div>

        </>
    )
}

export default MovieDetails