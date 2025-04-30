import React, { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import { fetchTrendingMovies } from '../../services/tmdb-api';
import s from './Home.module.css'

const Home = () => {


    const [trendingMovies, setTrendingMovies] = useState([]);
    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                const res = await fetchTrendingMovies();
                setTrendingMovies(res.results);

            }

            catch (er) { console.log(er) }


        }

        getTrendingMovies();

    }
        , [])

    return (
        <>
            <h2 className={s.h2}> Trending Today</h2>
            <MovieList movies={trendingMovies} />
        </>
    )
}

export default Home