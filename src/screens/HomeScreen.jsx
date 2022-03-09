import { requests } from "../api";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import MoviesRow from "../components/MoviesRow";

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <Nav />
            <Banner />

            <MoviesRow
                title="Netflix Originals"
                fetchUrl={requests.fetchNetflixOriginals}
            />
            <MoviesRow
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
            />
            <MoviesRow
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />
            <MoviesRow
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />
            <MoviesRow
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
            />
        </div>
    );
};

export default HomeScreen;
