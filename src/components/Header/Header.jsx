import React from 'react';
import styles from './styles.module.css'
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <div className={styles.headerMoviePoster}>
                <h5> New Release </h5>
                <h1>Ottoman </h1>
                <h1 className={styles.transperentText}>Rising</h1>
                <div className={styles.dispalyFlex} style={{ marginTop: "30px" }}>
                    <div className={styles.movHeaderData}>
                        <b> 5.6  </b>
                        <b>IMDB Score </b>
                    </div>
                    <h6>2020</h6>

                    <div className={styles.hedaerHd}>
                        <b>720</b>
                        <b>   HD</b>
                    </div>

                    <h6 className={styles.headerCaty}> Action , Drama </h6>
                </div>
                <p className={styles.headerDisc}>
                    Ottoman Sultan Mehmed II wages an epic campaign to take the Byzantine capital
                    of Constantinople and shapes the course of history for centuries.
                </p>

                <button className={styles.hedaerBtn} ><a target='_blank' rel='noreferrer' href='https://www.imdb.com/video/vi3329146649/?playlistId=tt9244578&ref_=tt_ov_vi'> Trailer</a></button>
            </div>


        </Container>
    )
}


export default Header