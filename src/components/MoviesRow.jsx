import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {instance} from "../api"


const MoviesRow = ({title, fetchUrl, isLargeRow = false}) => {
    const [movies, setMovies] = useState([])

    const base_url = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        (async function fetchData() {
            const req = await instance.get(fetchUrl)
            setMovies(req.data.results)
        })()
    }, [fetchUrl])



    return (
        <div className="movies-row">
            <h2>{title}</h2>

            <div className="movies-posters">
                <Swiper
                    slidesPerView={8}
                    spaceBetween={10}
                    breakpoints={{
                        200: {
                            slidesPerView: 1.1,
                        },
                        320: {
                            slidesPerView: 2.3,
                            spaceBetween: 5,
                        },
                        380: {
                            slidesPerView: 3.2,
                            spaceBetween: 5,
                        },
                        530: {
                            slidesPerView: 4.2,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 5.2,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 7.3,
                            spaceBetween: 7,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        movies?.map(item =>
                            <SwiperSlide>
                                <img className={`movies-poster ${isLargeRow && "movies-poster-large"}`}
                                     src={`${base_url}${isLargeRow ? item.poster_path : item.backdrop_path}`}
                                     alt={item.name}
                                />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default MoviesRow;
