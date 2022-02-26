import {useEffect, useState} from 'react'

import {instance, requests} from "../api"


const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        (async function fetchData() {
            const req = await instance.get(requests.fetchNetflixOriginals)
            setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)])
        })()
    }, [])


    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (
        <header className="banner"
                style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">Add to My List</button>
                </div>

                <h1 className="banner-desc">
                    {
                        truncate(movie?.overview, 150)
                    }
                </h1>
            </div>

            <div className="banner-fade-bottom"/>
        </header>
    );
};

export default Banner;
