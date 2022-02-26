import {requests} from "../api";
import Nav from "./Nav";
import Banner from "./Banner";
import MoviesRow from "./MoviesRow";

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <Nav/>
            <Banner/>

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
            <MoviesRow
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <MoviesRow
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <MoviesRow
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    );
};

export default HomeScreen;
