import React from 'react';
//Framer d
import { motion } from 'framer-motion';

//Styles 
import styles from "./styles.module.css"
import { Container, Row } from 'react-bootstrap';

//Tv Card 
import TvCard from './TvCard/TvCard';

//Pagination

import PaginationFooterTv from '../Footer/pagintationTv';


const TvShows = ({ shows, getCurrentPageTv }) => {





    return (
        <Container>
            <Row>
                {
                    shows && shows.length ? (
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
                                <h1 className={styles.Head}>   Tv Shows  </h1>
                            </motion.div>

                            <div className={styles.TvShows}>

                                {
                                    shows && shows.length ? (shows.map((el) => {
                                        return (
                                            <TvCard key={el.id} el={el} />
                                        )
                                    }))
                                        : <h1>No data </h1>

                                }

                            </div>
                        </>
                    )
                        : <h1 style={{ color: '#fff', padding: '145px', textAlign: 'center' }}> No TV Shows  </h1>
                }

                {
                    shows.length ? (<PaginationFooterTv getCurrentPageTv={getCurrentPageTv} />) : null
                }

            </Row>
        </Container>
    )
}



export default TvShows