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

const TvDetails = ({ shows }) => {
    const params = useParams();


    //Get Data To Publish the details API 
    const [tv, setTv] = useState([])
    const GetTvDetails = async () => {
        const TvDetalils = await axios.get(`https://api.themoviedb.org/3/tv/${params.Tvid}?language=en-US&api_key=c1b5fd97952f3dea6c7384b5c2fd1767`);
        setTv(TvDetalils.data)

    }

    useEffect(() => {
        GetTvDetails();
    }, [])

    return (
        <Container>
            <div className={styles.MainDetailsCont}>
                <div className={styles.tvDetails}>
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
                        <img alt='shows Poster' src={`https://image.tmdb.org/t/p/original/` + tv.backdrop_path} width='300px' height='400px' />
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
                        <div className={styles.TvContent}>
                            <h1>shows Name : <span className={styles.tvName}>{tv.name}</span> </h1>
                            <hr />
                            <div className={styles.tvData}>
                                <div>
                                    <h5>Popularity :{tv.popularity && <span> {tv.popularity.toLocaleString()} </span>}</h5>
                                    <h5>First Air Date :<span>  {tv.first_air_date}</span></h5>
                                    <h5> Last Air Date :<span> {tv.last_air_date}</span> </h5>
                                    <h5>Episodes Number :<span> {tv.number_of_episodes}</span></h5>
                                </div>
                                <div>
                                    <h5>Season :<span> {tv.number_of_seasons} </span></h5>
                                    <h5>language :<span> {tv.original_language}</span> </h5>
                                    <h5> Origin Country:<span> {tv.origin_country} </span></h5>
                                    <h5>Status:<span> {tv.status}  </span></h5>
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
                            {tv.overview}
                        </p>
                    </motion.div>
                    {/* Framer For Description  */}
                </div>
                <hr />
                <hr />
                <div className={styles.buttons}>
                    <button className={styles.button}><a href={tv.homepage} >Watch thw show</a></button>
                    <Link to='/TvShows'>
                        <button className={styles.button}>Back To shows List </button>
                    </Link>
                </div>

            </div>
        </Container>
    )
}



export default TvDetails