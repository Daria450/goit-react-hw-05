import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchCast } from '../../services/tmdb-api';
import s from './Cast.module.css'

const Cast = () => {
    const { movieId } = useParams();

    const [cast, setCast] = useState([]);
    useEffect(() => {
        const getMovieCast = async () => {
            try {
                const res = await fetchCast(movieId);
                setCast(res.cast);
            }

            catch (er) { console.log(er) }
        }
        getMovieCast();

    }
        , [movieId])

    return (
        <>
            <ul className={s.list}>
                {
                    cast.map((item) => (<li key={item.id}>
                        <img src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} alt={item.name} width='150' />
                        <p>{item.name}</p>
                        <p>Character: {item.character}</p>

                    </li>))
                }
            </ul>
        </>
    )
}

export default Cast