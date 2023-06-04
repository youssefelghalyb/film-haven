import axios from "axios";
import React, { useEffect, useState } from "react";


//Splide Slider 
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

//Styles 
import styles from './styles.module.css';
import '@splidejs/react-splide/css/sea-green';
import { Link } from "react-router-dom";

//BootStrap
import { Container } from "react-bootstrap";



const TrendingMov = () => {
    const [trendMov, setTrendMov] = useState([])

    const getTrendMov = async () => {
        const trendMov = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=c1b5fd97952f3dea6c7384b5c2fd1767')

        setTrendMov(trendMov.data.results)


    }

    useEffect(() => {
        getTrendMov()

    }, [])
    console.log(trendMov)


    return (
        <div className={styles.trendMov}>
            <Splide
                options={{
                    rewind: true,
                    gap: '1rem',
                    fixedWidth: 250,
                    pagination: false,
                    perPage: 2
                }}
            >
                {
                    trendMov.map((el) => {
                        return (


                            <SplideSlide>
                                <Link to={`/movie/${el.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} />
                                </Link>
                            </SplideSlide>


                        )
                    })
                }

            </Splide>
        </div>


    )
}

export default TrendingMov;
