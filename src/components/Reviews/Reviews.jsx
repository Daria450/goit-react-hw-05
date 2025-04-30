import React, { useEffect, useState } from 'react'
import { fetchMovieReviews } from '../../services/tmdb-api';
import { useParams } from 'react-router-dom';

const Reviews = () => {

    const { movieId } = useParams();

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            try {
                const res = await fetchMovieReviews(movieId);
                setReviews(res.results);
            }

            catch (er) { console.log(er) }
        }
        getReviews();

    }
        , [movieId])




    return (
        <>
            <ul>
                {reviews && reviews.length > 0 ? (
                    reviews.map((item) => (
                        <li key={item.id}>
                            <p>{item.content}</p>
                            <p>{item.author_details.username}</p>
                        </li>
                    ))
                ) : (
                    <p>No reviews available.</p>
                )}
            </ul>
        </>
    )
}

export default Reviews