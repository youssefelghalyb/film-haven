import React from 'react';
import { Link } from 'react-router-dom';


//Bootstrap
import { Col } from 'react-bootstrap';
//Styles
import styles from './styles.module.css'

const CardMovie = ({ el }) => {
    return (
        <Col xs='6' md='4' lg='3'>
            <Link to={`/movie/${el.id}`}>
                <div className={styles.card}>
                    <img src={`https://image.tmdb.org/t/p/original/` + el.backdrop_path} alt='Movie Name' className={styles.img} />
                    <div className={styles.movieData}>
                        <p>Movie Name : {el.title} </p>
                        <p>Release Date : {el.release_date}</p>
                        <p>popularity : {el.popularity}</p>
                        <p> Rate :{el.vote_average}</p>
                    </div>
                </div>
            </Link>
        </Col >
    )
}


export default CardMovie