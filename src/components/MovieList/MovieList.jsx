import React from 'react'
import { Link } from 'react-router-dom'
import s from './MovieList.module.css'


const MovieList = ({ movies }) => {
    return (
        <>

            <ul className={s.list}>
                {movies.map((item) => (
                    <li className={s.li} key={item.id}>
                        <Link className={s.link} to={'/movies/' + item.id.toString()} >
                            <div>
                                <img src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} alt={item.title} width='200' />
                            </div>
                            <p> {item.title}</p>

                        </Link>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default MovieList