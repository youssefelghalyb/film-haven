import React from 'react';
import { Link } from 'react-router-dom';



//Styles
import styles from './styles.module.css'

const TvCard = ({ el }) => {
    return (
        <>
            {

                <Link to={`/tv/${el.id}`} >
                    <div key={el} className={styles.card}>
                        <img
                            src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                            alt='Show Poster'
                            className={styles.img}
                        />
                        <div className={styles.TvShowData}>
                            <p>Name: {el.name}</p>
                            <p>First Air Date: {el.first_air_date}</p>
                            <p>Popularity: {el.popularity}</p>
                            <p>Rate: {el.vote_average}</p>
                        </div>
                    </div>
                </Link >

            }

        </>
    );
};


export default TvCard