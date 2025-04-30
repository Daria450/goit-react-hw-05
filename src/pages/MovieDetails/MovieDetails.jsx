import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../services/tmdb-api';

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


    return (
        <>
            <Link to='/' >Go Back</Link>
            <img src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} alt={movie.title} width='300' />
            <h2>{movie.title}</h2>

            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            {movie.genres && <p>{movie.genres.map(item => item.name).join(', ')}</p>}

            <h3>Additional information</h3>
            <ul>
                <li><Link to='cast' >Cast</Link></li>
                <li> <Link to='reviews' >Reviews</Link></li>
            </ul>
            <Outlet />
        </>
    )
}

export default MovieDetails