import React from 'react'
import { Link } from 'react-router-dom'


const MovieList = ({ movies }) => {
    return (
        <>

            <ul>
                {movies.map((item) => (
                    <li key={item.id}>
                        <Link to={'/movies/' + item.id.toString()} >
                            <div>
                                <img src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} alt={item.title} width='200' />
                            </div>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default MovieList