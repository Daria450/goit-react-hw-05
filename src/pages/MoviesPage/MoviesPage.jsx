import React, { useEffect, useState } from 'react'
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { searchMovies } from '../../services/tmdb-api';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { LoadMoreBtn } from '../../components/LoadMoreBtn/LoadMoreBtn';
import toast from 'react-hot-toast';
import { ErrorMessage } from 'formik';
import Loader from '../../components/Loader/Loader';







const Movies = () => {

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [isError, setIsError] = useState(false);
    const [movies, setMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams('');
    const query = searchParams.get('query') ?? '';

    const handleChangeQuery = (newQuery) => {



        if (!newQuery) {
            searchParams.delete('query');
            return setSearchParams(searchParams);
        }
        searchParams.set('query', newQuery);
        setSearchParams(searchParams);
        setMovies([]);
        setPage(1);

    }
    const handleChangePage = () => {
        setPage(page + 1);
    }




    useEffect(() => {
        const abortController = new AbortController();
        const searchMoviesQuery = async () => {


            try {
                setLoading(true);
                const res = await searchMovies(query, page, abortController.signal);
                setMovies(prev => page === 1 ? res.results : [...prev, ...res.results]);
                setTotalPages(res.total_pages);

            }

            catch (error) {
                setIsError(true);
                toast.error(`${error}`);
            }
            finally { setLoading(false); };


        }

        searchMoviesQuery();
        return () => {
            abortController.abort();
        };

    }
        , [query, page])





    return (
        <>

            <SearchBar handleChangeQuery={handleChangeQuery} />
            {isError && < ErrorMessage />}
            {movies.length > 0 && <MovieList movies={movies} />}
            {loading && <Loader />}
            {movies.length > 0 && page < totalPages && !loading && (
                <LoadMoreBtn handleChangePage={handleChangePage} />
            )}
        </>
    )
}

export default Movies