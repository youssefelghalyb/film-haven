import React from 'react'

import styles from './styles.module.css';

//Components

import CardMovie from './CardMovie/CardMovie';
import PaginationFooter from "../Footer/pagination"

//Framer 
import { motion, } from 'framer-motion';

//BootStrap
import { Container, Row } from 'react-bootstrap';

const MovieList = ({ allmovies, getCurrentPage }) => {



    return (

        <Container>
            <Row>
                {
                    allmovies.length ? (
                        <>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 75 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.50, delay: 0.25 }}
                            >
                                <h1 className={styles.Head}>   All Movies  </h1>
                            </motion.div>

                            <div className={styles.MovieList}>
                                {
                                    allmovies.length ? (allmovies.map((el) => {
                                        return (
                                            <CardMovie key={el.id} el={el} />
                                        )
                                    }))
                                        : <h1>No data </h1>
                                }
                            </div>
                        </>
                    ) : <h1 style={{ color: '#fff', padding: '145px', textAlign: 'center' }}> No Movies With This Name </h1>
                }


            </Row>
            {
                allmovies.length ? (<PaginationFooter getCurrentPage={getCurrentPage} />) : null
            }

        </Container >
    )
}


export default MovieList