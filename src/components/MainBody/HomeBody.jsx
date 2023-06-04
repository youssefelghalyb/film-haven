import React from 'react';
import styles from './styles.module.css';
// Mini Components 
import TrendingMov from './trendingMov';
import UpComingMov from './upcomingMov';
import TopRateTvSer from './topratedTv';
import OnAirTv from './onAirTv';

//Bootstrap 
import { Container } from 'react-bootstrap';

const HomeBody = () => {
    return (
        <Container>

            <div className={styles.trend}>
                <h1>Trending Movies</h1>
                <div>
                    <TrendingMov />
                </div>
            </div>

            <div className={styles.trend}>
                <h1>Upcoming  Movies</h1>
                <div>
                    <UpComingMov />
                </div>
            </div>


            <div className={styles.trend}>
                <h1>Top Rated Tv Series </h1>
                <div>
                    <TopRateTvSer />
                </div>
            </div>

            <div className={styles.trend}>
                <h1>On Air Series </h1>
                <div>
                    <OnAirTv />
                </div>
            </div>

        </Container>
    );
};

export default HomeBody;


