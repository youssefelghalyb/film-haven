import axios from "axios";
import React, { useEffect, useState } from "react";


//Splide Slider 
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

//Styles 
import styles from './styles.module.css';
import '@splidejs/react-splide/css/sea-green';
import { Link } from "react-router-dom";

//Bootstrap 
import { Container } from "react-bootstrap";



const UpComingMov = () => {
    const [upcomingMov, setUpcomingMov] = useState([])

    const getUpcomMov = async () => {
        const trendMov = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=c1b5fd97952f3dea6c7384b5c2fd1767')

        setUpcomingMov(trendMov.data.results)


    }

    useEffect(() => {
        getUpcomMov()

    }, [])


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
                    upcomingMov.map((el) => {
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

export default UpComingMov;
