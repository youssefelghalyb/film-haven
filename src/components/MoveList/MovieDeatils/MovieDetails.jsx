import React, { useState, useEffect } from 'react';

//API CALL 
import axios from 'axios';



//Styles 
import styles from './styles.module.css';

//Bootstrap
import { Container } from 'react-bootstrap';

//Framer 
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = ({ allmovies }) => {
    const params = useParams();


    //Get Data To Publish the details API 
    const [movie, setMovie] = useState([])
    const GetMovieDetails = async () => {
        const MovieDetalils = await axios.get(`https://api.themoviedb.org/3/movie/${params.Movid}?language=en-US&api_key=c1b5fd97952f3dea6c7384b5c2fd1767`);
        setMovie(MovieDetalils.data)

    }

    useEffect(() => {
        GetMovieDetails();

    }, [])

    return (
        <Container>
            <div className={styles.MainDetailsCont}>
                <div className={styles.movieDetails}>
                    {/* Framer For IMG  */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.50, delay: 0.25 }}
                    >
                        <img alt='Movie Poster' src={`https://image.tmdb.org/t/p/original/` + movie.backdrop_path} width='300px' height='400px' />
                    </motion.div>
                    {/* Framer For IMG  */}

                    {/* Framer For Content  */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.50, delay: 0.25 }}
                    >
                        <div className={styles.movContent}>
                            <h1>Movie Name : <span className={styles.movName}>{movie.original_title}</span> </h1>
                            <hr />
                            <div className={styles.movData}>
                                <div>
                                    <h5>Popularity :{movie.popularity && <span> {movie.popularity.toLocaleString()} </span>}</h5>
                                    <h5>Release Date :<span>  {movie.release_date}</span></h5>
                                    <h5> IMDB Score :<span> {movie.vote_average} /10</span> </h5>
                                    <h5>Vote Count :{movie.vote_count && <span> {movie.vote_count.toLocaleString()}</span>}</h5>
                                </div>
                                <div>
                                    <h5>Run Time  :<span> {movie.runtime} m</span></h5>
                                    <h5>language :<span> {movie.original_language}</span> </h5>
                                    <h5> Budget:{movie.budget && <span> {movie.budget.toLocaleString()} $</span>}</h5>
                                    <h5>Revenue:{movie.revenue && <span> {movie.revenue.toLocaleString()} $ </span>}</h5>


                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Framer For Content  */}
                </div>
                <hr />
                <hr />
                <div className={styles.Discription}>
                    {/* Framer For Description  */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.50, delay: 0.25 }}
                    >
                        <h2>Description</h2>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.50, delay: 0.50 }}
                    >
                        <p>
                            {movie.overview}
                        </p>
                    </motion.div>
                    {/* Framer For Description  */}
                </div>
                <hr />
                <hr />
                <div className={styles.buttons}>
                    <button className={styles.button}><a href={movie.homepage}>Watch Movie</a></button>
                    <Link to='/MovieList'>
                        <button className={styles.button}>Back To Movie List </button>
                    </Link>
                </div>

            </div>
        </Container>
    )
}



export default MovieDetails