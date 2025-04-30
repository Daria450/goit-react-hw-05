import React, { useEffect, useState } from 'react'
import { fetchMovieReviews } from '../../services/tmdb-api';
import { useParams } from 'react-router-dom';
import s from './Reviews.module.css'

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
            <ul className={s.list}>
                {reviews && reviews.length > 0 ? (
                    reviews.map((item) => (
                        <li key={item.id}>
                            <p className={s.review}>{item.content}</p>
                            <p className={s.author}>{item.author_details.username}</p>
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