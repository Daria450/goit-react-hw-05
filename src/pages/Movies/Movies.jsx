import React, { useEffect, useState } from 'react'
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { searchMovies } from '../../services/tmdb-api';
import MovieList from '../../components/TrendingMovies/MovieList';






const Movies = () => {
    const [query, setQuery] = useState('');

    const handleChangeQuery = (newQuery) => {
        setQuery(newQuery);
    }
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovieById = async () => {
            try {
                const res = await searchMovies(query);
                setMovies(res.results);

            }

            catch (er) { console.log(er) }


        }

        getMovieById();

    }
        , [query])





    return (
        <>
            <SearchBar handleChangeQuery={handleChangeQuery} />

            {movies.length > 0 && <MovieList movies={movies} />}

        </>
    )
}

export default Movies